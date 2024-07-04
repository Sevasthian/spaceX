import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCrewId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
    let data = await res.json();
    return data;
}

export const informationCrew = async (Crew) =>{
    let firstTableCrew = document.querySelector("#country_rocket")
    firstTableCrew.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>Agency</h3>
        </div>
        <div class="value">
            <p>${Crew.agency}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Launches</h3>
        </div>
        <div class="value">
            <p>${Crew.launches}</p>
        </div>
        </div>`

    let secondTableCrew = document.querySelector("#sucess_rate_rocket")
    secondTableCrew.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
        <div class="table__property">
            <div class="title">
                <h3>Status</h3>
            </div>
            <div class="value">
                <p>${Crew.status}</p>
            </div>
            </div>
            <div class="table__property">
            <div class="title">
                <h3>ID</h3>
            </div>
            <div class="value">
                <p>${Crew.id}</p>
            </div>
            </div>
    `

    let thirdTableCrew= document.querySelector("#section__image")
    thirdTableCrew.innerHTML = /*html*/`
    <style>

        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            color: var(--color--five)
        }

        #section__image{

            gap: 10px;
            margin-top: 90px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        
        .wikipedia__bx{
            
            margin-top: 20px;
            width: 100%;
            border: 1px solid #55588a;
            border-radius: 10px;
        }
        
        .title__wikipedia{
            gap: 5px;
            display: flex;
            justify-content: center;
            background-color: #1d1f38;
            padding: 5px;
            border-radius: 10px 10px 0px 0px;
            width: 100%
            
        }

        h2{
            font-size: 20px;
        }

        i{
            font-size: 20px;
        }
        
        .value__wikipedia{
            display: flex;
            justify-content: center;
            padding: 7px;
        }


    </style>

        <div class="wikipedia__bx">
            <div class="title__wikipedia">
                <i class="bi bi-wikipedia"></i>
                <h2>Wikipedia</h2>
            </div>
            <div class="value__wikipedia">
                <a href="${Crew.wikipedia}">Click here to more information</a>
            </div>
        </div>
    
        <img style="width: auto; height: 300px;" src="${Crew.image}" referrerpolicy = "no-referrer" alt="">`
    }    

    