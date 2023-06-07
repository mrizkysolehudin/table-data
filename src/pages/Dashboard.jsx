import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../components/SidebarMUI";
import TableMUI from "../components/TableMUI";
import axios from "axios";
import { USERS_API_URL } from "../utils/config";

const Dashboard = () => {
	const [dataUsers, setDataUsers] = useState([]);

	const getUsers = async () => {
		const res = await axios.get(USERS_API_URL);
		setDataUsers(res.data.users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div style={{ width: 1366, backgroundColor: "blue" }}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Sidebar />

				<Box
					component="main"
					sx={{ flexGrow: 1, bgcolor: "background.default" }}>
					<TableMUI dataUsers={dataUsers} />
				</Box>
			</Box>
		</div>
	);
};

export default Dashboard;
