import Product from "../../models/Product.js";

let allProducts = async (req, res,next) => {
  try {
    let all = await Product.find();
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
let findProducts= async (req, res,next) => {
  try {
    let byTYPE = req.params.type;
    console.log(byTYPE);

    let productFind = await Product.find({ type: byTYPE }); // Buscar por el campo "direction"
    return res.status(200).json({
      response: productFind,
    });
  } catch (error) {
    next(error);
  }
};
let productByname = async (req, res,next) => {
  try {
    let nameProdut = decodeURIComponent(req.params.name); // ecodeURIComponent me
    console.log(nameProdut);

    let findProducts = await Product.find({ name: nameProdut }); // Buscar por el campo "namestore"
    if (findProducts.length === 0) {
      return res.status(404).json({
        response: `Not product found with the name: ${nameProdut}`,
      });
    }
    return res.status(200).json({
      response: store,
    });
  } catch (error) {
    next(error);
  }
};
export { allProducts,findProducts,productByname };