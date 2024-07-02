

export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const serialCapsules = async(serial)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = serial;
}

export const getAllCapsules = async (page , limit)=>{
    let config = {
        headers:{
            "content-type" : "aplication/json"},
            method: "POST",
            body:  JSON.stringify({
                "options":{
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






export const tableCapsules = async (Capsules)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    // let h3 = document.createElement("h3");
    // h3.textContent = "Reuse Count"
    // let hr = document.createElement("hr");
    // section__information__container.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Reuse Count"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Capsules.reuse_count}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Water Landings"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Capsules.water_landings}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "land Landings"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Capsules.land_landings}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Tylast Updatepe"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Capsules.last_update}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Launches"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Capsules.launches[0]}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Status"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${Capsules.status}`
    div6.append(span6, strong6)


    let div7 = document.createElement("div");
    let span7 = document.createElement("span");
    span7.textContent = "Type"
    let strong7 = document.createElement("strong");
    strong7.textContent = `${Capsules.type}`
    div7.append(span7, strong7)




    div.append(div4, div1, div2, div3, div5, div6,div7)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}