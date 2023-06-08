import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import avatar from "../assets/avatar.png";
import searchIcon from "../assets/searchIcon.svg";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PowerOffIcon from "@mui/icons-material/PowerSettingsNew";
import supportIcon from "../assets/supportIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import { dataUsersState } from "../recoil/atoms";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const drawerWidth = 250;
	const [openDataTable, setOpenDataTable] = useState(false);
	const dataUsers = useRecoilValue(dataUsersState);

	const [openSearch, setOpenSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const searchData = dataUsers?.filter((data) => {
		return (
			data?.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			data?.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(data?.firstName + " " + data?.lastName)
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
	});

	return (
		<div id="sidebar">
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						"&.MuiDrawer-paperAnchorLeft": {
							backgroundColor: "#F1F2F6",
						},
					},
				}}
				variant="permanent"
				anchor="left">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "column",
						height: "100%",
					}}>
					{/* profile */}
					<div>
						<section
							style={{
								marginLeft: 20,
								display: "flex",
								alignItems: "center",
								height: 114,
							}}>
							<img
								src={avatar}
								alt="avatar-profile"
								style={{
									width: 40,
									height: 40,
									cursor: "pointer",
								}}
							/>

							<div
								style={{
									textAlign: "start",
									marginLeft: 10,
									marginTop: 16,
								}}>
								<p
									style={{
										fontSize: 12,
										color: "#5A6474",
										fontWeight: 300,
									}}>
									Welcome back
								</p>
								<h4
									style={{
										marginTop: -13,
										fontSize: 18,
										fontWeight: 500,
									}}>
									Drax
								</h4>
							</div>
						</section>

						<section style={{ margin: "0 20px" }}>
							<div
								style={{
									width: 210,
									height: 44,
									display: "flex",
									position: "relative",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "0 16px",
									borderRadius: 5,
									marginBottom: 20,
								}}>
								<img
									src={searchIcon}
									alt="search-icon"
									style={{ width: 20, height: 20 }}
								/>
								<input
									type="text"
									placeholder="Search"
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									style={{
										backgroundColor: "#F1F2F6",

										width: "100%",
										height: "80%",
										paddingTop: 3,
										paddingLeft: 7,
										fontSize: 14,
										border: 0,
										outline: 0,
									}}
								/>

								{openSearch ? (
									<button
										onClick={() => setOpenSearch(false)}
										style={{
											padding: "6px 4px",
											borderRadius: 2,
										}}>
										<CloseIcon
											style={{
												color: "#757D8A",
												fontWeight: 100,
											}}
										/>
									</button>
								) : (
									<button
										onClick={() => setOpenSearch(true)}
										style={{
											padding: "6px 4px",
											borderRadius: 2,
										}}>
										<DensityMediumIcon
											style={{
												color: "#757D8A",
												fontWeight: 100,
											}}
										/>
									</button>
								)}
							</div>

							{openSearch && (
								<article
									style={{
										padding: "0 20px",
										backgroundColor: "white",
										marginBottom: "10px",
										borderRadius: 10,
									}}>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											marginTop: -15,
										}}>
										{searchTerm
											? searchData?.map((user, index) => (
													<Link
														to={`/edit/${user?._id}`}
														style={{
															color: "#757474",
															textDecoration:
																"none",
															padding: "8px 0",
														}}>
														{index + 1}.{" "}
														{user.firstName}
													</Link>
											  ))
											: ""}
									</div>
								</article>
							)}

							<div
								style={{
									width: 210,
									height: 44,
									display: "flex",
									position: "relative",
									backgroundColor: "white",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "0 16px",
									borderRadius: 5,
								}}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}>
									<DashboardOutlinedIcon
										style={{
											color: "#757D8A",
											width: 19,
											height: 19,
											fontWeight: 100,
											opacity: 0.7,
										}}
									/>
									<p
										style={{
											color: "#757D8A",
											marginLeft: 8,
										}}>
										Data Table
									</p>
								</div>

								{openDataTable ? (
									<button
										onClick={() => setOpenDataTable(false)}
										style={{
											padding: "6px 4px",
											borderRadius: 2,
										}}>
										<CloseIcon
											style={{
												color: "#757D8A",
												fontWeight: 100,
											}}
										/>
									</button>
								) : (
									<button
										onClick={() => setOpenDataTable(true)}
										style={{
											padding: "6px 4px",
											borderRadius: 2,
										}}>
										<DensityMediumIcon
											style={{
												color: "#757D8A",
												fontWeight: 100,
											}}
										/>
									</button>
								)}
							</div>
						</section>

						{openDataTable && (
							<article style={{ margin: "0 30px " }}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginTop: 9,
									}}>
									{dataUsers.map((user, index) => (
										<Link
											to={`/edit/${user?._id}`}
											style={{
												color: "#757474",
												textDecoration: "none",
											}}>
											{index + 1}. {user.firstName}
										</Link>
									))}
								</div>
							</article>
						)}
					</div>

					<div style={{ textAlign: "start", margin: "0 20px 40px" }}>
						<button
							style={{
								width: 210,
								height: 42,
								color: "#757D8A",
								alignItems: "center",
								justifyContent: "start",
								display: "flex",
								fontSize: 14,
								border: 0,
							}}>
							<img
								src={supportIcon}
								alt="support-icon"
								style={{
									marginLeft: 16,
									marginRight: 22,
									width: 20,
									height: 20,
								}}
							/>
							Support
						</button>

						<button
							style={{
								width: 210,
								height: 42,
								color: "#757D8A",
								alignItems: "center",
								justifyContent: "start",
								display: "flex",
								fontSize: 14,
								marginTop: 10,
								border: 0,
							}}>
							<PowerOffIcon
								style={{
									marginLeft: 15,
									marginRight: 23,
									width: 20,
									height: 20,
								}}
							/>
							Sign Out
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default Sidebar;
