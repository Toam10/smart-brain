import React, { Component } from "react";
import "./SignIn.css";
export class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: "",
			signInPassword: "",
		};
	}
	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	};
	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {
		fetch("https://dry-mountain-86581.herokuapp.com/signin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((currentUser) => {
				if (currentUser.id) {
					this.props.onRouteChange("home");
					this.props.loadUser(currentUser);
				} else {
					return console.log("this is no good");
				}
			});
	};

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className='container-circumference'>
				<main className='signin-container'>
					<fieldset id='sign_up' className='fieldset-border'>
						<legend className='header'>Sign In</legend>
						<div className='input-sizing'>
							<label className='signin-label' htmlFor='email-address'>
								Email
							</label>
							<input
								className='signin-input'
								type='email'
								name='email-address'
								id='email-address'
								onChange={this.onEmailChange}
							/>
						</div>
						<div className='mv3'>
							<label className='signin-label' htmlFor='password'>
								Password
							</label>
							<input
								className='signin-input'
								type='password'
								name='password'
								id='password'
								onChange={this.onPasswordChange}
							/>
						</div>
					</fieldset>
					<div className=''>
						<button
							onClick={this.onSubmitSignIn}
							className='login-button'
							type='submit'
						>
							Sign In
						</button>
					</div>
					<div className='lh-copy mt3'>
						<p
							onClick={() => onRouteChange("register")}
							className='f6 link dim black db'
						>
							Register
						</p>
					</div>
				</main>
			</article>
		);
	}
}
