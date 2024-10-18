import Store from "../../models/Store.js";
//interactua y me da las funciones para poderme conectar con el.

let create = async (req, res, next) => {
  try {
    let store = req.body; //en el   body va toda la informacion mportante
    let createStore = await Store.create(store);
    return res.status(201).json({
      response: createStore,
    });
  } catch (error) {
    next(error);
  }
};
let createOther = async (req, res, next) => {
  try {
    let stores = req.body; // espera un arreglo de objetos en el postman
    let createManyStore = await Store.insertMany(stores);
    return res.status(201).json({
      response: createManyStore,
    });
  } catch (error) {
    next(error);
  }
};

export { create, createOther };
