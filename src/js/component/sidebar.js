import React from "react";
import "../../styles/sidebar.scss";

import DashboardIcon from "@material-ui/icons/Dashboard";
import SchoolIcon from "@material-ui/icons/School";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LockIcon from "@material-ui/icons/Lock";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const SideBar = () => {
	return (
		<div className="sidenav h-100 p-2">
			<ul className="nav flex-column h-100">
				<li className="nav-item">
					<a className="nav-link active" href="/">
						<DashboardIcon /> Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/classname">
						<SchoolIcon /> ClassName 1
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/classname">
						<SchoolIcon /> ClassName 2
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/problems">
						<LocalParkingIcon /> Problems
					</a>
				</li>
				<li className="nav-item ">
					<a className="nav-link disabled" href="#">
						<LockIcon />
						Admin
					</a>
				</li>
				{/* <div className="separador" /> */}
				<div className="dropdown-divider" />

				<h5 className="disabled">Support</h5>
				<li className="nav-item ">
					<a className="nav-link disabled" href="#">
						<ContactSupportIcon /> Support
					</a>
				</li>
			</ul>
		</div>
	);
};
