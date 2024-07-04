import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";


export const informRocketEngineThrustSeaLevel = async(thrust_sea_level)=>{
    let {kN:totalKN} = await getAllRocketEngineTotal();
    let pocentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}


export const informRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}

// export const countryOfEachRocket = async(rocket)=>{

//     let country_rocket = document.querySelector('#country_rocket');
//     country_rocket.innerHTML = /*html*/`
//     <div class="divCountry">
//         <div class="flagCountry">
//             <img src="https://cdn3d.iconscout.com/3d/premium/thumb/united-states-flag-pole-5082845-4234133.png" alt="">
//         </div>
//         <div class="informationCountry">
//             <h2>Country of the rocket</h2>
//             <p>${rocket.country}</p>
//         </div>

//     </div>
//     `

//     if (rocket.country == 'Republic of the Marshall Islands'){
//         country_rocket.children[0].children[0].innerHTML = /*html*/ `
//         <img src="https://cdn3d.iconscout.com/3d/premium/thumb/marshall-islands-flag-pole-5082826-4234114.png?f=webp" alt="">
//         `
//     }
// }



// export const  = async(rocket)=>{
//     let sucess_rate_rocket = document.querySelector('#sucess_rate_rocket')
//     sucess_rate_rocket.innerHTML = ``
// }

export const sucessRateRocket= async(rocket)=>{

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${rocket.success_rate_pct}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Rate of success"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${rocket.success_rate_pct} %`
    
    divFirstChildren.append(strong, smallFirst)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
 
    let sucess_rate_rocket = document.querySelector('#sucess_rate_rocket')
    sucess_rate_rocket.innerHTML= ``
    sucess_rate_rocket.append(div)


}


