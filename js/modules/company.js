// export const getCompany = async ()=>{
//     let res = await fetch(`https://api.spacexdata.com/v4/company`)
//     let data = await res.json();
//     return data;
// }
export const getAllCompanyId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/${id}`)
    let data = await res.json();
    return data;
}
export const getAllCompanyQuery = async (page , limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config)
    let data = await res.json();
    console.log(data);
    
    return data;
}
export const getAllCompany = async ()=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/`)
    let data = await res.json();
    return data;

}





export const tableCompany1 = async (Company)=>{

    let information__table__1 = document.querySelector("#section__information__1");
    information__table__1.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Headquarters"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__company_1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Address"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Company.headquarters.address}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "City"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Company.headquarters.city}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "State"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Company.headquarters.state}`
    div3.append(span3, strong3)

    


    div.append(div1, div2, div3)
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