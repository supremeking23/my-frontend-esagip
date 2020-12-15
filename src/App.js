import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact={true} path="/" component={Homepage} />
				<Route exact={true} path="/dashboard" component={Dashboard} />
			</Switch>
		</div>
	);
}

const Homepage = () => {
	return (
		<>
			<h1>Homepage</h1>
		</>
	);
};

const Dashboard = () => {
	return (
		<>
			<h1>Dashboard</h1>
		</>
	);
};

export default App;
