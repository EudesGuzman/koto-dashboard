import React, { useContext, useEffect } from "react";

import BusinessIcon from "@material-ui/icons/Business";
import DeviceHubRoundedIcon from "@material-ui/icons/DeviceHubRounded";

import "../../styles/home.scss";
import chico from "../../img/chico.jpg";
import teacher from "../../img/teacher.jpg";
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Context } from "../store/appContext";
import { withRouter, Redirect } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context);

	const isLoggedIn = store.token !== "";

	useEffect(
		() => {
			if (store.token !== "") {
				actions.loadClasses();
				actions.loadTeacher();
			}
		},
		[store.token]
	);

	return (
		<>
			{isLoggedIn ? (
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm  ">
							<div className="card d-flex flex-row">
								<div className="card-body">
									<p className="card-title text-uppercase font-weight-bold">School Details</p>
									<h5 className="card-text font-weight-bold">
										{store.schools.length > 0 ? store.schools[0].name : ""}
									</h5>
									<p className="mt-4">
										{store.schools.length > 0 ? store.schools[0][" kotokan_id"] : ""}
										<DeviceHubRoundedIcon />
									</p>
								</div>

								<div className="card__right ">
									<BusinessIcon className="card__rightButton" style={{ fontSize: 60 }} />
								</div>
							</div>
						</div>

						<div className="col-sm">
							<div className="cardTeacher d-flex flex-row ">
								<div className="card-body">
									<p className="card-title text-uppercase font-weight-bold text-secondary">
										Teacher Details
									</p>
									<h5 className="card-text font-weight-bold">
										{store.teacher.length > 0 ? store.teacher[0].name : "Teacher name"}
									</h5>
									{/* //[0].name puede funcionar*/}
									<p className="text-secondary mt-4 mb-0 text-mini">Role</p>
									<h6 className="text-secondary">Teacher</h6>
								</div>

								<div className="card__right ">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/thinkinghatwonder-eu/o/images%2Favatars%2FBebeLoco_1.gif?alt=media&token=5f37f185-a909-4de0-8dbe-a5f2640b0168"
										alt=""
										className="avatar-teacher"
									/>
								</div>
							</div>
						</div>

						{/* ********************************************* */}
						<div className="col-sm d-flex align-items-center">
							<button type="button" className="btn btn-primary text-uppercase" disabled>
								+Add Teacher
							</button>
						</div>
					</div>

					<div className="row">
						<div className="col-sm d-flex align-items-center">
							<div className="col-sm limit pl-0">
								<div className="cardTeacher d-flex flex-row">
									<div className="card-body card-teacher">
										<h5 className="card-text font-weight-bold">
											{store.user.length > 0 ? store.user[0].name : ""}
											Classname 1
										</h5>
										{/* <p className="card-title text-uppercase font-weight-bold text-secondary">
										Teacher Details
									</p> */}
										{/* //[0].name puede funcionar*/}

										<h6 className="text-secondary">Students in this class</h6>
										<p className="text-secondary mt-4 mb-0">{store.students.length - 1}</p>
									</div>

									<div className="card__right ">
										{/* <img src={teacher} alt="" className="avatar-teacher" /> */}
										<div className="redondo d-flex justify-content-center">
											<i className="fas fa-graduation-cap fa-3x" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm d-flex align-items-center">
								<button type="button" className="btn btn-primary text-uppercase" disabled>
									+Add a class
								</button>
							</div>
							{/* <button type="button" className="btn btn-primary text-uppercase" disabled>
							+ Add a class
						</button> */}
						</div>
					</div>
				</div>
			) : (
				<Redirect to={"/classname"} />
			)}
		</>
	);
};
