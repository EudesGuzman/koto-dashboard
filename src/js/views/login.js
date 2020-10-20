import React, { useContext, useCallback } from "react";
import "../../styles/login.scss";
import chica from "../../img/login-img.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Context } from "../store/appContext";
import { withRouter, Redirect } from "react-router-dom";

import { Route, RouteProps } from "react-router";

import PropTypes from "prop-types";

const Login = props => {
	const [email, setEmail] = React.useState("");
	const [pass, setPass] = React.useState("");
	const [error, setError] = React.useState(null);

	const { actions, store } = useContext(Context);

	const procesarDatos = e => {
		e.preventDefault();

		if (!email.trim()) {
			setError("ingrese email");
			return;
		}
		if (!pass.trim()) {
			setError("ingrese pass");
			return;
		}
		login();
	};

	const login = React.useCallback(
		async () => {
			try {
				await actions.login(email, pass);
				const res = store.token;

				if (res != "") {
					setEmail("");
					setPass("");
					setError(null);
				}
			} catch (error) {
				console.log(error);
			}
		},
		[email, pass, props.history]
	);

	const isLoggedIn = store.token !== "";

	return (
		<div>
			{isLoggedIn ? (
				<Redirect to={"/"} />
			) : (
				<div className="login">
					<div className="login__container">
						<div className="login__left">
							<p>
								<ArrowBackIcon />
								Go back
							</p>
							<p>
								Log in to Kotokan for schools <span className="badge badge-secondary">Beta</span>
							</p>

							<form onSubmit={procesarDatos}>
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										placeholder="Email Address"
										onChange={e => setEmail(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										onChange={e => setPass(e.target.value)}
										value={pass}
									/>
								</div>

								<button className="btn btn-primary btn-lg btn-block" type="submit">
									Submit
								</button>
							</form>

							<p>
								Dont have an account?
								<a href="#" className="text-secondary">
									Sign in
								</a>
							</p>
						</div>

						<div className="login__right">
							<img src={chica} alt="" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default withRouter(Login);

Login.propTypes = {
	history: PropTypes.object
};
