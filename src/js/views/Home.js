import React from "react";

import BusinessIcon from "@material-ui/icons/Business";
import DeviceHubRoundedIcon from "@material-ui/icons/DeviceHubRounded";

import "../../styles/home.scss";
import chico from "../../img/chico.jpg";
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className="card d-flex flex-row">
							<div className="card-body ">
								<h5 className="card-title">School Details</h5>
								<p className="card-text">School Name</p>
								<p>
									School code <DeviceHubRoundedIcon />
								</p>
							</div>

							<div className="card__right ">
								<BusinessIcon className="card__rightButton" style={{ fontSize: 40 }} />
							</div>
						</div>
					</div>

					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-bodyTeacher ">
								<h5 className="card-title">Teacher Details</h5>
								<p className="card-text">Teacher Name</p>
								<p>Role</p>
								<h5>Teacher</h5>
							</div>

							<div className="card__rightTeacher ">
								<img src={chico} alt="" className="imagen" />
							</div>
						</div>
					</div>
					<div className="col-sm">
						<button type="button" className="btn btn-primary" disabled>
							+Add Teacher
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-bodyTeacher ">
								<h5 className="card-title">ClassName 1</h5>
								<p className="card-text"> Stutents in this class</p>
								<p>18</p>
							</div>

							<div className="card__rightTeacher ">
								<SchoolIcon />
								<div>
									<a href="/">
										view stutend progress <ArrowForwardIosIcon />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-bodyTeacher ">
								<h5 className="card-title">ClassName 1</h5>
								<p className="card-text"> Stutents in this class</p>
								<p>18</p>
							</div>

							<div className="card__rightTeacher ">
								<SchoolIcon />
								<div>
									<a href="/">
										view stutend progress <ArrowForwardIosIcon />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm">
						<button type="button" className="btn btn-primary" disabled>
							+Add Teacher
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
