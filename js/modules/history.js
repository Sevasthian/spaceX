import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllHistory = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllHistoryId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/history/${id}`)
    let data = await res.json();
    return data;
}

export const informationHistory = async (History) =>{
    let firstTableCrew = document.querySelector("#country_rocket")
    firstTableCrew.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Event date utc</h3>
        </div>
        <div class="value">
            <p>${History.event_date_utc.slice(1,10)}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Event date unix</h3>
        </div>
        <div class="value">
            <p>${History.event_date_unix}</p>
        </div>
        </div>`

    let secondTableCrew = document.querySelector("#sucess_rate_rocket")
    secondTableCrew.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}
        #linkHistory{
            color: var(--color--five);
        }
    </style>
        <div class="table__property">
            <div class="title">
                <h3>Article</h3>
            </div>
            <div class="value">
                <p><a id="linkHistory" href="${History.links.article}">Click here</a></p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>ID</h3>
            </div>
            <div class="value">
                <p>${History.id}</p>
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
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table>
        <tr>
            <td id="textDetails" style="font-weight: bold">${History.details}</td>
        </tr>

    </table>`
}