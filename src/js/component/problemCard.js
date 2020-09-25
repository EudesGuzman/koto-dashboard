import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const problemCard = props => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !
	const { idx, element } = props;

	// guia para cargar funciones --> actions.loadSomeData();
	return (
		<>
			<div className="card">
				<div className="card-header">
					<p className="card-text text-uppercase text-secondary">Activities</p>
					<h5 className="card-title text-secondary problem-title">{element.problemName}</h5>
					<p className="d-flex justify-content-center">
						<strong>{element.description}</strong>
					</p>
				</div>

				<div className="card-body">
					<p>Students</p>
					<div className="avatar-estudiantes d-flex justify-content-end">
						<img src="#" alt="..." className="rounded-circle estudiantes-circulo" />
						<img src={element.url} alt="..." className="rounded-circle estudiantes-circulo" />
						<img src={element.url} alt="..." className="rounded-circle estudiantes-circulo" />
					</div>
				</div>
			</div>
		</>
	);
};
