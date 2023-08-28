const express = require("express");
const app = express();
const port = 3000; // Port number for the server to listen on

// Route for the homepage
app.get("/", (req, res) => {
	res.send("./template.html");
});

// Start the server
app.listen(port, () => {
	console.log(`Server is listening on port http://localhost:${port}`);
});
