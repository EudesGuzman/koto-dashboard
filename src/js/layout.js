import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/layout.scss";

import { Demo } from "./views/problems";
import { Single } from "./views/single";
import Login from "./views/login";
import { Problems } from "./views/problems";
import { Home } from "./views/Home.js";
import { Stage } from "./views/Stage.jsx";

import injectContext from "./store/appContext";

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
							<div className="container-fluid h-100">
								<div className="row h-100">
									<div className="col-2 h-100">
										<SideBar />
									</div>
									<div className="col-10  p-2">
										<Home />
									</div>
								</div>
							</div>
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/classname">
							<Navbar />
							<div className="container-fluid h-100">
								<div className="row h-100">
									<div className="col-2 h-100 mr-0 pr-0">
										<SideBar />
									</div>
									<div className="col-9  pt-3 ml-0 pl-0 mr-0 pr-0">
										<Stage />
									</div>
								</div>
							</div>
						</Route>
						<Route exact path="/single/:theid">
							<Navbar />
							<SideBar />
							<Single />
						</Route>
						<Route exact path="/problems">
							<Navbar />
							<div className="container-fluid h-100">
								<div className="row h-100">
									<div className="col-2 h-100">
										<SideBar />
									</div>
									<div className="col-10 p-2">
										<Problems />
									</div>
								</div>
							</div>
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
