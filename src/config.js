module.exports = {
	jsonDb: {
		users: "https://my-json-server.typicode.com/madhavsikka/json-db/users",
		exams: "https://my-json-server.typicode.com/madhavsikka/json-db/exams",
		responses:
			"https://my-json-server.typicode.com/madhavsikka/json-db/responses",
		base: "https://my-json-server.typicode.com/madhavsikka/json-db",
	},
	firebase: {
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_DATABASE_URL,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
	},
	questionState: {
		unvisited: 0,
		visited_unattempted: 1,
		review: 2,
		submit: 3,
	},
};
