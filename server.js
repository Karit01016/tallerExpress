import express from "express"


const server = express();

const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready in port " + PORT);

server.use("/api", indexRouter);

server.listen(PORT, ready);