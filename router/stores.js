import { Router } from "express";
import { allStores, storeByaddress, storeByname } from "../controllers/stores/read.js";
import { createOneStore,createOtherStore} from "../controllers/stores/create.js";

const routerStores = Router();
//read/get

routerStores.get("/all", allStores)
routerStores.get("/address/:address", storeByaddress)
routerStores.get("/name/:nameStore", storeByname)


//creates/post

routerStores.post("/create",createOneStore)
routerStores.post("/createMany",createOtherStore)
    
    
    


export default routerStores;
