import mongoose from "mongoose";

const productosScheme = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        descripcion: {
            type: String,
            required: true,
            trim: true
        },

        categoria: {
            type: String,
            required: true,
            trim: true
        },

        precio: {
            type: Number,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
        },

        sku: {
            type: String,
            required: true,
            trim: true
        },

        fabricante: {
            type: String,
            required: true,
            trim: true
        },

        id: {
            type: String,
            required: true,
            trim: true
        },

    },

    {
        timestamps: true,
    }
);

const insertProductosScheme = mongoose.Schema(
    {   
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        descripcion: {
            type: String,
            required: true,
            trim: true
        },

        categoria: {
            type: String,
            required: true,
            trim: true
        },

        precio: {
            type: Number,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
        },

        sku: {
            type: String,
            required: true,
            trim: true
        },

        fabricante: {
            type: String,
            required: true,
            trim: true
        },

        id: {
            type: String,
            required: true,
            trim: true
        },
        
    },

    {
        versionKey: false
    }
);

const Producto = mongoose.model("Producto", productosScheme)
const InsertarProducto = mongoose.model("Insertar", insertProductosScheme, "productos")

export {
    Producto,
    InsertarProducto,
};