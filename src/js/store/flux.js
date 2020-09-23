const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			student: []
		},
		actions: {
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
