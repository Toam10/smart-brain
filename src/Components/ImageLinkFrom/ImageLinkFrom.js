import React from "react";
import "./ImageLinkFrom.css";

export const ImageLinkFrom = ({ onSubmit, onInputChange }) => {
	return (
		<div>
			<p className='f3'>
				{`This Magic Brain wil detect faces in your pictures. Give it a try`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input
						className='f4 pa2 w-70 center'
						type='text'
						onChange={onInputChange}
					/>
					<br></br>
					<button
						onClick={onSubmit}
						className='w-30 grow f4 link ph3 pv2 div white bg-light-purple'
					>
						Click
					</button>
				</div>
			</div>
		</div>
	);
};
