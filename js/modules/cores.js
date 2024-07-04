import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllCores = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCoresId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${id}`)
    let data = await res.json();
    return data;
}


export const informationCores = async (Cores) =>{
    let centerCore1 = document.querySelector("#country_rocket")
    centerCore1.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>ID</h3>
    </div>
    <div class="value">
        <p>${Cores.id}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Status</h3>
    </div>
    <div class="value">
        <p>${Cores.status}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Serial</h3>
    </div>
    <div class="value">
        <p>${Cores.serial}</p>
    </div>
    </div>`

    let centerCore2 = document.querySelector("#sucess_rate_rocket")
    centerCore2.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>Block</h3>
    </div>
    <div class="value">
        <p>${Cores.block || "N/A"}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Reuse count</h3>
    </div>
    <div class="value">
        <p>${Cores.reuse_count}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Landing attempls</h3>
    </div>
    <div class="value">
        <p>${Cores.rtls_attempts}</p>
    </div>
    </div>`

    let centerCore3= document.querySelector("#section__image")
    centerCore3.innerHTML = /*html*/`
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
            <td style="font-weight: bold">${Cores.launches[0] || " "}</td>
        </tr>
        <tr>
            <td style="font-weight: bold">${Cores.launches[1] || " "}</td>  
        </tr>
        <tr>
            <td style="font-weight: bold">${Cores.launches[2] || " "}</td>
        </tr>

        <tr>
            <td style="font-weight: bold">${Cores.launches[3] || " "}</td>
        </tr>

        <tr>
            <td style="font-weight: bold">${Cores.launches[4] || " "}</td>
        </tr>
    </table>`

}
