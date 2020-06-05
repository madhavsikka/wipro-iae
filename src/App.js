import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ExamDashboard from "./components/ExamDashboard/ExamDashboard";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<div className="App">
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/exam-dashboard">
							<ExamDashboard />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
