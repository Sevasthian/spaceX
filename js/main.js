import { getAllRockets , titleOfRockets,getAllRocketEngineTotal,getAllRocketEngineThrustVacuumTotal} from "./modules/rockets.js";
import { paginationRockets , load,paginationCapsules} from "./modulesComponents/pagination.js"



// let json = await getAllRockets()
// console.log(json);
// json.forEach(rocket => {
//     console.log(rocket.name);  // Ejemplo de acceso a la propiedad 'name' de cada cohete
//     console.log(rocket.cost_per_launch);  // Ejemplo de acceso al costo por lanzamiento
// });

// Función para seleccionar el elemento de pie de página
let footerSelect = async(e, id) => {
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li");
    for (let val of li) {
        let [a] = val.children;
        a.classList.remove('select');
    }
    let [a] = id.children;
    a.classList.add('select');
}

// Añadir evento de click al elemento con id 'rocket'
let rocket = document.querySelector("#rocket");
rocket.addEventListener("click", async(e) => {
    await footerSelect(e, rocket);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationRockets());
});
rocket.click();

// Añadir evento de click al elemento con id 'capsules'
let capsules = document.querySelector("#capsules");
capsules.addEventListener("click", async(e) => {
    await footerSelect(e, capsules);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
capsules.click();

let res = await getAllRocketEngineTotal()
let res2 = await getAllRocketEngineThrustVacuumTotal()
console.log(res2);

console.log(res);
