import React, { Component } from "react";
import "./Register.css";

export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: "",
		};
	}

	setPassword = ({ target }) => {
		this.setState({ password: target.value });
	};
	setEmail = ({ target }) => {
		this.setState({ email: target.value });
	};
	setName = ({ target }) => {
		this.setState({ name: target.value });
	};

	submiteNewUserRequest = () => {
		fetch("http://localhost:3000/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					return this.props.onRouteChange("signin");
				}
			});
	};

	render() {
		return (
			<article className='container-circumference'>
				<main className='register-container'>
					<fieldset id='sign_up' className='fieldset-border'>
						<legend className='header'>Welcome</legend>
						<div className='input-sizing'>
							<label className='register-label' htmlFor='name'>
								Name
							</label>
							<input
								className='register-input'
								type='name'
								name='name'
								id='name'
								onChange={this.setName}
							/>
						</div>

						<div className='input-sizing'>
							<label className='register-label' htmlFor='email-address'>
								Email
							</label>
							<input
								className='register-input'
								type='email'
								name='email-address'
								id='email-address'
								onChange={this.setEmail}
							/>
						</div>
						<div className='input-sizing'>
							<label className='register-label' htmlFor='password'>
								Password
							</label>
							<input
								className='register-input'
								type='password'
								name='password'
								id='password'
								onChange={this.setPassword}
							/>
						</div>
					</fieldset>
					<div className=''>
						<button
							onClick={this.submiteNewUserRequest}
							className='signup-button'
						>
							SIGN UP
						</button>
					</div>
				</main>
			</article>
		);
	}
}
