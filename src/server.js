const cors = require("cors");
const express = require('express');
const kodersRouter = require("./routes/koders.router");
const authRouter = require("./routes/auth.router");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/koders",kodersRouter);
app.use("/auth", authRouter);

app.get('/', (request, response)=>{
    response.json({
        message: "Koders APIv1",
    });
});

module.exports = app;