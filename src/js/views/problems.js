import React from "react";
import "../../styles/problems.scss";
import chica from "../../img/login-img.png";

export const Problems = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 separacion">
					<div className="row">
						<div className="col-md-10">
							<p className="text-uppercase">Some students struggle with these problems</p>
							<h5>STRUGGLING</h5>
						</div>
						<div className="col-md-2 d-flex align-items-center">
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<p className="card-text text-uppercase text-secondary">Activities</p>
							<h5 className="card-title text-secondary problem-title">Problem Name / id problem</h5>
							<p className="d-flex justify-content-center">
								<strong>
									Descripcion del problema, Descripcion del problema, Descripcion del problema
								</strong>
							</p>
						</div>

						<div className="card-body">
							<p>Students</p>
							<div className="avatar-estudiantes d-flex justify-content-end">
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 separacion">
					<p>Some students thrive with these problems</p>
					<h5>THRIVING</h5>
				</div>
				<div className="col-md-4" />
			</div>
		</div>
	);
};
