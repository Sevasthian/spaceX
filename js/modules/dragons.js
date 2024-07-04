import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllDragons = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllDragonsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    let data = await res.json();
    return data;
}

export const informationDragons = async(Dragons)=>{
    let leftDragons = document.querySelector("#description__item")
    leftDragons.innerHTML = /*html*/`

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
        margin-bottom: 20px;
        font-size: 20px
    }

    #infoDragonsLaunchPaylodMass, #infoDragonsLaunchPaylodVol{
        margin: 30px 0px 20px 0px;
        font-size: 20px
    }

    </style>

    <h2 id="infoLaunch">Heat shield Information</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Material: </b> ${Dragons.heat_shield.material} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Size meters: </b> ${Dragons.heat_shield.size_meters} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>Temp degree: </b> ${Dragons.heat_shield.temp_degrees} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-paperclip"></i>
            <p><b>Dev partner </b>${Dragons.heat_shield.dev_partner}"</p>
        </div>

    </div>

    <h2 id="infoDragonsLaunchPaylodMass">Launch payload mass</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Kgs: </b> ${Dragons.launch_payload_mass.kg} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Lbs: </b> ${Dragons.launch_payload_mass.lb} </p>
        </div>

    </div>

    <h2 id="infoDragonsLaunchPaylodVol">Launch payload Volume</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Cubir meters: </b> ${Dragons.launch_payload_vol.cubic_meters} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Cubic: </b> ${Dragons.launch_payload_vol.cubic_feet} </p>
        </div>
    </div>
    `

    let generalInformationDragonLeft= document.querySelector("#country_rocket")
    generalInformationDragonLeft.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Type</h3>
        </div>
        <div class="value">
            <p>${Dragons.type}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Active</h3>
        </div>
        <div class="value">
            <p>${Dragons.active}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>First flight</h3>
        </div>
        <div class="value">
            <p>${Dragons.first_flight}</p>
        </div>
        </div>`

    let generalInformationDragonLRight = document.querySelector("#sucess_rate_rocket")
    generalInformationDragonLRight.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>ID</h3>
        </div>
        <div class="value">
            <p>${Dragons.id}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Dry mass kg</h3>
        </div>
        <div class="value">
            <p>${Dragons.dry_mass_kg}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Dry mass lb</h3>
        </div>
        <div class="value">
            <p>${Dragons.dry_mass_lb}</p>
        </div>
        </div>`

    let moreInformationDragonRight = document.querySelector("#information__2")
    moreInformationDragonRight.innerHTML = /*html*/`

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

    <h2 id="returnPayloadMass">Return payload Mass</h2>

    <div class="property__box__two">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>KGS: </b> ${Dragons.return_payload_mass.kg} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>LBS: </b> ${Dragons.return_payload_mass.lb} </p>
        </div>

    </div>
    
    <h2 id="diameters">Diameters</h2>

    <div class="property__box__two">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Meters: </b> ${Dragons.diameter.meters} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Feet: </b> ${Dragons.diameter.feet} </p>
        </div>

    </div>

    <h2 id="thrusters">Thrusters</h2>

    <div class="property__box__two">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Type: </b> ${Dragons.thrusters[0].type} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Amount: </b> ${Dragons.thrusters[0].amount} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Fuel 1: </b> ${Dragons.thrusters[0].fuel_1} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Fuel 2: </b> ${Dragons.thrusters[0].fuel_2} </p>
        </div>

    </div>
    `

    let imageDragons= document.querySelector("#section__image")
    imageDragons.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    #image__dragon__bx{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    #image__dragon__bx img{

        width: 60%;
        overflow: hidden;
    }

    </style>

    <div id="image__dragon__bx">
        <img style="width: auto; height: 300px;" src="${Dragons.flickr_images }" referrerpolicy = "no-referrer" alt="">
    </div>`
}