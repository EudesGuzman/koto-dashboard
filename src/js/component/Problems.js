import React, { useState } from "react";
import { ClassName } from "../views/ClassName";

export const Problems = props => {
	if (props.problem === undefined) {
		return <td />;
	} else {
		const { completed, difficulty } = props.problem;
		const { levels, levelNumberPaint, completedT, stageT } = props;

		console.log("aqui esto€€€€€€€€€€€€", stageT);

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

		/* if (stageT != undefined && levels != undefined) {
			Object.keys(stageT.level).map(e => {
				Object.keys(levels.problem).map(t => {
					if (e === levelNumberPaint && t === completedT) {
						console.log("hola");
					}
				});
			});
		}

		if (levels != undefined) {
		} */

		/* Object.keys(levels).map((l, i) => {
			//console.log("aqui esta la l---->>", levels[l]);
			if (parseInt(levelNumberPaint - 1) === parseInt(l)) {
				console.log("hemos llegado", parseInt(l));
				color = "red";
			}
		}); */

		return <td style={{ "background-color": color }}>{completed ? "" : "X"}</td>;
	}
};
