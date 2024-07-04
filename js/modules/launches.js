import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllLaunches = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
    let data = await res.json();
    return data;
}

export const informationLaunches = async (Launches) =>{

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

    #infoLaunch{
        margin-bottom: 20px
    }

    </style>

    <h2 id="infoLaunch">More information</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>YouTuBe id: </b> ${Launches.links.youtube_id || "N/A"} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Static fire test:   </b> ${Launches.static_fire_date_unix || "N/A"} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>Sucess: </b> ${Launches.sucess || "Failure"} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-paperclip"></i>
            <p><b>Article: </b> <a href="${Launches.links.article} ">Click here</a></p>
        </div>

        <div class="item__container">
            <i class="bi bi-wikipedia"></i>
            <p><b>Wikipedia: </b> <a href="${Launches.links.wikipedia} ">See wikipedia</a> </p>
        </div>

    </div>
    `

    let centerLaunch1 = document.querySelector("#country_rocket")
    centerLaunch1.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}

    </style>

        <div class="table__property">
        <div class="title">
            <h3>ID</h3>
        </div>
        <div class="value">
            <p>${Launches.id}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Flight number</h3>
        </div>
        <div class="value">
            <p>${Launches.flight_number}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Date</h3>
        </div>
        <div class="value">
            <p>${Launches.date_utc.slice(0,10)}</p>
        </div>
        </div>
        `

    let centerLaunch2 = document.querySelector("#sucess_rate_rocket")
    centerLaunch2.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
        <div class="table__property">
            <div class="title">
                <h3>Launchpad</h3>
            </div>
            <div class="value">
                <p>${Launches.launchpad}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Rocket</h3>
            </div>
            <div class="value">
                <p>${Launches.rocket}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Core</h3>
            </div>
            <div class="value">
                <p>${Launches.cores[0].core}</p>
            </div>
            </div>
    `

    let centerLaunch3= document.querySelector("#section__image")
    centerLaunch3.innerHTML = /*html*/`

    <style>
    .patch__launch{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    .patch__launch img{

        width: 70%

    }
    </style>
        
    <div class="patch__launch">
            <img src="${Launches.links.patch.small || "Patch is not available"}" alt="">
        </div> 
    `

    let rightLaunch = document.querySelector("#information__2")
    rightLaunch.innerHTML = /*html*/`

    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table >
        <tr>
            <td style="font-weight: bold; color: #ffff">${Launches.details || " "}</td>

    </table>`

    


}
