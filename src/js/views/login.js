import React from "react";
import "../../styles/login.scss";
import chica from "../../img/login-img.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const Login = () => {
	return (
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

					<form>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Email Address"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>

						<button type="submit" className="btn btn-primary btn-lg btn-block">
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
	);
};
