const path = require('path');
const DB_PATH = path.join(__dirname + "/../database/data.json") 
let db = require(DB_PATH);
const fs = require('fs');



class tareasGetController {
    async get(req,res){

        return res.send(db)
    }
    async add(req,res){

        const {body:tarea}=req;
        const ultimaTarea = db[db.length - 1 ];
        const {id} = ultimaTarea;
        tarea.id = id + 1;
        db.push(tarea);
       fs.writeFileSync(DB_PATH,JSON.stringify(db));
      
        return res.status(201).send({ msj:"creado",tarea});
    }   

    async put(req,res){
        const {id:ruta} = req.params;
        const {body:tareaAc} = req;
        const  datos = db
           
        let  ItemL =  datos.filter(item => {

            if(ruta == item.id){

                return item
            }
                 
        } );
            
         console.log(ItemL)

            ItemL.map((item)=>{
                item.id 
                item.nombre = tareaAc.nombre
                item.tarea = tareaAc.tarea

            })
           // db.push(ItemL);
            fs.writeFileSync(DB_PATH,JSON.stringify(db));
            return res.status(201).send({ msj:"Actualizado",ItemL});
 
    }

    async borrar (req,res){

        const {id:ruta} = req.params;
        const  datos = db
           
        let  posicion;
        
        datos.filter((index,item)=> {

            
            if(ruta == index.id){

                 return posicion =  item;  
               }
            
        });
        datos.splice(posicion, 1 )
        
        
        
            fs.writeFileSync(DB_PATH,JSON.stringify(db));
            return res.status(201).send({ msj:"Borrado"});
            
    }
    async buscar(req,res){
        const {id} = req.params;

            
        const datos = db
        datos.filter(item=>{

            if(id == item.id)
            return res.send(item)
   
        })
        
    }
}
 


module.exports =   new tareasGetController();