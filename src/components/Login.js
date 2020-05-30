import React, { Component } from 'react'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.password}`)
		event.preventDefault()
	}

	render() {
		const { username, password } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username</label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<br></br>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={this.handlePasswordChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Login;