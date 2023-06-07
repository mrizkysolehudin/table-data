import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../components/SidebarMUI";
import TableMUI from "../components/TableMUI";
import axios from "axios";
import { USERS_API_URL } from "../utils/config";
import { useSetRecoilState } from "recoil";
import { dataUsersState } from "../recoil/atoms";

const Dashboard = () => {
	const setDataUsers = useSetRecoilState(dataUsersState);

	const getUsers = async () => {
		const res = await axios.get(USERS_API_URL);
		setDataUsers(res.data.users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div style={{ width: 1366 }}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Sidebar />

				<Box
					component="main"
					sx={{ flexGrow: 1, bgcolor: "background.default" }}>
					<TableMUI />
				</Box>
			</Box>
		</div>
	);
};

export default Dashboard;
