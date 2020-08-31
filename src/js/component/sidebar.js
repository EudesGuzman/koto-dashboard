import React from "react";
import "../../styles/sidebar.scss";

export const SideBar = () => {
	return (
		<div>
			<ul className="nav flex-column">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Clasname 1
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
				<hr />
				<h3 className="disabled">Support</h3>
				<li className="nav-item ">
					<a className="nav-link disabled" href="#">
						Support
					</a>
				</li>
			</ul>
		</div>
	);
};
