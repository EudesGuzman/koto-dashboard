import React from "react";
import "../../styles/login.scss";
import chica from "../../img/login-img.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const Login = () => (
	<div>
		<div className="container reset-login align-items-center">
			<div className="row justify-content-center">
				<div className="col-4">
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

					<p className="text-secondary d-flex justify-content-end align-items-end">
						Dont have an account?
						<a href="#" className="text-secondary">
							Sign in
						</a>
					</p>
				</div>
				<div className="col-4">
					<img src={chica} className="img-fluid" />
				</div>
			</div>
		</div>
	</div>
);
