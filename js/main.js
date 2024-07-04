
import { 
    getAllCompany,
    getAllRoadster,
    load,
    paginationCapsules,
    paginationCores,
    paginationCrew,
    paginationDragons,
    paginationHistory,
    paginationLandpads,
    paginationLaunchPads,
    paginationLaunches,
    paginationPayloads,
    paginationRockets,
    paginationShips,
    paginationStarlink
} from "./modulesComponents/pagination.js";


let buttons = document.querySelector("#buttons")
let [rocket, capsules, crew, launches, cores, landspads, ships, company, dragons, history, launchpads, payloads, roadster, starlink] = buttons.children
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


rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )


capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})


crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})


cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})


launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})


landspads.addEventListener("click", async(e)=>{
    await footerSelect(e, landspads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpads())
})


ships.addEventListener("click", async(e)=>{
    await footerSelect(e, ships)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})


company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    await getAllCompany()
})


dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, dragons)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})


history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistory())
})


launchpads.addEventListener("click", async(e)=>{
    await footerSelect(e, launchpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunchPads())
})


payloads.addEventListener("click", async(e)=>{
    await footerSelect(e, payloads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationPayloads())
})


roadster.addEventListener("click", async(e)=>{
    await footerSelect(e, roadster)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    await getAllRoadster()
})


starlink.addEventListener("click", async(e)=>{
    await footerSelect(e, starlink)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationStarlink())
})

rocket.click();

