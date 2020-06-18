import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import About from "./components/About";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exams from "./components/Exam/Exams";
import ExamDetail from "./components/Exam/ExamDetail";
import ExamDashboard from "./components/Exam/ExamDashboard/ExamDashboard";
import Result from "./components/Exam/Result/Result";
import AdminDashboard from "./components/Exam/AdminDashboard/AdminDashboard";
import NewExam from "./components/Exam/AdminDashboard/NewExam";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<div className="App">
				<Switch>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/user-dashboard" exact>
						<UserDashboard />
					</Route>
					<Route path="/admin-dashboard/new-exam" exact>
						<NewExam />
					</Route>
					<Route path="/admin-dashboard" exact>
						<AdminDashboard />
					</Route>
					<Route path="/exams/:examId/result" exact>
						<Result />
					</Route>
					<Route path="/exams/:examId/exam-dashboard" exact>
						<ExamDashboard />
					</Route>
					<Route path="/exams/:examId" exact>
						<ExamDetail />
					</Route>
					<Route path="/exams" exact>
						<Exams />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
