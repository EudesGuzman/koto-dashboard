import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/layout.scss";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Problems } from "./views/problems";

import injectContext from "./store/appContext";
import { ClassName } from "./views/ClassName";

import { SideBar } from "./component/sidebar";
import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<SideBar />
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/demo">
							<Navbar />
							<SideBar />
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Navbar />
							<SideBar />
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
