import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllStarlink= async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllStarlinkId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`)
    let data = await res.json();
    return data;
}

export const informationStarlink = async (Starlink) =>{

    let firstTableStarlink = document.querySelector("#country_rocket")
    firstTableStarlink.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Launch</h3>
        </div>
        <div class="value">
            <p>${Starlink.launch}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>version</h3>
        </div>
        <div class="value">
            <p>${Starlink.version}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>ID </h3>
        </div>
        <div class="value">
            <p>${Starlink.id}</p>
        </div>
        </div>`

        let secondTableStarlink = document.querySelector("#sucess_rate_rocket")
        secondTableStarlink.innerHTML = /*html*/`
        <style>${styleOfEachProperty()}</style>
                <div class="table__property">
            <div class="title">
                <h3>Eccentricity</h3>
            </div>
            <div class="value">
                <p>${Starlink.spaceTrack.ECCENTRICITY}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Inclination</h3>
            </div>
            <div class="value">
                <p>${Starlink.spaceTrack.INCLINATION}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Comment</h3>
            </div>
            <div class="value">
                <p>${Starlink.spaceTrack.COMMENT}</p>
            </div>
            </div>`

            let informationStarlinkLeft = document.querySelector("#description__item")
            informationStarlinkLeft.innerHTML = /*html*/`
        
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
                    <p><b>Creation date: </b>${Starlink.spaceTrack.CREATION_DATE.slice(1,10)}</p>
                </div>
                
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Originator: </b> ${Starlink.spaceTrack.ORIGINATOR} </p>
                </div>
        
        
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Center name: </b> ${Starlink.spaceTrack.CENTER_NAME} </p>
                </div>
        
        
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Ref frame: </b> ${Starlink.spaceTrack.REF_FRAME} </p>
                </div>
        
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Element theory: </b> ${Starlink.spaceTrack.MEAN_ELEMENT_THEORY} </p>
                </div>

                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Period: </b> ${Starlink.spaceTrack.PERIOD} </p>
                </div>
                
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Decay date: </b> ${Starlink.spaceTrack.DECAY_DATE} </p>
                </div>
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>Decayed: </b> ${Starlink.spaceTrack.DECAYED} </p>
                </div>
                <div class="item__container">
                    <i class="bi bi-fire"></i>
                    <p><b>GP_ID: </b> ${Starlink.spaceTrack.GP_ID} </p>
                </div>
            </div>
        
            `

        let moreInformationStarlinkRight = document.querySelector("#information__2")
        moreInformationStarlinkRight.innerHTML = /*html*/`
        
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
                width: 90%
        
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
        
            <h2 id="returnPayloadMass">More information</h2>
        
            <div class="item__container">
                <i class="bi bi-youtube"></i>
                <p><b>Classification type: </b> ${Starlink.spaceTrack.CLASSIFICATION_TYPE} </p>
            </div>
    
            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Norad cat ID: </b> ${Starlink.spaceTrack.NORAD_CAT_ID} </p>
            </div>
        
        
            <div class="item__container">
                <i class="bi bi-youtube"></i>
                <p><b>Country code: </b> ${Starlink.spaceTrack.COUNTRY_CODE} </p>
            </div>
    
            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Site: </b> ${Starlink.spaceTrack.SITE} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Mean motion DOT: </b> ${Starlink.spaceTrack.MEAN_MOTION_DOT} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Mean motion DDT: </b> ${Starlink.spaceTrack.MEAN_MOTION_DDOT} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Semimajor axis: </b> ${Starlink.spaceTrack.SEMIMAJOR_AXIS} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Aproapsis: </b> ${Starlink.spaceTrack.APOAPSIS} </p>
            </div>

            <div class="item__container">
                <i class="bi bi-fire"></i>
                <p><b>Periapsis: </b> ${Starlink.spaceTrack.PERIAPSIS} </p>
            </div>
            
            `
        }