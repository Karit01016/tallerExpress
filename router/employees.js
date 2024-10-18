import { Router } from "express";
import { allEmployees,findposition,EmployeeByname } from "../controllers/stores/read.js";
import { create,createOther} from "../controllers/stores/create.js";

const routerEmployees = Router();
//read/get

routerEmployees.get("/all", allEmployees)
routerEmployees.get("/position/:position", findposition)
routerEmployees.get("/name/:nameEmployee", EmployeeByname)


//creates/post

routerEmployees.post("/create",create)
routerEmployees.post("/createMany",createOther)
    
    
    


export default routerEmployees;