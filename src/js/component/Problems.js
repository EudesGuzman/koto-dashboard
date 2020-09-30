import React from "react";

export const Problems = props => {
	console.log("######################solo de props-->>", props);

	if (props.problemas === undefined) {
		return <td />;
	}

	let color = "white";
	const colors = { "1": "yellow", "2": "brown", "3": "red", "4": "black" };

	Object.keys(props.problemas.difficulty)
		.sort((a, b) => parseInt(a) - parseInt(b))
		.map(key => {
			let value = props.problemas.difficulty[key];

			if (value.completed) {
				color = colors[key];
			}
		});

	return <td style={{ "background-color": color }}>pepitorf</td>;
};
