import React, { useState } from "react";

const TrashIcon = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const svgStyle = {
		stroke: isHovered ? "red" : "#757D8A",
	};

	return (
		<span
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{ padding: "0px 5px", borderRadius: 20 }}>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2 4H3.33333H14"
					stroke={svgStyle.stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.33331 3.99999V2.66666C5.33331 2.31304 5.47379 1.9739 5.72384 1.72385C5.97389 1.4738 6.31302 1.33333 6.66665 1.33333H9.33331C9.68694 1.33333 10.0261 1.4738 10.2761 1.72385C10.5262 1.9739 10.6666 2.31304 10.6666 2.66666V3.99999"
					stroke={svgStyle.stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.6666 3.99999V13.3333C12.6666 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.6869 14.6667 11.3333 14.6667H4.66665C4.31302 14.6667 3.97389 14.5262 3.72384 14.2761C3.47379 14.0261 3.33331 13.687 3.33331 13.3333V3.99999H12.6666Z"
					stroke={svgStyle.stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.66669 7.33333V11.3333"
					stroke={svgStyle.stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.33331 7.33333V11.3333"
					stroke={svgStyle.stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export { TrashIcon };
