import React from "react";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";

const PaginationMUI = ({ handleChangePage, page }) => {
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

export default PaginationMUI;
