import { Router } from "express";
import { allStores, storeByaddress, storeByname } from "../controllers/stores/read.js";
import { create,createOther} from "../controllers/stores/create.js";

const routerStores = Router();
//read/get

routerStores.get("/all", allStores)
routerStores.get("/address/:address", storeByaddress)
routerStores.get("/name/:nameStore", storeByname)


//creates/post

routerStores.post("/create",create)
routerStores.post("/createMany",createOther)
    
    
    


export default routerStores;
