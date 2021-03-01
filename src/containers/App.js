import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Particles from "react-particles-js";

import { Navigation } from "../Components/Navigation/Navigation";
import { Logo } from "../Components/Logo/Logo";
import { Rank } from "../Components/Rank/Rank";
import { ImageLinkFrom } from "../Components/ImageLinkFrom/ImageLinkFrom";
import { FaceRecognition } from "../Components/FaceRecognition/FaceRecognition";
import SignIn from "../Components/SignIn/SignIn";
import Register from "../Components/Register/Register";

import { setSearchInput, fetchBoxRequest } from "../actions.js";

const particlesOptions = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};

class App extends Component {
	calculateFaceLucation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			left: clarifaiFace.left_col * width,
			right: width - clarifaiFace.right_col * width,
			top: clarifaiFace.top_row * height,
			bottom: height - clarifaiFace.bottom_row * height,
		};
	};

	onSubmit = () => {
		this.props.boxRequest(
			this.props.searchInput,
			this.props.currentUser.id,
			this.calculateFaceLucation
		);
	};

	render() {
		const {
			onSearchInputChange,
			searchInput,
			route,
			changeRouteTo,
			box,
			currentUser,
		} = this.props;
		return (
			<div className='flex-container'>
				<div className='App'>
					<Particles className='particles' params={particlesOptions} />
					<Navigation onRouteChange={changeRouteTo} route={route} />
					{this.props.route === "home" && (
						<div>
							<Logo />
							<Rank currentUser={currentUser} />
							<ImageLinkFrom
								onSubmit={this.onSubmit}
								onSearchInputChange={onSearchInputChange}
							/>
							<FaceRecognition searchInput={searchInput} box={box} />
						</div>
					)}

					{route === "signin" && <SignIn />}
					{route === "register" && <Register />}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchInput: state.searchInputReducer.searchInput,
		isPending: state.requsetBoxSizeReducer.isPending,
		currentUser: state.requsetBoxSizeReducer.currentUser,
		box: state.requsetBoxSizeReducer.box,
		route: state.requsetBoxSizeReducer.route,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchInputChange: (event) => dispatch(setSearchInput(event.target.value)),
		boxRequest: (input, id, calculateFunc) =>
			dispatch(fetchBoxRequest(input, id, calculateFunc)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
