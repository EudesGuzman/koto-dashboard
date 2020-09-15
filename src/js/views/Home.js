import React, { useContext } from "react";

import BusinessIcon from "@material-ui/icons/Business";
import DeviceHubRoundedIcon from "@material-ui/icons/DeviceHubRounded";

import "../../styles/home.scss";
import chico from "../../img/chico.jpg";
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className="card d-flex flex-row">
							<div className="card-body ">
								<p className="card-title text-uppercase">School Details</p>
								<h5 className="card-text">School Name</h5>
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
								<p className="card-title text-uppercase">Teacher Details</p>
								<h5 className="card-text">{store.user.length > 0 ? store.user[0].name : ""}</h5>
								{/* //[0].name puede funcionar*/}
								<p className="text-secondary">Role</p>
								<h6 className="text-secondary">Teacher</h6>
							</div>

							<div className="card__rightTeacher ">
								<img src={chico} alt="" className="imagen" />
							</div>
						</div>
					</div>
					<div className="col-sm d-flex align-items-center">
						<button type="button" className="btn btn-primary text-uppercase" disabled>
							+Add Teacher
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-bodyTeacher ">
								<h5 className="card-title">ClassName 1</h5>
								<p className="card-text "> Students in this class</p>
								<p>18</p>
							</div>

							<div className="card__rightTeacher text-center ">
								<SchoolIcon />
								<div className="text-right">
									<a href="/" className="">
										view students progress <ArrowForwardIosIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-bodyTeacher ">
								<h5 className="card-title">ClassName 2</h5>
								<p className="card-text "> Students in this class</p>
								<p>18</p>
							</div>

							<div className="card__rightTeacher ">
								<SchoolIcon />
								<div>
									<a href="/">
										view students progress <ArrowForwardIosIcon />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm d-flex align-items-center">
						<button type="button" className="btn btn-primary text-uppercase" disabled>
							+ Add a class
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
