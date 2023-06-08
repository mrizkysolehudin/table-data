import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const MenuButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{
				padding: "6px 4px",
				borderRadius: 2,
			}}>
			<DensityMediumIcon
				style={{
					color: "#757D8A",
					fontWeight: 100,
				}}
			/>
		</button>
	);
};

export default MenuButton;
