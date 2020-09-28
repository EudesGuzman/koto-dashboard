import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";

export const ClassName = () => {
	const { actions, store } = useContext(Context);

	useEffect(
		() => {
			//const student = store.students[0];

			console.log("holaaaa--->>>>>>>>>>>", store.students);
			if (store.students.length > 0) {
				const student = store.students[0];
				const stage = student.game_status.stage[1];

				Object.keys(stage.level).map(e => {
					const level = stage.level[e];
					Object.keys(level.problem).map(p => {
						const problem = level.problem[p];
						console.log("ppp-->>", problem);
						Object.keys(problem.difficulty).map(d => {
							const difficulty = problem.difficulty[p];
							console.log("dddd--->>>", difficulty);
						});
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

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>

						<td>p1</td>
						<td>p2</td>
						<td>p3</td>
						<td>p4</td>
					</tr>

					{store.students.map(stu => (
						<tr key={stu.id}>
							<th>{stu.name}</th>
							<td />
						</tr>
					))}
				</thead>
			</table>
		</div>
	);
};
