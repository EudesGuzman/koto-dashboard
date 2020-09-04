import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/layout.scss";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Problems } from "./views/problems";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { SideBar } from "./component/sidebar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<div className="container-fluid  h-100">
						<div className="row h-100">
							<div className="col-12">
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/login">
										<Login />
									</Route>
									<Route exact path="/demo">
										<Demo />
									</Route>
									<Route exact path="/problems">
										<Problems />
									</Route>
									<Route exact path="/single/:theid">
										<Single />
									</Route>
									<Route>
										<h1>Not found!</h1>
									</Route>
								</Switch>
							</div>
						</div>
					</div>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
