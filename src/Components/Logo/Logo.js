import React  from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

export const Logo = () => {
	return (
		<div className='logo-container' >
			<Tilt
				className='Tilt br2 shadow-2 '
				options={{ max: 35 }}
				style={{ height: 250, width: 250 }}
			>
				<div className='Tilt-inner pa3'>
					<img style={{ paddingTop: "40px" }} src={brain} alt='' />
				</div>
			</Tilt>
		</div>
	);
};
