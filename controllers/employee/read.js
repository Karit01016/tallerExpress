import Employee from "../../models/Employee.js";

let allEmployees = async (req, res,next) => {
  try {
    let all = await Employee.find();
    if (all.length === 0) {
      // Verifica si en el arreglo no hay nada
      return res.status(404).json({
        message: "No records found.", // Respuesta si no hay datos
      });
    }
    return res.status(200).json({
      response: all, // que si lo enocntro ejecute este cambio
    });
  } catch (error) {
    next(error)
  ;
  }
};
let findposition = async (req, res,next) => {
  try {
    let byPosition = req.params.position;
    console.log(byPosition);

    let employee = await Employee.find({ position: byPosition }); // Buscar por el campo "POSITION"
    return res.status(200).json({
      response: employee,
    });
  } catch (error) {
    next(error);
  }
};
let EmployeeByname = async (req, res,next) => {
  try {
    let nameEmployees = decodeURIComponent(req.params.name); // ecodeURIComponent me
    console.log(nameEmployees);

    let employee = await employee.find({ name: nameEmployees}); // Buscar por el campo "namEMPLOYEES"
    if (employee.length === 0) {
      return res.status(404).json({
        response: `Not store found with the name: ${nameEmployees}`,
      });
    }
    return res.status(200).json({
      response: employee,
    });
  } catch (error) {
    next(error);
  }
};
export { allEmployees,findposition,EmployeeByname } ;