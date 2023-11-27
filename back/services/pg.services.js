import pgPromise from "pg-promise";
import {exports} from "../config/default.js"

export default class pgServices
{
    constructor() {
        if (pgServices.instance) {
            return pgServices.instance;
        }

        pgServices.instance = this;

        this.connectionPromise = (async () => {
            const pg = pgPromise({});
            this.connection = pg(exports.postgres);

            try {
                const res = await this.connection.connect();
                console.log("CONECTADO A LA BASE DE DATOS");
                res.done();
                return "Conexión exitosa";
            } catch (error) {
                console.log("ERROR", error.message || error);
                throw new Error("Error al conectar a la base de datos");
            }
        })();
    }
}