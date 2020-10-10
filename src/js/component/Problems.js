import React, { useState } from "react";
import { ClassName } from "../views/ClassName";

export const Problems = props => {
	if (props.problem === undefined) {
		return <td />;
	} else {
		const { completed, difficulty } = props.problem;
		const { trueOrFalse, started, finished } = props;

		let color = "white";
		const colors = { "1": "#f8e71c", "2": "#f5a623", "3": "#8b470a", "4": "#4a4a4a" };

		Object.keys(difficulty)
			.sort((a, b) => parseInt(a) - parseInt(b))
			.map(key => {
				let value = difficulty[key];

				if (value.completed) {
					color = colors[key];
				}
			});

		if (trueOrFalse) {
			return (
				<td style={{ "background-color": color }}>
					<i className="fas fa-circle lastPoint" />
				</td>
			);
		} else {
			if (difficulty[1].started == true && difficulty[1].completed == false) {
				return (
					<td className="problem-not-finished ">
						<i className="fa fa-times " aria-hidden="true" />
					</td>
				);
			} else {
				return <td style={{ "background-color": color }} />;
			}
		} //else
	}
};

/* if (trueOrFalse) {
			return (
				<td style={{ "background-color": color }}>
					<i className="fas fa-circle lastPoint" />
				</td>
			);
		} else {
			if (difficulty[1].started == true && difficulty[1].completed == false) {
				return (
					<td className="problem-not-finished ">
						<i className="fa fa-times " aria-hidden="true" />
					</td>
				);
			} else if (difficulty[2].started == true && difficulty[2].completed == false) {
				return (
					<td className="problem-not-finished">
						<i className="fa fa-times " aria-hidden="true" />
					</td>
				);
			} else if (difficulty[3].started == true && difficulty[3].completed == false) {
				return (
					<td className="problem-not-finished">
						<i className="fa fa-times " aria-hidden="true" />
					</td>
				);
			} else if (difficulty[4].started == true && difficulty[4].completed == false) {
				return (
					<td className="problem-not-finished">
						<i className="fa fa-times " aria-hidden="true" />
					</td>
				);
			} else {
				return <td style={{ "background-color": color }} />;
			}
		} //else
	}
}; */
