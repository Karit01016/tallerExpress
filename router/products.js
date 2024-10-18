import { Router } from "express";
import { allProducts,findProducts,productByname } from "../controllers/stores/read.js";
import { create,createOther} from "../controllers/stores/create.js";

const routerProducts = Router();
//read/get

routerProducts.get("/all", allProducts)
routerProducts.get("/type/:type", findProducts)
routerProducts.get("/name/:nameProduct", productByname)


//creates/post

routerProducts.post("/create",create)
routerProducts.post("/createMany",createOther)
    
    
    


export default routerProducts;