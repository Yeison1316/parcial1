import express from "express";
import bodyParser from "body-parser";
import router from "../routes/index.routes.js";
import middle from "../middlewares/index.middleware.js";
import {exports} from "./default.js";
import pgService from "../services/pg.services.js";


export default class Server
{
    constructor()
    {
        this.app = express();
        this.port = exports.port;
    }
        async connectionDB()
        {
            new pgService();
        }

        middleware()
        {
            this.app.use(bodyParser.json());
            this.app.use(middle);
        }

        routes(){

            this.app.use(router)
        }

        runServer()
        {
            this.app.listen(this.port, ()=> 
            {
                console.log("HOLA SERVIDOR", this.port);
            })
        }

        load()
        {
            this.connectionDB();
            this.middleware();
            this.routes();
            this.runServer();
        }
}