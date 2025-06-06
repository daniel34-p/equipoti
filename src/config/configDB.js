import mongoose from "mongoose";

const conectDB = async () => {

    try {
        const connectionBD = await mongoose.connect(process.env.MONGODB_URL);
        const url = `MONGOBD SE HA CONECTADO EN EL SERVIDOR {HOST} ${connectionBD.connection.host} EN EL PUERTO ${connectionBD.connection.port}`;
        console.log(url)
    } catch (error) {
        console.log(`${error.message}`)
        process.exit(1)
    }

}

export default conectDB;