import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { CssBaseline } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { USERS_API_URL } from "../utils/config";
import { useFormik } from "formik";
import { statusOptions } from "../utils/constants";
import BackButton from "../components/BackButton";

const EditUser = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [user, setUser] = useState([]);

	const getUserById = async () => {
		const res = await axios.get(`${USERS_API_URL}/${id}`);

		setUser(res.data);
	};

	useEffect(() => {
		getUserById();
	}, [id]);

	const handleUpdate = async (id, data) => {
		try {
			const res = await axios.put(`${USERS_API_URL}/${id}`, data);

			navigate("/");
			setUser(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
			role: user?.role,
			userStatus: {
				status: user?.userStatus?.status,
				statusColor: user?.userStatus?.statusColor,
			},
		},

		onSubmit: (values) => {
			const data = {
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				role: values.role,
				userStatus: {
					status: values?.userStatus?.status,
					statusColor: values?.userStatus?.statusColor,
				},
			};

			handleUpdate(id, data);
		},
	});

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
				<div style={{ position: "absolute" }}>
					<BackButton />
				</div>
				<div
					style={{
						width: 800,
						margin: "110px auto",
					}}>
					<h1>Edit user</h1>
					<form
						onSubmit={formik.handleSubmit}
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}>
						<section style={{ display: "flex", gap: 30 }}>
							<div>
								<label>First Name</label>
								<Input
									name="firstName"
									onBlur={formik.handleBlur("firstName")}
									value={formik.values.firstName}
									onChange={formik.handleChange("firstName")}
									type="text"
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
									onBlur={formik.handleBlur("lastName")}
									value={formik.values.lastName}
									onChange={formik.handleChange("lastName")}
									type="text"
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
									onBlur={formik.handleBlur("email")}
									value={formik.values.email}
									onChange={formik.handleChange("email")}
									type="email"
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
								<select
									style={{
										width: 400,
										height: 40,
										border: "1px solid rgba(0,0,0,0.2)",
										borderRadius: 8,
										paddingLeft: 10,
									}}
									name="userStatus"
									onBlur={formik.handleBlur}
									value={formik.values.userStatus}
									onChange={(event) => {
										const selectedStatus = JSON.parse(
											event.target.value
										);
										formik.setFieldValue(
											"userStatus",
											selectedStatus
										);
									}}>
									{statusOptions.map((item, index) => (
										<option
											key={index}
											style={{ paddingLeft: 30 }}
											value={JSON.stringify(item)}>
											{item.status}
										</option>
									))}
								</select>
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
									onBlur={formik.handleBlur("role")}
									value={formik.values?.role}
									onChange={formik.handleChange("role")}
									type="text"
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
