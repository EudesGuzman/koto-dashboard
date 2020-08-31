import React from "react";
import "../../styles/sidebar.scss";

export const SideBar = () => {
	return (
		<div className="h-100  sidenav">
			<ul className="nav flex-column  ">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						ClassName 1
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						ClassName 2
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Problems
					</a>
				</li>
				<li className="nav-item ">
					<a className="nav-link disabled" href="#">
						Admin
					</a>
				</li>
				{/* <div className="separador" /> */}
				<div className="dropdown-divider" />

				<h5 className="disabled">Support</h5>
				<li className="nav-item ">
					<a className="nav-link disabled" href="#">
						Support
					</a>
				</li>
			</ul>
		</div>
	);
};
