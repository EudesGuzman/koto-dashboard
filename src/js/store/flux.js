import { encode } from "base-64";

const urlBase = "https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: [],
			courses: [],
			enrollments: [],
			student: []
		},

		actions: {
			login: async (email, password) => {
				let response = await fetch(
					"https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: { Authorization: "Basic " + require("base-64").encode(email + ":" + password) }
						//headers:{"X-Access-Tokens": getStore().token}
					}
				);

				response = await response.json();
				setStore({ token: response.token });

				console.log(response);
			},

			loadUsers: async () => {
				let response = await fetch("https://3000-ce9f707b-14a0-4525-bc1a-75c19b455643.ws-eu01.gitpod.io/user");
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
			loadEnrollments: async () => {
				let response = await fetch(
					"https://3000-ce9f707b-14a0-4525-bc1a-75c19b455643.ws-eu01.gitpod.io/enrollments"
				);
				response = await response.json();

				setStore({
					enrollments: response
				});
			},
			loadStudent: async () => {
				let response = await fetch(
					"https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/students"
				);
				response = await response.json();

				setStore({
					student: response
				});
			}
		}
	};
};

export default getState;
