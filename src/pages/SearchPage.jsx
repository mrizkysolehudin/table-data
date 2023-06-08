import React, { useState } from "react";
import { searchResultState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DataTableBody from "../components/TableBodyMUI";
import NoResult from "../components/NoResult";
import PaginationMUI from "../components/PaginationMUI";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const SearchPage = () => {
	const searchResult = useRecoilValue(searchResultState);
	const [page, setPage] = useState(1);
	const rowsPerPage = 10;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div style={{ backgroundColor: "#F1F2F6" }}>
			<CssBaseline />
			<div style={{ width: 1366, minHeight: 900 }}>
				<div style={{ paddingTop: 40, paddingLeft: 140 }}>
					<Link id="back" to="/" style={{ textDecoration: "none" }}>
						back
					</Link>
				</div>

				<div
					style={{ width: "80%", margin: "auto", padding: "20px 0" }}>
					<h1>Search result</h1>
					{searchResult.length ? (
						<>
							<Table
								sx={{ minWidth: 700 }}
								aria-label="customized table">
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
									{searchResult
										.slice(
											(page - 1) * rowsPerPage,
											(page - 1) * rowsPerPage +
												rowsPerPage
										)
										.map((user, index) => (
											<DataTableBody
												key={index}
												user={user}
											/>
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
						</>
					) : (
						<NoResult />
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
