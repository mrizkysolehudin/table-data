import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const DataTableBody = ({ user, handleDelete, deleteAction }) => {
	return (
		<StyledTableRow>
			<StyledTableCell
				sx={{
					paddingLeft: 6,
					display: "flex",
					alignItems: "center",
				}}
				component="th"
				scope="row">
				<div
					style={{
						backgroundColor: `${user.favoriteColor}`,
						width: 30,
						height: 30,
						borderRadius: 30,
						marginRight: 20,
					}}>
					<img
						src={user.image}
						alt="user-image"
						style={{
							width: 30,
							height: 30,
							borderRadius: 30,
						}}
					/>
				</div>

				<p>
					{user.firstName} {user.lastName}
				</p>
			</StyledTableCell>
			<StyledTableCell>{user.email}</StyledTableCell>
			<StyledTableCell
				sx={{
					color: `${user.userStatus.statusColor}`,
				}}>
				{user.userStatus.status}
			</StyledTableCell>
			<StyledTableCell>{user.role}</StyledTableCell>
			<StyledTableCell style={{ display: "flex" }}>
				<EditButton user={user} />

				{deleteAction && (
					<DeleteButton handleDelete={handleDelete} user={user} />
				)}
			</StyledTableCell>
		</StyledTableRow>
	);
};

export default DataTableBody;
