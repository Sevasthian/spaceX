import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllPayloads = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllPayloadsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`)
    let data = await res.json();
    return data;
}


export const informationPayloads = async (Payloads) =>{

    let firstTablePayloads = document.querySelector("#country_rocket")
    firstTablePayloads.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Type</h3>
        </div>
        <div class="value">
            <p>${Payloads.type}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Launch</h3>
        </div>
        <div class="value">
            <p>${Payloads.launch}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Reused</h3>
        </div>
        <div class="value">
            <p>${Payloads.reused}</p>
        </div>
        </div>`

    let secondTablePayloads = document.querySelector("#sucess_rate_rocket")
    secondTablePayloads.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}
        #linkHistory{
            color: var(--color--five);
        }
    </style>
        <div class="table__property">
            <div class="title">
                <h3>Orbit</h3>
            </div>
            <div class="value">
                <p>${Payloads.orbit}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Reference system</h3>
            </div>
            <div class="value">
                <p>${Payloads.reference_system}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Regime</h3>
            </div>
            <div class="value">
                <p>${Payloads.regime}</p>
            </div>
            </div>
    `

    let detailsOfTheHistory= document.querySelector("#section__image")
    detailsOfTheHistory.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    #textDetails {
        text-align: center;
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">ID</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table>
        <tr>
            <td id="textDetails" style="font-weight: bold">${Payloads.id}</td>
        </tr>

    </table>`

    let moreInformationPayloadRight = document.querySelector("#description__item")
    moreInformationPayloadRight.innerHTML = /*html*/`

    <style>

    .item__container{
        background-color: #1d1f38;
        color: #ffff;
        border-left: 5px solid #55588a;
        width: 100%;
        border-radius: 0px 10px 10px 0px ;
        display: flex;
        align-items: center;
        margin-bottom: 15px;

    }


    .item__container p{

        padding: 15px 15px 15px 0px;
    }

    .item__container i{
        font-size: 25px;
        padding-inline: 5px
    }

    .item__container a{
        color: var(--color--five);
        

    }

    .property__box__two{
        width: 90%;
        margin-left: 20px;
    }

    #returnPayloadMass{
        color: var(--color--five);
        font-size: 20px;
        margin-bottom: 20px;
        margin-left: 20px
    }

    #diameters, #thrusters{
        color: var(--color--five);
        font-size: 20px;
        margin: 30px 0px 20px 20px 

    }

    </style>

    <h2 id="returnPayloadMass">More Information</h2>

    <div class="property__box__two">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>KGS: </b> ${Payloads.mass_kg} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>LBS: </b> ${Payloads.mass_lbs} </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Periapsis km: </b> ${Payloads.periapsis_km} </p>
        </div>


        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Apoapsis km: </b> ${Payloads.apoapsis_km} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Inclination degree: </b> ${Payloads.inclination_deg} </p>
        </div>
    </div>

    `
}