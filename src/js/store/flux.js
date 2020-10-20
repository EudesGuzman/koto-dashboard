import { encode } from "base-64";

const urlBase = "https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: [],
			courses: [],
			schools: [],
			students: [],
			stage: [],
			teacher: []
		},

		actions: {
			login: async (email, password) => {
				let response = await fetch(
					"https://3000-ccbd7388-9d0c-4438-90c9-9aaac0ef722f.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: { Authorization: "Basic " + require("base-64").encode(email + ":" + password) }
						//headers:{"X-Access-Tokens": getStore().token}
					}
				);

				response = await response.json();

				setStore({ token: response.token });
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
				let urlExt = "https://3000-ccbd7388-9d0c-4438-90c9-9aaac0ef722f.ws-eu01.gitpod.io/schools";

				var myHeaders = new Headers();

				/* const token = getStore(); */
				const token = getStore().token;

				myHeaders.append("X-Access-Tokens", token);
				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};

				try {
					let res = await fetch(urlExt, requestOptions);
					let result = await res.json();
					console.log(result);
					setStore({
						schools: result
					});
				} catch (error) {
					console.log("error", error);
				}
			},
			loadStudent: async () => {
				let urlExt = "https://3000-ccbd7388-9d0c-4438-90c9-9aaac0ef722f.ws-eu01.gitpod.io/students";

				var myHeaders = new Headers();

				/* const token = getStore(); */
				const token = getStore().token;

				myHeaders.append("X-Access-Tokens", token);
				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};

				try {
					let res = await fetch(urlExt, requestOptions);
					let result = await res.json();

					setStore({
						students: result
					});
				} catch (error) {
					console.log("error", error);
				}
			},
			loadStage: async () => {
				let response = await fetch(
					"https://3000-ccbd7388-9d0c-4438-90c9-9aaac0ef722f.ws-eu01.gitpod.io/stages"
				);
				response = await response.json();
				setStore({
					stage: response
				});
			},
			logOut: async () => {
				setStore({
					token: ""
				});
			},
			loadTeacher: async () => {
				let urlExt = "https://3000-ccbd7388-9d0c-4438-90c9-9aaac0ef722f.ws-eu01.gitpod.io/teachers";

				var myHeaders = new Headers();

				/* const token = getStore(); */
				const token = getStore().token;

				myHeaders.append("X-Access-Tokens", token);
				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};

				try {
					let res = await fetch(urlExt, requestOptions);
					let result = await res.json();
					console.log(result);
					setStore({
						teacher: result
					});
				} catch (error) {
					console.log("error", error);
				}
			}
		}
	};
};

export default getState;
