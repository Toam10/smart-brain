import React from "react";
import "./Navigation.css";
export const Navigation = ({ onRouteChange, route }) => {
	if (route === "home") {
		return (
			<div>
				<nav className='navigation-right-nav'>
					<p
						className='navigation-peregraph'
						onClick={() => onRouteChange("signin")}
					>
						Sign Out
					</p>
				</nav>
			</div>
		);
	}
	if (route === "signin") {
		return (
			<div>
				<nav className='navigation-right-nav'>
					<p
						className='navigation-peregraph'
						onClick={() => onRouteChange("register")}
					>
						Register
					</p>
				</nav>
			</div>
		);
	}
	if (route === "register") {
		return (
			<div>
				<nav className='navigation-right-nav'>
					<p
						className='navigation-peregraph'
						onClick={() => onRouteChange("signin")}
					>
						Sign In
					</p>
				</nav>
			</div>
		);
	}
};
