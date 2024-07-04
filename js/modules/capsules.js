import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const informationCapsule = async (Capsule) =>{

    let firstTableInformation = document.querySelector("#country_rocket")
    firstTableInformation.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>ID of the capsule</h3>
        </div>
        <div class="value">
            <p>${Capsule.id}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Status</h3>
        </div>
        <div class="value">
            <p>${Capsule.status}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Type</h3>
        </div>
        <div class="value">
            <p>${Capsule.type}</p>
        </div>
        </div>
        `

    let secondTableInformationTable = document.querySelector("#sucess_rate_rocket")
    secondTableInformationTable.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
        <div class="table__property">
            <div class="title">
                <h3>Serial of the capsule</h3>
            </div>
            <div class="value">
                <p>${Capsule.serial}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Water landings</h3>
            </div>
            <div class="value">
                <p>${Capsule.water_landings}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>Land landings</h3>
            </div>
            <div class="value">
                <p>${Capsule.land_landings}</p>
            </div>
            </div>
    `

    let thirdTableInformationTable = document.querySelector("#section__image")
    thirdTableInformationTable.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAUNCHES</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table>
        <tr>
            <td style="font-weight: bold">${Capsule.launches[0] || " "}</td>
        </tr>
        <tr>
            <td style="font-weight: bold">${Capsule.launches[1] || " "}</td>
        </tr>
        <tr>
            <td style="font-weight: bold">${Capsule.launches[2] || " "} </td>
        </tr>
    </table>`

    thirdTableInformationTable.innerHTML += /*html*/`

    <style>

        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        
        .last__update{
            
            margin-top: 20px;
            width: 100%;
            border: 1px solid #55588a;
            border-radius: 10px;
        }
        
        .title__last__upt{
            gap: 5px;
            display: flex;
            justify-content: center;
            background-color: #1d1f38;
            color: var(--color--five);
            padding: 5px;
            border-radius: 10px 10px 0px 0px;
            
        }

        h2{
            font-size: 20px;
        }

        i{
            font-size: 20px;
            color: var(--color--five);
        }
        
        .value__last__upt{
            display: flex;
            justify-content: center;
            padding: 7px;
        }
    </style>

            <div class="last__update" >
        <div class="title__last__upt">
            <i class="bi bi-activity"></i>
            <h2>LAST UPDATE</h2>
        </div>
        <div class="value__last__upt">
            <p>${Capsule.last_update}</p>
        </div>
        </div>`

}
