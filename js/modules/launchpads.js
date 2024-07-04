import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllLaunchPads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchPadsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`)
    let data = await res.json();
    return data;
}

export const informationLaunchPads = async (Launchpads) =>{

    let centerLandpadLeft = document.querySelector("#country_rocket")
    centerLandpadLeft.innerHTML = /*html*/`

    <style>${styleOfEachProperty()}

    </style>

    <div class="table__property">
    <div class="title">
        <h3>ID</h3>
    </div>
    <div class="value">
        <p>${Launchpads.id}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Locality</h3>
    </div>
    <div class="value">
        <p>${Launchpads.locality}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Locality</h3>
    </div>
    <div class="value">
        <p>${Launchpads.region}</p>
    </div>
    </div>
    
`

    let centerLandpadRight = document.querySelector("#sucess_rate_rocket")
    centerLandpadRight.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>Status</h3>
    </div>
    <div class="value">
        <p>${Launchpads.status}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Latitude</h3>
    </div>
    <div class="value">
        <p>${Launchpads.latitude}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Longitude</h3>
    </div>
    <div class="value">
        <p>${Launchpads.longitude}</p>
    </div>
    </div>`


    let centerImageLaunchPads= document.querySelector("#section__image")
    centerImageLaunchPads.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    #image__launchPads__bx{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    #image__launchPads__bx img{

        width: 70%;
        overflow: hidden;
    }

    

    </style>

    <div id="image__launchPads__bx">
        <img style="width: auto; height: 300px;" src="${Launchpads.images.large}" referrerpolicy = "no-referrer" alt="">
    </div>`


    let rightLanpadDetails = document.querySelector("#information__2")
    rightLanpadDetails.innerHTML = /*html*/`

    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    #details__table {
        margin-right: 30px
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table id="details__table">
        <tr>
            <td style="font-weight: bold; color: #ffff; margin-right: 20px">${Launchpads.details}</td>

    </table>`

    let leftLaunchPadsRockets = document.querySelector("#description__item")
    leftLaunchPadsRockets.innerHTML = /*html*/`

    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    #details__table {
        margin-right: 30px
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">ROCKETS</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <div id="rocketsBox" style="height: 700px; overflow-y: scroll; width: 80%"></div>`

    let rocketBox = document.querySelector("#rocketsBox")


    for (let rocket of Launchpads.rockets) {
        rocketBox.innerHTML += /*html*/`

        <p style="font-weight: bold; color: #ffff; margin-right: 20px; font-size: 15px">${rocket}</p>`
    }

}