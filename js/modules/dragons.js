
export const getAllDragonsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    let data = await res.json();
    return data;
}

export const getAllDragons = async (page , limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();
    console.log(data);
    
    return data;
}



export const tableDragons1 = async (Dragons) => {
    let information__table__1 = document.querySelector("#description__item");
    information__table__1.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Heat Shield"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Material";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.heat_shield.material}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Size Meters";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.heat_shield.size_meters}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Temp Degrees";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Dragons.heat_shield.temp_degrees}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Dev Partner";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Dragons.heat_shield.dev_partner}`;
    div4.append(span4, strong4);


    div.append(div1, div2, div3, div4);
    information__table__1.append(div);
};



export const tableDragons2 = async (Dragons) => {
    let information__table__2 = document.querySelector("#description__item");
    information__table__2.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Launch Payload Mass"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Kg";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.launch_payload_mass.kg}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Lb";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.launch_payload_mass.lb}`;
    div2.append(span2, strong2);

    div.append(div1, div2);
    information__table__2.append(div);
};



export const tableDragons3 = async (Dragons) => {
    let information__table__3 = document.querySelector("#description__item");
    information__table__3.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Launch Payload Vol"
    let hr = document.createElement("hr");
    information__table__3.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Cubic Meters";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.launch_payload_vol.cubic_meters}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Cubic Feet";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.launch_payload_vol.cubic_feet}`;
    div2.append(span2, strong2);

    div.append(div1, div2);
    information__table__3.append(div);
};


export const tableDragons4 = async (Dragons) => {
    let information__table__4 = document.querySelector("#description__item");
    information__table__4.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Return Payload Mass"
    let hr = document.createElement("hr");
    information__table__4.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Kg";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.return_payload_mass.kg}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Lb";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.return_payload_mass.lb}`;
    div2.append(span2, strong2);

    div.append(div1, div2);
    information__table__4.append(div);
};


export const tableDragons5 = async (Dragons) => {
    let information__table__5 = document.querySelector("#description__item");
    information__table__5.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Return Payload Vol"
    let hr = document.createElement("hr");
    information__table__5.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Cubic Meters";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.return_payload_vol.cubic_meters}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Cubic Feet";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.return_payload_vol.cubic_feet}`;
    div2.append(span2, strong2);

    div.append(div1, div2);
    information__table__5 .append(div);
};

pressurized_capsule


export const tableDragons6 = async (Dragons) => {
    let information__table__6 = document.querySelector("#description__item");
    information__table__6.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Return Payload Vol"
    let hr = document.createElement("hr");
    information__table__6.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__Dragons1");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Cubic Meters";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.return_payload_vol.cubic_meters}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Cubic Feet";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.return_payload_vol.cubic_feet}`;
    div2.append(span2, strong2);

    div.append(div1, div2);
    information__table__6 .append(div);
};
