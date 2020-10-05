import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import { Problems } from "../component/Problems";

function getLastLevel(stageElement) {
	let string_levels = Object.keys(stageElement.level);
	//console.log(string_levels);
	var levels = string_levels.map(function(x) {
		return parseInt(x, 10);
	});
	levels.sort();
	let lastLevel = levels[levels.length - 1];
	//console.log(lastLevel);
	return lastLevel.toString();
}

function getLastProblem(stageElement, levels) {
	//const [lastProblemCompleted, setLastProblemCompleted] = useState(null);

	let lastProblems = Object.keys(stageElement.level[levels].problem).filter(
		pro => stageElement.level[levels].problem[pro].completed === true
	);

	//console.log("estoy aqui", lastProblems);

	var problems = lastProblems.map(function(x) {
		return parseInt(x, 10);
	});

	problems.sort();

	let lastProblemInLevel = problems[problems.length - 1];

	//console.log(lastProblemInLevel);

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
		console.log();
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

			<br />
			<div className="legenda">
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
