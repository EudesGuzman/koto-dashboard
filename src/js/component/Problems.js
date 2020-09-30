import React, { useState } from "react";
import { ClassName } from "../views/ClassName";

export const Problems = props => {
	//console.log("######################solo de props-->>", props.problem);

	const [puntoNegro, setPuntoNegro] = useState("");

	if (props.problem === undefined) {
		return <td />;
	} else {
		console.log("aqui esto€€€€€€€€€€€€", props.problem);

		const { completed, difficulty } = props.problem;

		console.log("aqui ", difficulty);

		let color = "white";
		const colors = { "1": "yellow", "2": "green", "3": "red", "4": "blue" };

		Object.keys(difficulty)
			.sort((a, b) => parseInt(a) - parseInt(b))
			.map(key => {
				let value = difficulty[key];

				if (value.completed) {
					color = colors[key];
				}
			});

		return <td style={{ "background-color": color }}>{completed ? "" : "X"}</td>;
	}
};
