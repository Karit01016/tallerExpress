 import Employee from "../../models/Employee.js";
//interactua y me da las funciones para poderme conectar con el.

let createOneEmployee = async (req, res, next) => {
  try {
    let employee = req.body; //en el   body va toda la informacion  a crear
    let createEmployee = await Employee.create(employee);
    return res.status(201).json({
      response: createEmployee,
    });
  } catch (error) {
    next(error);
  }
};
let createOtherEmployee = async (req, res, next) => {
  try {
    let employee = req.body; // espera un arreglo de objetos en el postman
    let createManyEmployees = await Employee.insertMany(employee);
    return res.status(201).json({
      response: createManyEmployees,
    });
  } catch (error) {
    next(error);
  }
};

export { createOneEmployee, createOtherEmployee };
