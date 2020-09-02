import React from "react";
import "../../styles/login.scss";
import chica from "../../img/login-img.png";

export const Login = () => (
	<div>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4">
					<p>Go back</p>
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
								placeholder="Enter email"
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

					<p>Dont have an account? Sign in</p>
				</div>
				<div className="col-4">
					<img src={chica} className="img-fluid" />
				</div>
			</div>
		</div>
	</div>
);
