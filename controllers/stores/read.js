import Store from "../../models/Store.js";

let allStores = async (req, res,next) => {
  try {
    let all = await Store.find();
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
let storeByaddress = async (req, res,next) => {
  try {
    let byAddress = req.params.address;
    console.log(byAddress);

    let store = await Store.find({ address: byAddress }); // Buscar por el campo "direction"
    return res.status(200).json({
      response: store,
    });
  } catch (error) {
    next(error);
  }
};
let storeByname = async (req, res,next) => {
  try {
    let nameStores = decodeURIComponent(req.params.name); // ecodeURIComponent me
    console.log(nameStores);

    let store = await Store.find({ name: nameStores }); // Buscar por el campo "namestore"
    if (store.length === 0) {
      return res.status(404).json({
        response: `Not store found with the name: ${nameStores}`,
      });
    }
    return res.status(200).json({
      response: store,
    });
  } catch (error) {
    next(error);
  }
};
export { allStores, storeByaddress, storeByname };
