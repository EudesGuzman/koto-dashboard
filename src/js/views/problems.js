import React from "react";
import "../../styles/problems.scss";
import chica from "../../img/login-img.png";
import { problemCard } from "../component/problemCard";

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
					{/* {store.problems.map((elm, index) => {
						<problemCard idx={index} element={elm} key={index} />;
					})} */}
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
