import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logo from "../../img/icon-kotokan.png";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__left">
				<Link to="/">
					<img src={logo} />
				</Link>

				<p className="navbar__input hide-on-mobile ml-2 ">Kotokan for school</p>

				<span className="badge badge-secondary ml-2">Beta</span>

				<Link to="/" className="navbar__link ml-2 ">
					<b>Home</b>
				</Link>
			</div>

			<div>
				Log out <ExitToAppIcon />{" "}
			</div>
		</div>
	);
};

{
	/* <Link to="/">
<span className="navbar-brand mb-0 h1">React Boilerplate</span>
< </Link> */
}
