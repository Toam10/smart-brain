import React from "react";
import "./FaceRecognition.css";
export const FaceRecognition = ({ searchInput, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' width='500px' height='auto' src={searchInput} alt='' />
				<div
					className='bounding-box'
					style={{
						top: box.top,
						bottom: box.bottom,
						left: box.left,
						right: box.right,
					}}
				></div>
			</div>
		</div>
	);
};
