import React from "react";
import "./App.css";
import Home from "./components/Home";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<div className="App">
					<Switch>
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
