import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logo from "../../img/icon-kotokan.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg color-principal">
			<a className="navbar-brand" href="#">
				<img src={logo} />
			</a>
			<p>
				Kotokan for school <span className="badge badge-secondary">Beta</span>
			</p>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Log out <ExitToAppIcon />
							</a>
						</li>
					</ul>
				</form>
			</div>
		</nav>
	);
};

{
	/* <Link to="/">
<span className="navbar-brand mb-0 h1">React Boilerplate</span>
< </Link> */
}
