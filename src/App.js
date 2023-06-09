import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/edit/:id" element={<EditUser />} />
				<Route path="/search" element={<SearchPage />} />
			</Routes>
		</div>
	);
}

export default App;
