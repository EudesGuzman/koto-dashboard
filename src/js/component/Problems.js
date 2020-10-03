import React, { useState } from "react";
import { ClassName } from "../views/ClassName";

export const Problems = props => {
	if (props.problem === undefined) {
		return <td />;
	} else {
		const { completed, difficulty } = props.problem;
		const { trueOrFalse } = props;
		console.log("aqui esto€€€€€€€€€€€€", trueOrFalse);

		let color = "white";
		const colors = { "1": "yellow", "2": "green", "3": "red", "4": "blue" };

		if (trueOrFalse) {
			Object.keys(difficulty)
				.sort((a, b) => parseInt(a) - parseInt(b))
				.map(key => {
					let value = difficulty[key];

					if (value.completed) {
						color = colors[key];
					}
				});
			return (
				<td style={{ "background-color": color }}>
					<i className="fas fa-circle lastPoint" />
				</td>
			);
		} else {
			Object.keys(difficulty)
				.sort((a, b) => parseInt(a) - parseInt(b))
				.map(key => {
					let value = difficulty[key];

					if (value.completed) {
						color = colors[key];
					}
				});

			return <td style={{ "background-color": color }} />;
		}
	}
};
