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

	return lastLevel.toString();
}

function getLastProblem(stageElement, levels) {
	let problemKeys = Object.keys(stageElement.level[levels].problem);

	let problemCompleted = [];

	const completedProblemKeys = problemKeys.filter(p => {
		const problem = stageElement.level[levels].problem[p];
		const diffKeys = Object.keys(problem.difficulty);
		const completedDiffKeys = diffKeys.filter(dk => problem.difficulty[dk].completed);
		return completedDiffKeys.length > 0;
	});

	if (completedProblemKeys.length > 0) {
		var problems = completedProblemKeys.map(function(x) {
			return parseInt(x, 10);
		});

		problems.sort();

		let lastProblemInLevel = problems[problems.length - 1];

		return lastProblemInLevel.toString();
	} else {
		return null;
	}
}

export const ClassName = () => {
	const { actions, store } = useContext(Context);

	useEffect(
		() => {
			if (store.stage["levels"] != undefined) {
				console.log(store.stage["levels"].length);
			}
		},
		[store.stage]
	);

	const arrayDeTh = [];
	let count = 0;

	for (let x = 0; x < 32; x++) {
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
		const stage = student.game_status.stage["1"];

		Object.keys(stage.level).map(e => {
			const level = stage.level[e];
			Object.keys(level.problem).map(p => {
				problems.push(level.problem[p]);
			});
		});

		return problems;
	}

	function getTrueOrFalse(student, lastLevel, lastProblem) {
		const stage = student.game_status.stage["1"];
		let isTrueOrFalse = [];

		Object.keys(stage.level).map(e => {
			const level = stage.level[e];

			Object.keys(level.problem).map(p => {
				const problem = level.problem[p];

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
			<div>
				<div className="scroll scrollbar-kotokan">
					<table>
						<thead>
							<tr>
								<th />
								<th colSpan="4" className="text-center">
									L1
								</th>
								<th colSpan="4" className="text-center">
									L2
								</th>
								<th colSpan="4" className="text-center">
									L3
								</th>
								<th colSpan="4" className="text-center">
									L4
								</th>
								<th colSpan="4" className="text-center">
									L5
								</th>
								<th colSpan="4" className="text-center">
									L6
								</th>
								<th colSpan="4" className="text-center">
									L7
								</th>
							</tr>

							<tr>
								<th scope="row" abbr="Capacidad" className="text-uppercase">
									students
								</th>

								{arrayDeTh.map((c, index) => {
									return (
										<th key={index} className="text-center">
											{c}
										</th>
									);
								})}
							</tr>

							{store.students.map(stu => (
								<tr key={stu.id}>
									<th>{stu.name}</th>

									{arrayDeTh.map((c, index) => {
										const lastLevelKoto = getLastLevel(stu.game_status.stage["1"]);

										const lastPorblemKoto = getLastProblem(
											stu.game_status.stage["1"],
											lastLevelKoto
										);

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

				<br />
			</div>
			<br />
			<div className="legenda ">
				<h5>Information</h5>

				<div className="container-flex">
					<div className="row">
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  legend d1"> </div>
									<div className="col-sm ">Level 1</div>
								</div>
							</div>

							{/* ************** */}
						</div>
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  legend d3" />
									<div className="col-sm ">Level 3</div>
								</div>
							</div>

							{/* ************** */}
						</div>
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  lastPoint legend marcas">
										<i className="fas fa-circle lastPoint" />
									</div>
									<div className="col-sm ">The highest problem resolved</div>
								</div>
							</div>

							{/* ************** */}
						</div>
					</div>
					<br />
					{/* ******   ROW 2 ********* */}
					<div className="row">
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  legend d2" />
									<div className="col-sm  ">Level 2</div>
								</div>
							</div>

							{/* ************** */}
						</div>
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  legend d4" />
									<div className="col-sm ">Level 4</div>
								</div>
							</div>

							{/* ************** */}
						</div>
						<div className="col-sm">
							{/* ************** */}
							<div className="container">
								<div className="row">
									<div className="col-xs  legend marcas">
										<i className="fa fa-times " aria-hidden="true" />
									</div>
									<div className="col-sm ">Abandoned after trying</div>
								</div>
							</div>

							{/* ************** */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
