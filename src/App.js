import React, { Component } from "react";
import "./App.css";

import Particles from "react-particles-js";
import { Navigation } from "./Components/Navigation/Navigation";
import { Logo } from "./Components/Logo/Logo";
import { Rank } from "./Components/Rank/Rank";
import { ImageLinkFrom } from "./Components/ImageLinkFrom/ImageLinkFrom";
import { FaceRecognition } from "./Components/FaceRecognition/FaceRecognition";
import { SignIn } from "./Components/SignIn/SignIn";
import { Register } from "./Components/Register/Register";

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

const initialState = {
	input: "",
	imgUrl: "",
	box: {},
	route: "signin",
	isSignIn: false,
	currentUser: {
		id: "",
		name: "",
		email: "",
		password: "",
		entries: 0,
		joined: null,
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imgUrl: "",
			box: {},
			route: "signin",
			isSignIn: false,
			currentUser: {
				id: "",
				name: "",
				email: "",
				password: "",
				entries: 0,
				joined: null,
			},
		};
	}

	loadUser = (currentUser) => {
		this.setState({ currentUser });
	};

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

	displayFaceBox = (box) => {
		this.setState({ box });
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onSubmit = () => {
		this.setState({ imgUrl: this.state.input });
		fetch("http://localhost:3000/imageUrl", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				input: this.state.input,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				fetch("http://localhost:3000/image", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: this.state.currentUser.id,
					}),
				})
					.then((response) => response.json())
					.then((response) => {
						this.setState({ currentUser: response });
					})
					.catch(console.log);

				return this.displayFaceBox(this.calculateFaceLucation(response));
			})
			.catch((err) => console.log(err, "Error"));
	};

	onRouteChange = (route) => {
		if (route === "home") {
			this.setState({ isSignIn: "ON" });
		}
		if (route === "signin") {
			this.setState(initialState);
		}
		if (route === "register") {
			this.setState({ isSignIn: false });
		}
		this.setState({ route: route });
	};

	render() {
		return (
			<div className='flex-container'>
				<div className='App'>
					<Particles className='particles' params={particlesOptions} />
					<Navigation
						isSignIn={this.state.isSignIn}
						onRouteChange={this.onRouteChange}
						route={this.state.route}
					/>
					{this.state.route === "home" && (
						<div>
							<Logo />
							<Rank currentUser={this.state.currentUser} />
							<ImageLinkFrom
								onSubmit={this.onSubmit}
								onInputChange={this.onInputChange}
							/>
							<FaceRecognition
								imgUrl={this.state.imgUrl}
								box={this.state.box}
							/>
						</div>
					)}

					{this.state.route === "signin" && (
						<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
					)}
					{this.state.route === "register" && (
						<Register onRouteChange={this.onRouteChange} />
					)}
				</div>
			</div>
		);
	}
}

export default App;
