const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8082;
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

const db = require('./config/db');
db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schedule = require('./routes/schedule');
const prizes = require('./routes/prizes');
const sponsors = require('./routes/sponsors');
const theme = require('./routes/theme');

app.use('/api/v2/schedule', schedule);
app.use('/api/v2/prizes', prizes);
app.use('/api/v2/sponsors', sponsors);
app.use('/api/v2/theme', theme);
app.use('/', (req, res)=>{ res.send('Welcome to DuHacks!!!')});

server.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
});