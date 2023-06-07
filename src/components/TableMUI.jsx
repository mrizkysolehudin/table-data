import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationMUI from "./PaginationMUI";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import trashIcon from "../assets/trashIcon.svg";
import SearchInput from "./SearchInput";

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
	const [search, setSearch] = useState("");

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const searchDataUsers = dataUsers.filter((data) => {
		return (
			data.firstName.toLowerCase().includes(search.toLowerCase()) ||
			data.lastName.toLowerCase().includes(search.toLowerCase()) ||
			(data.firstName + " " + data.lastName)
				.toLowerCase()
				.includes(search.toLowerCase()) ||
			data.email.toString().includes(search.toLowerCase()) ||
			data.company.title.toLowerCase().includes(search.toLowerCase())
		);
	});

	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
		setPage(0);
	};

	const handleClearSearch = () => {
		setSearch("");
	};

	return (
		<div>
			<section
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: 114,
					margin: "0 30px ",
				}}>
				<div>
					<h1 style={{ fontSize: 28 }}>Data Tabel</h1>
				</div>

				<SearchInput
					search={search}
					handleChangeSearch={handleChangeSearch}
					handleClearSearch={handleClearSearch}
				/>
			</section>

			<TableContainer component={Paper}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginLeft: 31,
						marginBottom: 69,
					}}>
					<div>
						<h2 style={{ fontSize: 24, fontWeight: 500 }}>
							Description
						</h2>

						<p
							style={{
								marginTop: -20,
								color: "#757D8A",
								textAlign: "start",
							}}>
							{search
								? `${searchDataUsers.length} results found`
								: `${dataUsers.length} data users`}
						</p>
					</div>

					<div></div>
				</div>

				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell>
								<span
									style={{
										display: "flex",
										color: "#B1B1B1",
										paddingLeft: 30,
									}}>
									Name <ArrowDropDownIcon />
								</span>
							</TableCell>
							<TableCell>
								<span
									style={{
										display: "flex",
										color: "#B1B1B1",
									}}>
									Email <ArrowDropDownIcon />
								</span>
							</TableCell>
							<TableCell>
								<span
									style={{
										display: "flex",
										color: "#B1B1B1",
									}}>
									Status <ArrowDropDownIcon />
								</span>
							</TableCell>
							<TableCell>
								<span
									style={{
										display: "flex",
										color: "#B1B1B1",
									}}>
									Role <ArrowDropDownIcon />
								</span>
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{searchDataUsers
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((user, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell
										sx={{ paddingLeft: 6 }}
										component="th"
										scope="row">
										{user.firstName} {user.lastName}
									</StyledTableCell>
									<StyledTableCell>
										{user.email}
									</StyledTableCell>
									<StyledTableCell>status</StyledTableCell>
									<StyledTableCell>
										{user.company.title}
									</StyledTableCell>
									<StyledTableCell
										style={{ display: "flex" }}>
										<EditOutlinedIcon
											style={{
												color: "#757D8A",
												opacity: 0.6,
												marginRight: 18,
												height: 22,
												width: 22,
											}}
										/>

										<img src={trashIcon} alt="" />
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
						margin: "30px auto 70px",
					}}>
					<PaginationMUI
						handleChangePage={handleChangePage}
						page={page}
					/>
				</div>
			</TableContainer>
		</div>
	);
};

export default TableMUI;
