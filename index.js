require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
puerto= process.env.PORT || 8080 ;
app.listen(puerto,"localhost");

const routes=require("./routes/getUser.routes");
app.use(routes);


console.log(`servidor ejecutandose en http://localhost:${puerto}`);