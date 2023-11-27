import pgPromise from "pg-promise";
import {exports} from "../config/default.js"

export default class pgServices
{
    constructor(){
        if(pgServices.instance){
            return pgServices.instance;
        }

        pgServices.instance = this;

        const pg = pgPromise({});
        this.connection = pg(exports.postgres);
        ssl = true;
        this.connection.connect()
        .then(res=>{
            console.log("CONECTADO A LA BASE DE DATOS")
            res.done()
        })
        .catch(error =>{
            console.log("ERROR", error.message || error);
        })
    }
}