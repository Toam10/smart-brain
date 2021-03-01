import React from "react";
import "./Navigation.css";
export const Navigation = ({ changeRouteTo, route }) => {
	console.log(changeRouteTo)
	if (route === "home") {
		return (
			<div>
				<nav className='navigation-right-nav'>
					<p
						className='navigation-peregraph'
						onClick={() => changeRouteTo("signin")}
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
						onClick={() => changeRouteTo("register")}
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
						onClick={() => changeRouteTo("signin")}
					>
						Sign In
					</p>
				</nav>
			</div>
		);
	}
};
