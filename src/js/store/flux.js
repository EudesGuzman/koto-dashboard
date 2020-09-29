import { encode } from "base-64";

const urlBase = "https://3000-edef1a0e-45d1-4207-a215-9bb4e83c5e0b.ws-eu01.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: [],
			courses: [],
			students: [
				{
					id: "babeVot7U6RZqdTht6g4",
					gameStatus: {
						stage: {
							"1": {
								countHachi: 3,
								level: {
									"1": {
										problem: {
											"1": {
												difficulty: {
													"1": {
														completed: true,
														playCount: 1,
														started: true,
														points: 55,
														id: 1
													},
													"2": {
														points: 0,
														id: 1,
														completed: false,
														playCount: 0,
														started: false
													},
													"3": {
														playCount: 0,
														started: false,
														points: 0,
														id: 1,
														completed: false
													},
													"4": {
														playCount: 0,
														started: false,
														points: 0,
														id: 1,
														completed: false
													}
												},
												completed: true
											},
											"2": {
												difficulty: {
													"1": {
														points: 75,
														id: 2,
														completed: true,
														playCount: 1,
														started: true
													},
													"2": {
														points: 0,
														id: 2,
														completed: false,
														playCount: 0,
														started: false
													},
													"3": {
														completed: false,
														playCount: 0,
														started: false,
														points: 0,
														id: 2
													},
													"4": {
														playCount: 0,
														started: false,
														points: 0,
														id: 2,
														completed: false
													}
												},
												completed: true
											},
											"3": {
												completed: true,
												difficulty: {
													"1": {
														playCount: 1,
														started: true,
														points: 70,
														id: 3,
														completed: true
													},
													"2": {
														playCount: 0,
														started: false,
														points: 0,
														id: 3,
														completed: false
													},
													"3": {
														points: 0,
														id: 3,
														completed: false,
														playCount: 0,
														started: false
													},
													"4": {
														points: 0,
														id: 3,
														completed: false,
														playCount: 0,
														started: false
													}
												}
											},
											"4": {
												difficulty: {
													"1": {
														playCount: 0,
														started: true,
														points: 0,
														id: 4,
														completed: false
													},
													"2": {
														completed: false,
														playCount: 0,
														started: false,
														points: 0,
														id: 4
													},
													"3": {
														playCount: 0,
														started: false,
														points: 0,
														id: 4,
														completed: false
													},
													"4": {
														playCount: 0,
														started: false,
														points: 0,
														id: 4,
														completed: false
													}
												}
											}
										}
									}
								}
							}
						}
					},
					name: "Elisha",
					avatar: {
						name: "Jolia",
						static:
							"https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FJolia_1.png?alt=media&token=8030ea96-07b3-44d8-abfe-e084251e8857",
						gif:
							"https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FJolia_1.gif?alt=media&token=369f7ce6-7b83-4a3a-8ac1-3cd89741b52d"
					}
				}
			]
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
					"https://3000-d1817298-399a-4eff-90b3-727a3c26a7e8.ws-eu01.gitpod.io/students"
				);
				response = await response.json();

				setStore({
					students: response
				});
			}
		}
	};
};

export default getState;
