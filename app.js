

class Tareas {
    constructor(nombre,tarea){
        this.nombre = nombre;
        this.tarea = tarea;

    }
    GuardarTa(datos){
        return  Datos.push(datos)

    }

        
 Cargar(Datos = []){
    const div = document.getElementById('lista-tarea')
     
const fragment = document.createDocumentFragment();
const template = document.querySelector("#tem-ta").content;
Datos.forEach(({nombre,tarea})=>{
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
   
      const ListaTarea = new Tareas(nombre,tarea)
      

      let datos = ListaTarea.GuardarTa(ListaTarea)
     


    ListaTarea.Cargar(datos)
  

   
})



console.log(Datos)

