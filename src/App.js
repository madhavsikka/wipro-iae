import React, { useState, useEffect } from "react";
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
import config from "./config";

import firebase from "firebase";
firebase.initializeApp(config.firebase);
// const provider = new firebase.auth.EmailAuthProvider();
const auth = firebase.auth;

const App = (props) => {
	const [user, setUser] = useState(null);
	const [displayName, setDisplayName] = useState("");
	const [uid, setUid] = useState("");

	const logOutHandler = () => {
		localStorage.removeItem("Wipro_UID");
		localStorage.removeItem("Wipro_Name");
		setUser(null);
		setDisplayName("");
		setUid("");
		auth().signOut();
	};

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged((user) => {
			if (user) {
				console.log("user", user);
				setUser({ user });
				if (displayName === "") {
					setDisplayName(user.displayName);
				}
				if (uid === "") {
					setUid(user.uid);
				}
			}
		});
		return () => unsubscribe();
	}, [displayName, uid]);

	return (
		<Router>
			<GlobalStyle />
			<div className="App">
				<Switch>
					<Route path="/login" exact>
						<Login
							user={user}
							setUser={setUser}
							auth={auth}
							setUid={setUid}
							setDisplayName={setDisplayName}
						/>
					</Route>
					<Route path="/register" exact>
						<Register
							user={user}
							setUser={setUser}
							auth={auth}
							setUid={setUid}
							setDisplayName={setDisplayName}
						/>
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/user-dashboard" exact>
						<UserDashboard />
					</Route>
					<Route path="/admin-dashboard/new-exam" exact>
						<NewExam
							user={user}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/admin-dashboard" exact>
						<AdminDashboard
							user={user}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/exams/:examId/result" exact>
						<Result
							user={user}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/exams/:examId/exam-dashboard" exact>
						<ExamDashboard
							user={user}
							uid={uid}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/exams/:examId" exact>
						<ExamDetail
							user={user}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/exams" exact>
						<Exams
							user={user}
							displayName={displayName}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
					<Route path="/">
						<Home
							user={user}
							auth={auth}
							setUser={setUser}
							logOutHandler={() => logOutHandler()}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
