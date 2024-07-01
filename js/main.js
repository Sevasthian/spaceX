import { getAllRockets , titleOfRockets,getAllRocketEngineTotal,getAllRocketEngineThrustVacuumTotal} from "./modules/rockets.js";
import { paginationRockets , load,paginationCapsules} from "./modulesComponents/pagination.js"



// let json = await getAllRockets()
// console.log(json);
// json.forEach(rocket => {
//     console.log(rocket.name);  // Ejemplo de acceso a la propiedad 'name' de cada cohete
//     console.log(rocket.cost_per_launch);  // Ejemplo de acceso al costo por lanzamiento
// });

//console.log(titleOfRockets(1));
let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )
rocket.click();

let capsules = document.querySelector("#capsules")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e,rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})
capsules.click();

let res = await getAllRocketEngineTotal()
let res2 = await getAllRocketEngineThrustVacuumTotal()
console.log(res2);

console.log(res);
