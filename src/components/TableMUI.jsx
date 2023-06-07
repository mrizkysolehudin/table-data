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
import SearchInput from "./SearchInput";
import { TrashIcon } from "../assets/svgButton";
import { useRecoilState } from "recoil";
import { dataUsersState } from "../recoil/atoms";

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

const TableMUI = () => {
	const [page, setPage] = useState(1);
	const rowsPerPage = 10;
	const [search, setSearch] = useState("");
	const [dataUsers, setDataUsers] = useRecoilState(dataUsersState);

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
		setPage(1);
	};

	const handleClearSearch = () => {
		setSearch("");
	};

	const handleDelete = (id) => {
		let newDataUsers = dataUsers.filter((data) => data.id !== id);
		setDataUsers(newDataUsers);
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
								(page - 1) * rowsPerPage,
								(page - 1) * rowsPerPage + rowsPerPage
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
										<button id="btn-edit">
											<EditOutlinedIcon className="icon-edit" />
										</button>

										<button
											id="btn-trash"
											onClick={() =>
												handleDelete(user.id)
											}>
											<TrashIcon />
										</button>
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
