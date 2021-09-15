const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

/***  load json file path*/
const dataPath = "./data/example.json";

const app = express();

/******port config */
const PORT = "5001";

/******using parsers for extracting data */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET ALL USERS
app.get("/users", (req, res) => {
	fs.readFile(dataPath, "utf8", (err, data) => {
		if (err) {
			throw err;
		}
		res.send(JSON.parse(data));
	});
});

/*****  GET A PARTICULAR USER  *******/
app.get("/users/:id", (req, res) => {
	console.log("runiing");
	fs.readFile(dataPath, "utf8", (err, data) => {
		if (err) {
			throw err;
		}
		const data1 = JSON.parse(data);
		const userId = req.params["id"];
		res.send(data1[userId - 1]);
	});
});

//**************************port listing *********/
app.listen(PORT, () => {
	console.log(`server is running on port: ${PORT}`);
});
