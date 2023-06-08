import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{
				padding: "6px 4px",
				borderRadius: 2,
			}}>
			<CloseIcon
				style={{
					color: "#757D8A",
					fontWeight: 100,
				}}
			/>
		</button>
	);
};

export default CloseButton;
