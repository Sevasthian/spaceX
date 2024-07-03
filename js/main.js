
import { paginationRockets , load,paginationCapsules,paginationHistory} from "./modulesComponents/pagination.js"



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
    console.log(e);
    
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

let company = document.querySelector("#company");
company.addEventListener("click", async(e) => {
    await footerSelect(e, company);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
company.click();


let history = document.querySelector("#history");
history.addEventListener("click", async(e) => {
    await footerSelect(e, history);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationHistory());
});
history.click();

let cores = document.querySelector("#cores");
cores.addEventListener("click", async(e) => {
    await footerSelect(e, cores);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
cores.click();

let dragons = document.querySelector("#dragons");
dragons.addEventListener("click", async(e) => {
    await footerSelect(e, dragons);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
dragons.click();

let landing = document.querySelector("#landing");
landing.addEventListener("click", async(e) => {
    await footerSelect(e, landing);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
landing.click();

let launchpads = document.querySelector("#launchpads");
launchpads.addEventListener("click", async(e) => {
    await footerSelect(e, launchpads);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
launchpads.click();

let payloads = document.querySelector("#payloads");
payloads.addEventListener("click", async(e) => {
    await footerSelect(e, payloads);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
payloads.click();

let roadster = document.querySelector("#roadster");
roadster.addEventListener("click", async(e) => {
    await footerSelect(e, roadster);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
roadster.click();

let ships = document.querySelector("#ships");
ships.addEventListener("click", async(e) => {
    await footerSelect(e, ships);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
ships.click();

let starlink = document.querySelector("#starlink");
starlink.addEventListener("click", async(e) => {
    await footerSelect(e, starlink);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
starlink.click();

let crew = document.querySelector("#crew");
crew.addEventListener("click", async(e) => {
    await footerSelect(e, crew);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
crew.click();

let launches = document.querySelector("#launches");
launches.addEventListener("click", async(e) => {
    await footerSelect(e, launches);
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = "";
    paginacion.append(await paginationCapsules());
});
launches
.click();



