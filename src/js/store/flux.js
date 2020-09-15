const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: []
		},

		actions: {
			loadUsers: async () => {
				let response = await fetch("https://3000-a3c7cbbf-e63e-43d0-8e03-75806fdf768b.ws-eu01.gitpod.io/user/");
				response = await response.json();

				setStore({
					user: response
				});
			}
		}
	};
};

export default getState;
