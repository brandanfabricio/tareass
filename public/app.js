 


class Tareas {
    constructor(nombre,tarea){
        this.nombre = nombre;
        this.tarea = tarea;
    
        
    }
    


  async Cargar(){

    let data = await axios('http://localhost:3000/tareas',)
            .then(res=>res.data);

    console.log(data)

    const div = document.getElementById('lista-tarea')
     
const fragment = document.createDocumentFragment();
const template = document.querySelector("#tem-ta").content;
data.map(({nombre,tarea})=>{
    template.querySelector('strong').textContent = nombre;
    template.querySelector('b').textContent = tarea;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone)


})
div.appendChild(fragment) 


}


}




document.getElementById('guardar')
.addEventListener('click',(e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombre').value
    const tarea = document.getElementById('tarea').value 
   
      const ListaTarea = new Tareas().Cargar()
    console.log(ListaTarea)
  
     axios.post('http://localhost:3000/tareas/add',{
         "nombre":`${nombre}`,
         "tarea":`${tarea}`,

     })
     .then(res=>console.log(res));

     
    
})


