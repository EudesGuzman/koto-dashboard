import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import { Problems } from "../component/Problems";

function getLastLevel(stageElement) {
	let string_levels = Object.keys(stageElement.level);
	var levels = string_levels.map(function(x) {
		return parseInt(x, 10);
	});
	levels.sort();
	let lastLevel = levels[levels.length - 1];
	//console.log(lastLevel);
	return lastLevel.toString();
}

function getLastProblem(stageElement, levels) {
	let lastProblems = Object.keys(stageElement.level[levels].problem).filter(
		pro => stageElement.level[levels].problem[pro].completed === true
	);

	var problems = lastProblems.map(function(x) {
		return parseInt(x, 10);
	});

	problems.sort();

	let lastProblemInLevel = problems[problems.length - 1];

	return lastProblemInLevel.toString();
}

export const ClassName = () => {
	const { actions, store } = useContext(Context);

	const arrayDeTh = [];
	let count = 0;

	for (let x = 0; x < 24; x++) {
		if (count < 4) {
			count += 1;
		} else {
			count = 1;
		}
		arrayDeTh.push("P".concat(count));
	}

	function getProblems(student) {
		let problems = [];
		const stage = student.gameStatus.stage["1"];

		Object.keys(stage.level).map(e => {
			const level = stage.level[e];
			Object.keys(level.problem).map(p => {
				problems.push(level.problem[p]);
			});
		});

		return problems;
	}
	function getTrueOrFalse(student, lastLevel, lastProblem) {
		const stage = student.gameStatus.stage["1"];
		let isTrueOrFalse = [];

		Object.keys(stage.level).map(e => {
			const level = stage.level[e];
			Object.keys(level.problem).map(p => {
				if (e === lastLevel && p === lastProblem) {
					isTrueOrFalse.push(true);
				} else {
					isTrueOrFalse.push(false);
				}
			});
		});
		return isTrueOrFalse;
	}

	return (
		<div>
			<table border="1">
				<thead>
					<tr>
						<th />
						<th colSpan="4">L1</th>
						<th colSpan="4">L2</th>
						<th colSpan="4">L3</th>
						<th colSpan="4">L4</th>
						<th colSpan="4">L5</th>
						<th colSpan="4">L6</th>
					</tr>

					<tr>
						<th scope="row" abbr="Capacidad" className="text-uppercase">
							students
						</th>

						{arrayDeTh.map((c, index) => {
							return <th key={index}>{c}</th>;
						})}
					</tr>

					{store.students.map(stu => (
						<tr key={stu.id}>
							<th>{stu.name}</th>

							{arrayDeTh.map((c, index) => {
								const lastLevelKoto = getLastLevel(stu.gameStatus.stage["1"]);
								const lastPorblemKoto = getLastProblem(stu.gameStatus.stage["1"], lastLevelKoto);

								return (
									<Problems
										key={index}
										problem={getProblems(stu)[index]}
										trueOrFalse={getTrueOrFalse(stu, lastLevelKoto, lastPorblemKoto)[index]}
									/>
								);
							})}
						</tr>
					))}
				</thead>
			</table>
		</div>
	);
};
