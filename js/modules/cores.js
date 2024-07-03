
export const getAllCoresId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${id}`)
    let data = await res.json();
    return data;
}

export const getAllCores = async (page , limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    
    return data;
}



export const tableCores = async (Cores) => {
    let information__table__1 = document.querySelector(".section__information__1");
    information__table__1.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("table__Cores");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Block";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Cores.block}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Reuse Count";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Cores.reuse_count}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Rtls Landings";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Cores.rtls_landings}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Asds Attempts";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Cores.asds_attempts}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Asds Landings";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Cores.asds_landings}`;
    div5.append(span5, strong5);



    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "last Update";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${Cores.last_update}`;
    div6.append(span6, strong6);


    
    let div7 = document.createElement("div");
    let span7 = document.createElement("span");
    span7.textContent = "Launches";
    let strong7 = document.createElement("strong");
    strong7.textContent = `${Cores.launches[0]}`;
    div7.append(span7, strong7);


    
    let div8 = document.createElement("div");
    let span8 = document.createElement("span");
    span8.textContent = "Serial";
    let strong8 = document.createElement("strong");
    strong8.textContent = `${Cores.serial}`;
    div8.append(span8, strong8);

    let div9 = document.createElement("div");
    let span9 = document.createElement("span");
    span9.textContent = "Status";
    let strong9 = document.createElement("strong");
    strong9.textContent = `${Cores.status}`;
    div9.append(span9, strong9);


    div.append(div1, div2, div3, div4, div5, div6, div7, div8, div9);
    information__table__1.append(div);
};
