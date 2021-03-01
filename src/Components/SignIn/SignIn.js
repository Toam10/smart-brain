import React, { Component } from "react";
import { connect } from "react-redux";
import {
	assignEmail,
	assignPassword,
	loadUser,
	onRouteChange,
	removeValidatorsFromState,
	requestSignin,
} from "../../actions";
import "./SignIn.css";

class SignIn extends Component {
	onSubmitSignIn = () => {
		const { email, password, changeRouteTo, loadCurrentUser, removeValidators, postRequestSignin} = this.props;
		
		postRequestSignin(email, password, changeRouteTo, loadCurrentUser, removeValidators);
	};

	render() {
		const { changeRouteTo, setEmail, setPassword } = this.props;
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
								value={this.props.email}
								type='email'
								name='email-address'
								id='email-address'
								onChange={setEmail}
							/>
						</div>
						<div className='mv3'>
							<label className='signin-label' htmlFor='password'>
								Password
							</label>
							<input
								className='signin-input'
								value={this.props.password}
								type='password'
								name='password'
								id='password'
								onChange={setPassword}
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
							onClick={() => changeRouteTo("register")}
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
const mapStateToProps = (state) => {
	console.log(state.requsetBoxSizeReducer);
	return {
		email: state.requsetSigninReducer.email,
		password: state.requsetSigninReducer.password,
		isPending: state.requsetSigninReducer.isPending,
		signinSuccess: state.requsetSigninReducer.success,
		signinError: state.requsetSigninReducer.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadCurrentUser: (user) => dispatch(loadUser(user)),
		changeRouteTo: (route) => dispatch(onRouteChange(route)),
		setEmail: (event) => dispatch(assignEmail(event.target.value)),
		setPassword: (event) => dispatch(assignPassword(event.target.value)),
		removeValidators: () => dispatch(removeValidatorsFromState()),
		postRequestSignin: ( email, password, onRouteChangeFunc, loadCurrentUserFunc, removeValidatorsFunc) =>
			dispatch( 
				requestSignin( email, password, onRouteChangeFunc, loadCurrentUserFunc, removeValidatorsFunc )
				),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
