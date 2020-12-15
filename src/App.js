import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact={true} path="/" component={Homepage} />
					<Route exact={true} path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
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
