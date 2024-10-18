import express, { request, response } from "express"
import "dotenv/config.js" 
import "./config/dataBase.js"
import cors from "cors"  // permite manejar peticiones externas                                       
import morgan from "morgan" // controlar y ver las trasas que nos hacen por ejemplo get post
import indexRouter from "./router/index.js"
import not_found_handlers from "./middlewares/not_found_handler.js"
import error_handlers from "./middlewares/error_handler.js"



const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("el servidor esta en el puerto " + PORT);
server.use(express.json())   // permite trabajar en formato js en entrada y salida
server.use(express.urlencoded({extended:true}))
server.use(cors());
server.use(morgan("dev"));

//router

server.use("/api", indexRouter)
server.use(not_found_handlers)
server.use(error_handlers)

server.listen(PORT, ready);