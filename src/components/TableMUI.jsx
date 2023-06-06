import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";

const PaginationContainer = ({ handleChangePage, page }) => {
	const StyledPagination = styled(Pagination)({
		"& .MuiPagination-ul li:last-child": {
			marginLeft: "16px",
		},
		"& .MuiPagination-ul li:last-child button::before": {
			content: "'Next'",
			marginRight: "8px",
		},
		"& .MuiPagination-ul li:first-child": {
			marginRight: "16px",
		},
		"& .MuiPagination-ul li:first-child button::after": {
			content: "'Previous'",
			marginLeft: "8px",
		},
		"&  .MuiPaginationItem-page.Mui-selected": {
			backgroundColor: "#624DE3",
			color: "#fff",
		},
		"&  .MuiPaginationItem-page.Mui-selected:hover": {
			backgroundColor: "#624DE3",
			color: "#fff",
		},
		"&  .MuiPaginationItem-page.Mui-selected.Mui-focusVisible": {
			backgroundColor: "#624DE3",
			color: "#fff",
		},
		"& .MuiPaginationItem-page:not(.Mui-selected):hover": {
			backgroundColor: "#E0E0E0",
			color: "#000",
		},
		"& .MuiPaginationItem-page:not(.Mui-selected):focus": {
			backgroundColor: "#E0E0E0",
			color: "#000",
		},
		"& .MuiPaginationItem-page:not(.Mui-selected)": {
			backgroundColor: "#E0E0E0",
			color: "#000",
		},
	});

	return (
		<StyledPagination
			count={3}
			shape="rounded"
			page={page}
			onChange={handleChangePage}
		/>
	);
};

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

const TableMUI = ({ dataUsers }) => {
	const [page, setPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right">Status</TableCell>
						<TableCell align="right">Role</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{dataUsers
						.slice(
							page * rowsPerPage,
							page * rowsPerPage + rowsPerPage
						)
						.map((user) => (
							<StyledTableRow key={user.name}>
								<StyledTableCell component="th" scope="row">
									{user.firstName} {user.lastName}
								</StyledTableCell>
								<StyledTableCell align="right">
									{user.email}
								</StyledTableCell>
								<StyledTableCell align="right">
									status
								</StyledTableCell>
								<StyledTableCell align="right">
									{user.company.title}
								</StyledTableCell>
							</StyledTableRow>
						))}
				</TableBody>
			</Table>

			<div
				style={{
					width: 300,
					alignItems: "center",
					justifyContent: "center",
					margin: "40px auto 20px",
				}}>
				<PaginationContainer
					handleChangePage={handleChangePage}
					page={page}
				/>
			</div>
		</TableContainer>
	);
};

export default TableMUI;
