import {Producto, InsertarProducto} from "../models/Producto.js";

const obtenerProductos = async (req, res) =>{

    const productos = await Producto.find();
    res.json(productos)
}

const insertProductos = async (req, res) =>{

    const documento = {

        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        categoria:req.body.categoria,
        precio:req.body.precio,
        stock:req.body.stock,
        sku:req.body.sku,
        fabricante:req.body.fabricante,
        id:req.body.id,
    }
    
    const insertar = await InsertarProducto.create(documento);
    res.json(insertar)
}

const obtenerOneProducto = async (req, res) =>{

    const {busqueda} = req.params;
    const libro = await InsertarProducto.findOne({id:busqueda});

    if (!libro){
        return res.status(400).json({msg: "Producto no encontrado" });
    }

    res.json(libro);
}

const actualizarProducto = async (req, res) =>{

    const {id} = req.params;
    const newDatos = req.body;

    const productoActualizado = await InsertarProducto.findOneAndUpdate(
        {id: id},
        newDatos,
        {new: true}
    );

    if (!productoActualizado) {
            return res.status(404).json({ msg: 'Libro no encontrado.' });
        }

    res.json(productoActualizado);
}

const borrarProducto = async (req, res) =>{

    const {id} = req.params;

    const productoEliminado = await InsertarProducto.findOneAndDelete({id: id});

    if (!productoEliminado) {
            return res.status(404).json({ msg: 'Libro no encontrado.' });
        }

    res.json(productoEliminado);
}

export {
    obtenerProductos,
    insertProductos,
    obtenerOneProducto,
    actualizarProducto,
    borrarProducto,
};