import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Problem } from "../component/Problem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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

export const Stage = () => {
	const [levels, setLevels] = useState([]);
	const [content, setContent] = useState({});
	const [stage, setStage] = useState();
	const { actions, store } = useContext(Context);
	const [headerLevels, setHeaderLevels] = useState([]);
	const [headerProblems, setHeaderProblems] = useState([]);
	const [studentRows, setStudentRows] = useState([]);
	const [prueba, setSPrueba] = useState([]);

	const [numberOfStage, setNumberOfStage] = useState(0);

	useEffect(
		() => {
			if (store.stage != undefined && store.stage.length > 0) {
				setStage(store.stage[numberOfStage]["kotokan_id"]);
				setLevels(store.stage[numberOfStage]["levels"]);
				setContent(store.stage[numberOfStage]["content"]);
				setSPrueba(store.stage);
			}
		},
		[store.stage, numberOfStage]
	);

	useEffect(
		() => {
			if (levels) {
				setHeaderLevels(
					levels.map(function(level, index) {
						let problemCount = level.problemCount;
						return (
							<th colSpan={problemCount} className="text-center texto-gris" key={index}>
								L {level["id"]}
							</th>
						);
					})
				);

				setHeaderProblems(
					levels.map(function(level, index) {
						let row = [];
						for (let i = 0; i < level.problemCount; i++) {
							row.push(
								<th key={i + 1} className="text-center texto-gris">
									{i + 1}
								</th>
							);
						}
						return row;
					})
				);
			}
		},
		[levels]
	);

	useEffect(
		() => {
			if (stage) {
				if (store.students.length > 0) {
					setStudentRows(
						store.students.map(stu => {
							//console.log(store.students); // array 26 estudiantes
							let gameStatus = [];
							if (stu.game_status.stage !== undefined) {
								const gsStage = stu.game_status.stage[stage];
								//console.log(gsStage); // counthachi y cada uno de los niveles de cada estudiante
								if (gsStage !== undefined) {
									gameStatus = levels.map((level, index) => {
										const gsLevel = gsStage.level[level["id"].toString()];
										//console.log(gsLevel); //Recorre cada nivel de cada estudiante y nos devuelve los problemas
										const levelProblems = [];
										for (let p = 1; p <= level["problemCount"]; p++) {
											//console.log(level["problemCount"]); // numero de problema que tiene cada nivel
											if (gsLevel !== undefined) {
												//console.log(gsLevel); // aray con los problemas del gs
												const gsProblem = gsLevel.problem[p.toString()];
												if (gsProblem !== undefined) {
													//console.log(gsProblem); // array con las dificultades de los levels
													levelProblems.push(
														<Problem
															key={index}
															problem={gsProblem}
															isLastProblem={false}
														/>
													);
												} else {
													// Si no tiene el problema, devuelve casilla vacia
													levelProblems.push(<td key={index} />);
												}
											} else {
												// Si no tiene el problema, devuelve casilla vacia
												levelProblems.push(<td key={index} />);
											}
										}
										// console.log(levelProblems);
										return levelProblems;
									});
								} else {
									//   *********************************************************************** */ gs-stage
									let totalProblemsCount = 0;
									levels.map((level, index) => {
										totalProblemsCount += level["problemCount"];
									});
									let emptyTd = [];
									for (let i = 0; i < totalProblemsCount; i++) {
										emptyTd.push(<td />);
									}
									return (
										<tr key={stu.id}>
											<th>{stu.name}</th>
											{emptyTd}
										</tr>
									);
								}
							} else {
								return null;
							}

							//   *********************************************************************** */ gs-stage

							return (
								<tr key={stu.id}>
									<th>{stu.name}</th>
									{gameStatus}
								</tr>
							);
						})
					);
				}
			}
		},
		[stage, store.students]
	);

	function getProblems(student) {
		let problems = [];
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

	useEffect(
		() => {
			if (store.token !== "") {
				actions.loadStudent();
				actions.loadStage();
			}
		},
		[store.token]
	);
	return (
		<div>
			{store.token !== "" ? (
				<div>
					<div>
						{content != null &&
							store.stage.length > 0 && (
								<Dropdown className="content-name">
									<Dropdown.Toggle className="btn-content-name">
										Class: {content.name}
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item
											onClick={() => {
												setStage(store.stage[0]["kotokan_id"]);
												setNumberOfStage(0);
											}}>
											Class: {store.stage[0]["content"]["name"]}
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() => {
												setStage(store.stage[1]["kotokan_id"]);
												setNumberOfStage(1);
											}}>
											Class: {store.stage[1]["content"]["name"]}
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() => {
												setStage(store.stage[2]["kotokan_id"]);
												setNumberOfStage(2);
											}}>
											Class: {store.stage[2]["content"]["name"]}
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							)}

						<div className="scroll scrollbar-kotokan">
							<table>
								<thead>
									<tr>
										<th />
										{headerLevels}
									</tr>

									<tr>
										<th scope="row" abbr="Capacidad" className="text-uppercase">
											students
										</th>
										{headerProblems}
									</tr>
								</thead>
								<tbody>{studentRows}</tbody>
							</table>
						</div>

						<br />
					</div>
					<br />
					{/* *********************************  LEYENDAA  ************************** */}
					{/* *********************************   ************************************    ************************** */}
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
			) : (
				<div>No estoy logeado </div>
			)}
		</div>
	);
};
