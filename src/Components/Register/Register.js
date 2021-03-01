import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmail, addName, addPassword, onRouteChange, requestRegister } from "../../actions";
import "./Register.css";

class Register extends Component {
	submiteNewUserRequest = () => {
		const {
			registerEmail,
			registerPassword,
			registerName,
			changeRouteTo,
			postRequestRegister,
		} = this.props;
		debugger;
		postRequestRegister(registerEmail, registerPassword, registerName, changeRouteTo);
	};

	render() {
		const { addEmail, addName, addPassword } = this.props;
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
								onChange={addName}
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
								onChange={addEmail}
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
								onChange={addPassword}
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
const mapStateToProps = (state) => {
	return {
		registerEmail: state.registerReducer.registerEmail,
		registerPassword: state.registerReducer.registerPassword,
		registerName: state.registerReducer.registerName,
		registerRequestIsPending: state.registerReducer.registerRequestIsPending,
		registerRequestIsSuccess: state.registerReducer.registerRequestIsSuccess,
		registerRequestIsFailed: state.registerReducer.registerRequestIsFailed,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeRouteTo: (route) => dispatch(onRouteChange(route)),
		addEmail: (event) => dispatch(addEmail(event.target.value)),
		addPassword: (event) => dispatch(addPassword(event.target.value)),
		addName: (evnet) => dispatch(addName(evnet.target.value)),
		postRequestRegister: (email, passowrd, name, onRouteChangeFunc) =>
			dispatch(requestRegister(email, passowrd, name, onRouteChangeFunc)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
