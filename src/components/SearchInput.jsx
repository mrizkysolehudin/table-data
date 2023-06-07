import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SearchInput = ({ search, handleChangeSearch, handleClearSearch }) => {
	return (
		<div style={{ display: "flex" }}>
			<div style={{ position: "relative" }}>
				<img
					src={searchIcon}
					alt="search-icon"
					style={{
						position: "absolute",
						top: 8,
						left: 35,
						width: 25,
						height: 25,
					}}
				/>

				<input
					value={search}
					onChange={handleChangeSearch}
					type="text"
					placeholder="Search"
					style={{
						width: 470,
						marginRight: 25,
						height: 44,
						borderRadius: 10,
						border: "1px solid #5B6AD0",
						outlineColor: "#5B6AD0",
						boxShadow: "0px 0px 10px #E2E6FF",
						fontSize: 16,
						paddingLeft: 69,
						paddingRight: 50,
					}}
				/>

				<HighlightOffIcon
					onClick={handleClearSearch}
					style={{
						color: "#757D8A",
						position: "absolute",
						top: 10,
						right: 50,
						width: 23,
						height: 23,
						opacity: 0.9,
					}}
				/>
			</div>
			<button
				style={{
					width: 90,
					height: 45,
					borderRadius: 10,
					border: 1,
					backgroundColor: "#5B6AD0",
					color: "white",
					fontSize: 16,
				}}>
				Search
			</button>
		</div>
	);
};

export default SearchInput;
