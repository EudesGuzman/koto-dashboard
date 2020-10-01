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

	useEffect(
		() => {
			//const student = store.students[0];

			//console.log("holaaaa--->>>>>>>>>>>", store.students);
			if (store.students.length > 0) {
				const student = store.students[0];
				const stage = student.gameStatus.stage["1"];
				setStages(stages => {
					return [...stages, stage];
				});

				Object.keys(stage.level).map(e => {
					const level = stage.level[e];
					//console.log("level----->>", e);

					setLevelNumber(levelNumber => {
						return e;
					});

					setLevel(level => {
						return [...level, stage.level[e]];
					});

					Object.keys(level.problem).map(p => {
						if (level.problem[p].completed) {
							//console.log("aqui esta la p-->", p);
							setCompletedTrue(completedTrue => {
								return p;
							});
						}

						setProblema(problema => {
							return [...problema, level.problem[p]];
						});

						//console.log("problem-->>", problem);
						/* 	Object.keys(problem.difficulty).map(d => {
							const difficulty = problem.difficulty[p];
							console.log("difficulty--->>>", difficulty); */
						/* }); */
					});
				});
			}
			//const stage = student.game_status.stage[1];
			//console.log(Object.keys(stage.level));
		},
		[store.students]
	);

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
								return (
									<Problems
										key={index}
										problem={problema[index]}
										levels={level[index]}
										levelNumberPaint={levelNumber}
										completedT={completedTrue}
										stageT={stages[index]}
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
