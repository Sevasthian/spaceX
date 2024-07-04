// export const getCompany = async ()=>{
//     let res = await fetch(`https://api.spacexdata.com/v4/company`)
//     let data = await res.json();
//     return data;
// }
import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getCompany = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();
    console.log(data);
    return data;
}

export const informationCompany = async (Company) =>{

    let linksCompany = document.querySelector("#description__item")
    linksCompany.innerHTML = /*html*/`

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
        width: 135%
    }

    #infoCompany{
        margin-bottom: 20px
    }

    #headquarters{
        margin: 20px 0px 20px 0px
    }

    </style>

    <h2 id="infoCompany">Links</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Website: </b> ${Company.links.website} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>Twitter: </b> ${Company.links.twitter} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>Elon twitter: </b> ${Company.links.elon_twitter} </p>
        </div>

    </div>

    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">Sumary</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table>
        <tr>
            <td id="sumary" style="font-weight: bold">${Company.summary}</td>
        </tr>

    </table>
    
    <h2 id="headquarters">Headquarters</h2>

    <div class="property__box">

        <div class="item__container">
            <i class="bi bi-youtube"></i>
            <p><b>Adress: </b> ${Company.headquarters.address} </p>
        </div>

        <div class="item__container">
            <i class="bi bi-fire"></i>
            <p><b>City: </b> ${Company.headquarters.city} </p>
        </div>
        
        <div class="item__container">
            <i class="bi bi-check2-square"></i>
            <p><b>State: </b> ${Company.headquarters.state} </p>
        </div>

    </div>`
    

    let imageCompany= document.querySelector("#section__image")
    imageCompany.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    #image__company__bx{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
    }

    #image__company__bx img{

        width: 60%;
        overflow: hidden;
    }

    </style>

    <div id="image__company__bx">
        <img style="width: auto; height: 300px;" src="https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg" referrerpolicy = "no-referrer" alt="">
    </div>`

    let generalInformationSpaceX = document.querySelector("#information__2")
    generalInformationSpaceX.innerHTML = /*html*/`

    <style>    
        
    .table__property{

        width: 90%;
        height: auto;
        margin-bottom: 15px;
      
    }

    h3{
        padding: 0
    }

    .title{
      
        border-radius: 15px 15px 0px 0px;
        background-color: #1d1f38;
        color: #ffff;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #55588a;
        padding: 5px
    }
      
    .value{
        background-color: #55588a;
        border-radius: 0px 0px 15px 15px;
        color: #ffff;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px
      
    } 
    </style>


    <div class="table__property">
    <div class="title">
        <h3>Founder</h3>
    </div>
    <div class="value">
        <p>${Company.founder}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Founded</h3>
    </div>
    <div class="value">
        <p>${Company.founded}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Employees</h3>
    </div>
    <div class="value">
        <p>${Company.employees}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>CEO</h3>
    </div>
    <div class="value">
        <p>${Company.ceo}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>CTO</h3>
    </div>
    <div class="value">
        <p>${Company.cto}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>COO</h3>
    </div>
    <div class="value">
        <p>${Company.coo}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>ID</h3>
    </div>
    <div class="value">
        <p>${Company.id}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Vehicles</h3>
    </div>
    <div class="value">
        <p>${Company.vehicles}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Launch sites</h3>
    </div>
    <div class="value">
        <p>${Company.launch_sites}</p>
    </div>
    </div>`

}

