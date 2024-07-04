import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllShips = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllShipsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`)
    let data = await res.json();
    return data;
}

export const informationShips = async (Ships) =>{

    let shipCenterLeft= document.querySelector("#country_rocket")
    shipCenterLeft.innerHTML = /*html*/`

    <style>${styleOfEachProperty()}

    </style>

    <div class="table__property">
    <div class="title">
        <h3>Type</h3>
    </div>
    <div class="value">
        <p>${Ships.type}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Legacy ID</h3>
    </div>
    <div class="value">
        <p>${Ships.legacy_id}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Mass of the ship</h3>
    </div>
    <div class="value">
        <p>${Ships.mass_kg} kg</p>
    </div>
    </div>
    
`
    let centerShipRight = document.querySelector("#sucess_rate_rocket")
    centerShipRight.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>Year built</h3>
    </div>
    <div class="value">
        <p>${Ships.year_built}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Home port</h3>
    </div>
    <div class="value">
        <p>${Ships.home_port}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>ID</h3>
    </div>
    <div class="value">
        <p>${Ships.id}</p>
    </div>
    </div>`

    let centerShip= document.querySelector("#section__image")
    centerShip.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    #image__ship__bx{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    #image__ship__bx img{

        width: 60%;
        overflow: hidden;
    }


    </style>

    <div id="image__ship__bx">
        <img style="width: auto; height: 300px;" src="${Ships.image }" referrerpolicy = "no-referrer" alt="">
    </div>`

    let leftLaunch = document.querySelector("#description__item")
    leftLaunch.innerHTML = /*html*/`

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

    .property__box{
        width: 90%
    }

    #infoLaunch{
        margin-bottom: 20px
    }

    </style>

    <h2 id="infoLaunch">More information</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>IMO: </b> ${Ships.imo|| "N/A"} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>MMSI:   </b> ${Ships.mmsi || "N/A"} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>ABS: </b> ${Ships.abs || "N/A"} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-paperclip"></i>
            <p><b>Details: </b> <a href="${Ships.link}">Click here</a></p>
        </div>

        <div class="item__container">
            <i class="bi bi-wikipedia"></i>
            <p><b>Mass lbs: </b> ${Ships.mass_lbs}</p>
        </div>

    </div>
    `

    let shipLaunches= document.querySelector("#information__2")
    shipLaunches.innerHTML = /*html*/`

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

    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAUNCHES</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <div id="launchesBox" style="height: 700px; overflow-y: scroll; width: 80%"></div>`



    let launchesBox = document.querySelector("#launchesBox")
    for (let launch of Ships.launches) {
        launchesBox.innerHTML += /*html*/`

        <p style="font-weight: bold; color: #ffff; margin-right: 20px; font-size: 15px">${launch}</p>`
    }

}