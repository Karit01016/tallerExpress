import { Router } from "express";
import { allEmployees,findposition,EmployeeByname } from "../controllers/employee/read.js";
import { createOneEmployee,createOtherEmployee} from "../controllers/employee/create.js";

const routerEmployees = Router();
//read/get

routerEmployees.get("/all", allEmployees)
routerEmployees.get("/position/:position", findposition)
routerEmployees.get("/name/:nameEmployee", EmployeeByname) //debo poner la ruta completa hasta nameEmployee


//creates/post

routerEmployees.post("/create",createOneEmployee)
routerEmployees.post("/createMany",createOtherEmployee)
    
    
    


export default routerEmployees;