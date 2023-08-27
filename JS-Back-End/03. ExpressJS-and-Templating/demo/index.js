const express = require("express");
const logger = require("./logger");

const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log("Server listening on port 3000"));
