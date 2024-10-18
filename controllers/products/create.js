import Product from "../../models/Product.js";
//interactua y me da las funciones para poderme conectar con el.

let create = async (req, res, next) => {
  try {
    let product = req.body; //en el   body va toda la informacion  a crear
    let createProduct = await Product.create(product);
    return res.status(201).json({
      response: createProduct,
    });
  } catch (error) {
    next(error);
  }
};
let createOther = async (req, res, next) => {
  try {
    let product = req.body; // espera un arreglo de objetos en el postman
    let createManyProducts = await Product.insertMany(product);
    return res.status(201).json({
      response: createManyProducts,
    });
  } catch (error) {
    next(error);
  }
};

export { create, createOther };
