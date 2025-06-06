import express from "express";
import dotenv from "dotenv";
import conectDB from "./config/configDB.js";
import router from "./routes/ProductoRoute.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/productos", router);
app.use("/insertar", router);
app.use("/buscar", router);
app.use("/actualizar", router);
app.use("/eliminar", router);

const PORT = process.env.PORT;
conectDB();

app.set("port", PORT)

app.get("/", (req, res) => {

    res.send("Mi servidor")

})

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto", PORT);
});