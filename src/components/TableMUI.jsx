import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationMUI from "./PaginationMUI";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchInput from "./SearchInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import { dataUsersState, searchResultState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USERS_API_URL } from "../utils/config";
import sortIcon from "../assets/sortIcon.svg";
import formatDate from "../utils/formatDate";
import DataTableBody from "./TableBodyMUI";
import NoResult from "./NoResult";

const TableMUI = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(1);
	const rowsPerPage = 10;

	const [isAscending, setIsAscending] = useState(false);
	const [dataUsers, setDataUsers] = useRecoilState(dataUsersState);
	const [filterDate, setFilterDate] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const setSearchResult = useSetRecoilState(searchResultState);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleSearchClick = (e) => {
		e.preventDefault();

		const searchDataUsers = dataUsers?.filter((data) => {
			return (
				data?.firstName
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				data?.lastName
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				(data?.firstName + " " + data?.lastName)
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				data?.email.toString().includes(searchTerm.toLowerCase()) ||
				data?.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
				data?.userStatus?.status
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			);
		});

		setSearchTerm(e.target.value);
		setSearchResult(searchDataUsers);

		setTimeout(() => {
			navigate("/search");
		}, 1000);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearchClick(e);
		}
	};

	const handleClearSearch = () => {
		setSearchTerm("");
	};

	const handleDelete = async (id) => {
		await axios.delete(`${USERS_API_URL}/${id}`);

		const res = await axios.get(USERS_API_URL);
		setDataUsers(res.data);
	};

	const filterDateDataUsers = dataUsers?.filter((data) => {
		return formatDate(data?.accountDate)
			.toLowerCase()
			.includes(filterDate.toLowerCase());
	});

	const handleFilterDate = (e) => {
		setFilterDate(e.target.value);
		setPage(1);
	};

	const handleSorting = () => {
		setIsAscending((prev) => !prev);
	};

	const sortedFilterData = filterDateDataUsers?.sort((a, b) => {
		const dateA = new Date(a.accountDate);
		const dateB = new Date(b.accountDate);
		return isAscending ? dateA - dateB : dateB - dateA;
	});

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
					search={searchTerm}
					handleChangeSearch={(e) => setSearchTerm(e.target.value)}
					handleClearSearch={handleClearSearch}
					handleSearchClick={handleSearchClick}
					handleKeyDown={handleKeyDown}
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
							{filterDate
								? `${filterDateDataUsers.length} results found`
								: `${filterDateDataUsers.length} data users`}
						</p>
					</div>

					<div
						style={{
							display: "flex",
							gap: 20,
							alignItems: "center",
							marginRight: 70,
						}}>
						<button
							id="btn-filter"
							onClick={handleSorting}
							style={{
								display: "flex",
								color: "#757D8A",
								border: "1px solid #E0E0E0",
								width: 183,
								height: 44,
								borderRadius: 10,
								justifyContent: "space-between",
								alignItems: "center",
								padding: "0px 20px ",
								fontSize: 14,
							}}>
							<div>
								<img
									src={sortIcon}
									alt="sort-icon"
									style={{
										marginTop: 4,
										transform: isAscending
											? "scaleY(-1)"
											: "scaleY(1)",
									}}
								/>
							</div>

							<span>Filter by</span>
						</button>

						<input
							value={filterDate}
							onChange={handleFilterDate}
							type="text"
							placeholder="          August, 2021"
							style={{
								display: "flex",
								color: "#757D8A",
								border: "1px solid #E0E0E0",
								width: 200,
								height: 36,
								borderRadius: 10,
								justifyContent: "space-between",
								alignItems: "center",
								padding: "0 20px",
								fontSize: 14,
								outlineColor: "#E0E0E0",
							}}
						/>
					</div>
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
						{filterDateDataUsers?.length ? (
							sortedFilterData
								.slice(
									(page - 1) * rowsPerPage,
									(page - 1) * rowsPerPage + rowsPerPage
								)
								.map((user, index) => (
									<DataTableBody
										key={index}
										user={user}
										deleteAction
										handleDelete={handleDelete}
									/>
								))
						) : (
							<NoResult />
						)}
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
