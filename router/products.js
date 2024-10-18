import { Router } from "express";
import { allProducts , findProducts , productByname } from "../controllers/products/read.js";
import { createOneProduct,createOtherProducts} from "../controllers/products/create.js"

const routerProducts = Router();
//read/get

routerProducts.get("/all", allProducts)
routerProducts.get("/type/:type", findProducts)
routerProducts.get("/name/:nameProduct", productByname)


//creates/post

routerProducts.post("/create",createOneProduct)
routerProducts.post("/createMany",createOtherProducts)
    
    
    


export default routerProducts;