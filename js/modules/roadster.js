import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getRoadster = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/roadster")
    let data = await res.json();
    console.log(data);
    return data;
}

export const informationRoadster = async (Roadster) =>{

    let firstTableRoadster = document.querySelector("#country_rocket")
    firstTableRoadster.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Launch date utc</h3>
        </div>
        <div class="value">
            <p>${Roadster.launch_date_utc.slice(1,10)}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Launch date Unix</h3>
        </div>
        <div class="value">
            <p>${Roadster.launch_date_unix}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Orbit type </h3>
        </div>
        <div class="value">
            <p>${Roadster.orbit_type}</p>
        </div>
        </div>`

        let secondTableRoadster = document.querySelector("#sucess_rate_rocket")
        secondTableRoadster.innerHTML = /*html*/`
        <style>${styleOfEachProperty()}</style>
                <div class="table__property">
            <div class="title">
                <h3>Eccentricity</h3>
            </div>
            <div class="value">
                <p>${Roadster.eccentricity}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Inclination</h3>
            </div>
            <div class="value">
                <p>${Roadster.inclination}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Longitude</h3>
            </div>
            <div class="value">
                <p>${Roadster.longitude}</p>
            </div>
            </div>`


            let imageRoadster = document.querySelector("#section__image")
            imageRoadster.innerHTML = /*html*/`
            <style>
        
            #section__image {
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: var(--color--five);
            }
        
            #image__roadster__bx{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 30px;
            }

            #image__roadster__bx{
                overflow: hidden;
            }
        
            </style>
        
            <div id="image__roadster__bx">
                <img style="width: auto; height: 300px;" src="${Roadster.flickr_images}" referrerpolicy = "no-referrer" alt="">
            </div>`

        let rightRoadsterDetails = document.querySelector("#information__2")
        rightRoadsterDetails.innerHTML = /*html*/`

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
                <td style="font-weight: bold; color: #ffff; margin-right: 20px">${Roadster.details}</td>

        </table>`


        let informationRoadsterLeft = document.querySelector("#description__item")
        informationRoadsterLeft.innerHTML = /*html*/`
    
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
            width: 100%;

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
                <p><b>Wikipedia: </b><a href=" ${Roadster.wikipedia}">Click here</a> </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>ID: </b> ${Roadster.id} </p>
            </div>
    
    
            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Period day: </b> ${Roadster.period_days} </p>
            </div>
    
    
            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Eartch distance km: </b> ${Roadster.earth_distance_km} </p>
            </div>
    
            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Mars distance km: </b> ${Roadster.mars_distance_km} </p>
            </div>
        </div>
    
        `




}
