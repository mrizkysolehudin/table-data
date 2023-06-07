import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { CssBaseline } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { USERS_API_URL } from "../utils/config";
import { CssVarsProvider } from "@mui/joy/styles";
import Select from "@mui/joy/Select";

const EditUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);

	const getUserById = async () => {
		const res = await axios.get(`${USERS_API_URL}/${id}`);

		setUser(res.data);
	};

	console.log(user);

	useEffect(() => {
		getUserById();
	}, [id]);

	return (
		<div
			style={{
				backgroundColor: "#F1F2F6",
			}}>
			<CssBaseline />

			<Box
				sx={{
					py: 2,
					display: "flex",
					flexDirection: "column",
					gap: 2,
					alignItems: "",
					flexWrap: "wrap",
					width: 1366,
					height: "100vh",
				}}>
				<div
					style={{
						width: 800,
						margin: "110px auto",
					}}>
					<h1>Edit user</h1>

					<form
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}>
						<section style={{ display: "flex", gap: 30 }}>
							<div>
								<label>First Name</label>
								<Input
									placeholder="Enter name..."
									required
									sx={{
										mb: 1,
										width: 400,
										fontSize: "var(--joy-fontSize-sm)",
									}}
								/>
							</div>

							<div>
								<label>Last Name</label>
								<Input
									placeholder="Enter name..."
									required
									sx={{
										mb: 1,
										width: 400,
										fontSize: "var(--joy-fontSize-sm)",
									}}
								/>
							</div>
						</section>

						<section style={{ display: "flex", gap: 30 }}>
							<div>
								<label>Email</label>
								<Input
									placeholder="Enter email..."
									required
									sx={{
										mb: 1,
										width: 400,
										fontSize: "var(--joy-fontSize-sm)",
									}}
								/>
							</div>

							<div>
								<label>Status</label>
								<CssVarsProvider>
									<Select sx={{ width: 400 }}>
										<option value=""></option>
									</Select>
								</CssVarsProvider>
							</div>
						</section>

						<section
							style={{
								display: "flex",
								gap: 30,
								alignItems: "center",
							}}>
							<div>
								<label>Role</label>
								<Input
									placeholder="Enter role..."
									required
									sx={{
										mb: 1,
										width: 400,
										fontSize: "var(--joy-fontSize-sm)",
									}}
								/>
							</div>

							<Button
								type="submit"
								color="neutral"
								variant="solid"
								sx={{ marginTop: 2, width: 160 }}>
								Submit
							</Button>
						</section>
					</form>
				</div>
			</Box>
		</div>
	);
};

export default EditUser;

// name, email, status, role
