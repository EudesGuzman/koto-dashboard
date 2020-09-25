const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			courses: [],
			enrollments: []
			student: []
		},

		actions: {
			loadUsers: async () => {
				let response = await fetch("https://3000-ce9f707b-14a0-4525-bc1a-75c19b455643.ws-eu01.gitpod.io/user/");
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
					"https://3000-de550fc6-f913-4714-9352-246c4c81b707.ws-eu01.gitpod.io/students"
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
