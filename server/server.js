const express = requre("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin:"http://localhost:3000" }));

