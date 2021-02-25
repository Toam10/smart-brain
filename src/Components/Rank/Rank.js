import React from "react";

export const Rank = ({ currentUser }) => {
	let { name, entries } = currentUser;
	return (
		<div>
			<div className='white f3'>{`${name} your current rank is`}</div>
			<div className='white f1'>{`${entries}`}</div>
		</div>
	);
};
