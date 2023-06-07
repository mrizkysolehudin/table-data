import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
