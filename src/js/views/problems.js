import React, { useContext } from "react";
import "../../styles/problems.scss";
import chica from "../../img/login-img.png";
import { Context } from "../store/appContext";
import { withRouter, Redirect } from "react-router-dom";

export const Problems = () => {
	const { actions, store } = useContext(Context);
	const isLoggedIn = store.token !== "";
	return (
		<>
			{isLoggedIn ? (
				<div className="container">
					<div className="row">
						<div className="col-md-4 separacion">
							<div className="row">
								<div className="col-md-10 pr-0">
									<p>Some students struggle with these problems</p>
									<h5>STRUGGLING</h5>
								</div>
								<div className="col-md-2 d-flex align-items-center pl-0">
									<i className="fas fa-dizzy fa-3x struggling" />
								</div>
							</div>
							<div className="card struggling">
								<div className="card-header">
									<p className="card-text text-uppercase font-weight-bold text-secondary">
										Activities
									</p>
									<h6 className="card-title">Problem Name</h6>
									<p>Descripcion del problema</p>
								</div>

								<div className="card-body">
									<p>Students</p>
									<div className="avatar-group">
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FBebeLoco_1.gif?alt=media&token=5f37f185-a909-4de0-8dbe-a5f2640b0168"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FJolia_1.gif?alt=media&token=369f7ce6-7b83-4a3a-8ac1-3cd89741b52d"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FKotokanKid_1.gif?alt=media&token=31e15e64-820e-4efe-87f4-563c0e13326a"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
									</div>
								</div>
							</div>
							{/* carta */}
							<div className="card struggling">
								<div className="card-header">
									<p className="card-text text-uppercase font-weight-bold text-secondary">
										Activities
									</p>
									<h6 className="card-title">Problem Name</h6>
									<p>Descripcion del problema</p>
								</div>

								<div className="card-body">
									<p>Students</p>
									<div className="avatar-group">
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FPartyMartian_1.gif?alt=media&token=ed5a3855-fbae-43fa-89a0-49ed2e4a2793"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4 separacion">
							<div className="row">
								<div className="col-md-10 pr-0">
									<p>Some students thrive with these problems</p>
									<br />
									<h5>THRIVING</h5>
								</div>
								<div className="col-md-2 pl-0 d-flex align-items-center">
									<i className="fas fa-grin-alt fa-3x thriving" />
								</div>
							</div>
							<div className="card struggling">
								<div className="card-header">
									<p className="card-text text-uppercase font-weight-bold text-secondary">
										Activities
									</p>
									<h6 className="card-title">Problem Name</h6>
									<p>Descripcion del problema</p>
								</div>

								<div className="card-body">
									<p>Students</p>
									<div className="avatar-group">
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FCaperucitaPersa_1.gif?alt=media&token=dc48b3b5-41d7-43df-8146-4243237089bd"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
										<img
											src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FTwoColors_1.gif?alt=media&token=3624b19f-37ba-4f8b-bc19-fbcd804aeec0"
											alt="..."
											className="rounded-circle estudiantes-circulo"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Redirect to={"/login"} />
			)}
		</>
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
