import React from "react";
import "../../styles/sidebar.scss";

import DashboardIcon from "@material-ui/icons/Dashboard";
import SchoolIcon from "@material-ui/icons/School";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LockIcon from "@material-ui/icons/Lock";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

export const SideBar = () => {
	return (
		<div className="sidenav h-100 p-2">
			<ul className="nav flex-column h-100">
				<li className="nav-item">
					<Link to="/">
						<DashboardIcon /> Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/classname">
						<SchoolIcon /> ClassName 1
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" a="/classname">
						<SchoolIcon /> ClassName 2
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" a="/problems">
						<LocalParkingIcon /> Problems
					</Link>
				</li>
				<li className="nav-item ">
					<Link className="nav-link disabled" a="#">
						<LockIcon />
						Admin
					</Link>
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
