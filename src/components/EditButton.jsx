import React from "react";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const EditButton = ({ user }) => {
	return (
		<Link to={`/edit/${user._id}`} id="btn-edit">
			<EditOutlinedIcon className="icon-edit" />
		</Link>
	);
};

export default EditButton;
