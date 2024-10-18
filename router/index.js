import { Router } from "express";
import routerStores from "./stores.js"
import routerProducts from "./products.js";
import routerEmployees from "./employees.js";

const router = Router();

router.use("/stores", routerStores);
router.use("/product", routerProducts);
router.use("/employees", routerEmployees)


export default router;