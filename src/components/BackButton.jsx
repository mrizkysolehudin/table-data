import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<div style={{ paddingTop: 40, paddingLeft: 140 }}>
			<Link id="back" to="/" style={{ textDecoration: "none" }}>
				back
			</Link>
		</div>
	);
};

export default BackButton;
