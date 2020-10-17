import { encode } from "base-64";

const urlBase = "https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: [],
			courses: [],
			students: [],
			stage: []
		},

		actions: {
			login: async (email, password) => {
				let response = await fetch(
					"https://3000-ad4f3710-dc0d-4557-9241-a87d6a3f45f4.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: { Authorization: "Basic " + require("base-64").encode(email + ":" + password) }
						//headers:{"X-Access-Tokens": getStore().token}
					}
				);

				response = await response.json();
				console.log(response);
				setStore({ token: response });
			},

			loadUsers: async () => {
				let response = await fetch(
					"https://3000-a32b9492-7b21-4054-a2a1-a87fb7bf84f2.ws-eu01.gitpod.io/teachers"
				);
				response = await response.json();

				setStore({
					user: response
				});
			},

			loadClasses: async () => {
				let response = await fetch(
					"https://3000-ce9f707b-14a0-4525-bc1a-75c19b455643.ws-eu01.gitpod.io/courses"
				);
				response = await response.json();

				setStore({
					courses: response
				});
			},
			loadStudent: async () => {
				let response = await fetch(
					"https://3000-ad4f3710-dc0d-4557-9241-a87d6a3f45f4.ws-eu01.gitpod.io/teachers/11/students"
				);
				response = await response.json();
				setStore({
					students: response
				});
			},
			loadStage: async () => {
				let response = await fetch(
					"https://3000-ad4f3710-dc0d-4557-9241-a87d6a3f45f4.ws-eu01.gitpod.io/stages"
				);
				response = await response.json();
				setStore({
					stage: response
				});
			}
		}
	};
};

export default getState;
