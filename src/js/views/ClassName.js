import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import { Problems } from "../component/Problems";

export const ClassName = () => {
	const { actions, store } = useContext(Context);

	const [levelNumber, setLevelNumber] = useState(null);
	const [level, setLevel] = useState([]);
	const [problema, setProblema] = useState([]);
	const [difficulty, setDifficulty] = useState(null);
	const [completedTrue, setCompletedTrue] = useState(null);

	const [stages, setStages] = useState([]);

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
		console.log();
		const stage = student.gameStatus.stage["1"];

		Object.keys(stage.level).map(e => {
			const level = stage.level[e];
			Object.keys(level.problem).map(p => {
				problems.push(level.problem[p]);

				//console.log("problem-->>", problem);
				/* 	Object.keys(problem.difficulty).map(d => {
                    const difficulty = problem.difficulty[p];
                    console.log("difficulty--->>>", difficulty); */
				/* }); */
			});
		});
		return problems;
	}

	const mapLevel = () => {};

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
								return <Problems key={index} problem={getProblems(stu)[index]} />;
							})}
						</tr>
					))}
				</thead>
			</table>
		</div>
	);
};
