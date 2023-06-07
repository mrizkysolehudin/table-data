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

	const getRandomStatus = () => {
		const statusOptions = [
			{ status: "Free", statusColor: "#0064FF" },
			{ status: "Busy", statusColor: "#F63F3F" },
			{ status: "Working", statusColor: "#404D61" },
			{ status: "On Vacation", statusColor: "#F9A348" },
		];
		const randomNumber = Math.floor(Math.random() * statusOptions.length);

		return statusOptions[randomNumber];
	};

	const getUsers = async () => {
		const res = await axios.get(USERS_API_URL);
		const dataUsersWithStatus = res.data.users.map((user) => ({
			...user,
			userStatus: getRandomStatus(),
		}));

		setDataUsers(dataUsersWithStatus);
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
