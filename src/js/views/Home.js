import React, { useContext } from "react";

import BusinessIcon from "@material-ui/icons/Business";
import DeviceHubRoundedIcon from "@material-ui/icons/DeviceHubRounded";

import "../../styles/home.scss";
import chico from "../../img/chico.jpg";
import teacher from "../../img/teacher.jpg";
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm">
						<div className="card d-flex flex-row">
							<div className="card-body">
								<p className="card-title text-uppercase font-weight-bold">School Details</p>
								<h5 className="card-text font-weight-bold">SchoolName</h5>
								<p className="mt-4">
									School code <DeviceHubRoundedIcon />
								</p>
							</div>

							<div className="card__right ">
								<BusinessIcon className="card__rightButton" style={{ fontSize: 60 }} />
							</div>
						</div>
					</div>

					<div className="col-sm">
						<div className="cardTeacher d-flex flex-row">
							<div className="card-body">
								<p className="card-title text-uppercase font-weight-bold text-secondary">
									Teacher Details
								</p>
								<h5 className="card-text font-weight-bold">
									{store.user.length > 0 ? store.user[0].name : ""}
									Teacher name
								</h5>
								{/* //[0].name puede funcionar*/}
								<p className="text-secondary mt-4 mb-0 text-mini">Role</p>
								<h6 className="text-secondary">Teacher</h6>
							</div>

							<div className="card__right ">
								<img src={teacher} alt="" className="avatar-teacher" />
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
					{store.courses.map((course, index) => (
						<div className="col-sm" key={index}>
							<div className="cardTeacher d-flex flex-row">
								<div className="card-bodyTeacher ">
									<h5 className="card-title">{course.name}</h5>
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
					))}

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
