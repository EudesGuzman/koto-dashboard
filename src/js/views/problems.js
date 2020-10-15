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
							<p>Some students struggle with these problems</p>
							<h5>STRUGGLING</h5>
						</div>
						<div className="col-md-2 d-flex align-items-center">
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
						</div>
					</div>
					<div className="card struggling">
						<div className="card-header">
							<p className="card-text text-uppercase font-weight-bold text-secondary">Activities</p>
							<h6 className="card-title">Problem Name</h6>
							<p>Descripcion del problema</p>
						</div>

						<div className="card-body">
							<p>Students</p>
							<div className="avatar-group">
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 separacion">
					<div className="row">
						<div className="col-md-10">
							<p>Some students thrive with these problems</p>
							<h5>THRIVING</h5>
						</div>
						<div className="col-md-2 d-flex align-items-center">
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
						</div>
					</div>
					<div className="card struggling">
						<div className="card-header">
							<p className="card-text text-uppercase font-weight-bold text-secondary">Activities</p>
							<h6 className="card-title">Problem Name</h6>
							<p>Descripcion del problema</p>
						</div>

						<div className="card-body">
							<p>Students</p>
							<div className="avatar-group">
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
								<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/* import React from "react";
import "../../styles/problems.scss";
import chica from "../../img/login-img.png";

export const Problems = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<p>Some students struggle with these problems</p>
					<h1>STRUGGLING</h1>
					<div className="card">
						<div className="card-header">
							<p className="card-text">Activities</p>
							<h5 className="card-title">Problem Name</h5>
							<p>
								<strong>Descripcion del problema</strong>
							</p>
						</div>

						<div className="card-body">
							<p>Students</p>
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
							<img src={chica} alt="..." className="rounded-circle estudiantes-circulo" />
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<p>Some students thrive with these problems</p>
					<h1>THRIVING</h1>
				</div>
				<div className="col-md-4" />
			</div>
		</div>
	);
}; */

/* import React from "react";
import "../../styles/problems.scss";
import chica from "../../img/login-img.png";
import { problemCard } from "../component/problemCard";

export const Problems = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="row">
						<div className="col-md-10">
							<p className="text-uppercase">Some students struggle with these problems</p>
							<h5>STRUGGLING</h5>
						</div>
						<div className="col-md-2 d-flex align-items-center">
							<img src={chica} alt="..." className="rounded-circle avatar-estudiantes" />
						</div>
					</div>
					 //  {store.problems.map((elm, index) => {
					// 	<problemCard idx={index} element={elm} key={index} />;
					// })} 
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
 */
