const express = require('express');



class Server {
        constructor(){
            this.app = express();
            this.Port = process.env.PORT || 5000;
            this.tareas = '/tareas';
            this.middlewares();
            this.routes();
        }

        middlewares(){
            this.app.use(express.json())
            this.app.use(express.static('public'))
            this.app.use(express.urlencoded({extended : false}));
        }

    routes(){
        this.app.use(this.tareas,require('../routes/tareas.routes'))
    }



    listen(){
        this.app.listen(this.Port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.Port}`)
        })
    }
}

module.exports = Server;
