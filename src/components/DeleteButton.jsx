import React from "react";
import { TrashIcon } from "../assets/svgButton";

const DeleteButton = ({ handleDelete, user }) => {
	return (
		<button id="btn-trash" onClick={() => handleDelete(user._id)}>
			<TrashIcon />
		</button>
	);
};

export default DeleteButton;
