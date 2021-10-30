
/*

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

*/






document.getElementById('guardar')
    .addEventListener('click', (e) => {
        // e.preventDefault();
        const nombre = document.getElementById('nombre').value
        const tarea = document.getElementById('tarea').value


        axios.post('http://localhost:3000/tareas/add', {
            "nombre": `${nombre}`,
            "tarea": `${tarea}`,

        })
            .then(res => console.log(res));




    })







let data = await axios('http://localhost:3000/tareas',)
    .then(res => res.data);

console.log(data)

const div = document.getElementById('lista-tarea')

const fragment = document.createDocumentFragment();
const template = document.querySelector("#tem-ta").content;
data.map(({ id, nombre, tarea }) => {
    template.querySelector('strong').textContent = nombre;
    template.querySelector('b').textContent = tarea;
    template.querySelector('.borrar').dataset.id = id;
    template.querySelector('.actualizar').dataset.id = id;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone)


})
div.appendChild(fragment)


const botones = document.querySelectorAll('.borrar')


botones.forEach(btn => {
    btn.addEventListener('click', async () => {
        // console.log(btn.dataset.id);

        axios.delete(`http://localhost:3000/tareas/${btn.dataset.id}`).then(res=>console.log( "Tarea " + res.data. msj))
        location.reload();


           


    })
});





const botonesActua = document.querySelectorAll('.actualizar')

botonesActua.forEach(btn => {
    btn.addEventListener('click', async () => {
      
            
        let act = await axios(`http://localhost:3000/tareas/${btn.dataset.id}`)
    .then(res => res.data);

console.log(act)


         document.getElementById('nombre').value = act.nombre
        document.getElementById('tarea').value = act.tarea

        document.getElementById('update')
        .addEventListener('click', ()=>{

            const nombre = document.getElementById('nombre').value
            const tarea = document.getElementById('tarea').value
        
        
            axios.put(`http://localhost:3000/tareas/${btn.dataset.id}`, {
                "nombre": `${nombre}`,
                "tarea": `${tarea}`,
        
            })
                .then(res => console.log(res));
        
        
        })


    })
});
