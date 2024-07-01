export const getAllRockets = async (page , limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config)
    let data = await res.json();
    console.log(data);
    
    return data;
}
export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}
export const getAllRocketEngineTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_sea_level": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_sea_level;
}
export const titleOfRockets = async(page) => {
    console.log(page);
    let options = {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            options : {
                page,
                limit : 1
            }     
        })
    };
    console.log(options);
    return fetch("https://api.spacexdata.com/v4/rockets/query", options)
    .then(data => {
        if (!data.ok) {
            throw new Error("Network response was not ok");
        }
        return data.json();
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    });
}
export const getAllRocketEngineThrustVacuumTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_vacuum": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_vacuum;
}
export const getRocketMassTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass;
}
export const getRocketPayloadWeightsTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
        
            "options": {
                "select": {
                    "name": 1,
                    "payload_weights": 1
                },
                "sort":{
                    "payload_weights.kg": "desc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs} = await res.json();
    let data = []
    docs.forEach(val => data.push(...val.payload_weights))
    data.sort((a,b) => b.kg - a.kg)
    let [maxPayloadWeightsRocket] = data;
    return maxPayloadWeightsRocket;
}
export const getRocketHeightTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "height": 1
                },
                "sort": {
                    "height.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height} = maxHeightRocket]} = await res.json();
    return height;
}


export const getRocketDiameterTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "diameter": 1
                },
                "sort": {
                    "diameter.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{diameter} = maxdiameterRocket]} = await res.json();
    return diameter;
}

export const getRocketSecondStageCompositeFairingDiameterTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.diameter": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[maxDiameterCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {diameter}}}} = maxDiameterCompositeFairingRocket
    return diameter;
}
export const getRocketSecondStageCompositeFairingHeightTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.height": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.height": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[maxHeightCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {height}}}} = maxHeightCompositeFairingRocket
    // console.log(height);
    return height;
}



//                       gallery of title

export const titleRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
}
export const images = async(flickr_images)=>{
    let  section__image = document.querySelector("#section__image");
    let divs = [];
    flickr_images.forEach(val =>{
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrenrpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
}
export const tableRocketColum1 = async (Rocket)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
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
export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
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

export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}

export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informRocketEngineThrustSeaLevel = async(rocket) => {
    try {
        let result = await getAllRocketEngineTotal();
        
        // Depuración: imprime el resultado de getAllRocketEngineTotal
        console.log('Resultado de getAllRocketEngineTotal:', result);

        // Asegúrate de que `result` contiene la propiedad `kN` y que es un número
        if (!result || typeof result.kN !== 'number') {
            console.error('getAllRocketEngineTotal no retornó un valor válido');
            return;
        }
        
        let { kN: totalKN } = result;
        console.log('Total KN:', totalKN);
        
        // Depuración: imprime el objeto rocket
        console.log('rocket:', rocket);

        // Asegúrate de que `rocket.engines.thrust_sea_level.kN` es un número
        if (!rocket.engines.thrust_sea_level || typeof rocket.engines.thrust_sea_level.kN !== 'number') {
            console.error('rocket.engines.thrust_sea_level.kN no es un número válido:', rocket.engines.thrust_sea_level.kN);
            return;
        }

        let thrust_sea_level_kN = rocket.engines.thrust_sea_level.kN;
        let porcentaje = (thrust_sea_level_kN * 100) / totalKN;
        console.log('Porcentaje calculado:', porcentaje);

        let div = document.createElement('div');
        div.classList.add("carousel__item");

        let divFirst = document.createElement('div');
        divFirst.classList.add("item__progress__bar");
        divFirst.style.cssText = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-three) ${porcentaje}%, transparent 0)`;

        let divFirstChildren = document.createElement('div');
        divFirstChildren.classList.add("progress__value");

        let strong = document.createElement('strong');
        strong.textContent = "Atmospheric acceleration";

        let smallFirst = document.createElement('small');
        smallFirst.textContent = `${porcentaje.toFixed(2)} %`;

        let smallLast = document.createElement('small');
        let kN = new Intl.NumberFormat('en-US').format(thrust_sea_level_kN);
        let lbf = new Intl.NumberFormat('en-US').format(rocket.engines.thrust_sea_level.lbf);
        smallLast.innerHTML = `${kN} kN <br> ${lbf} lbf`;

        divFirstChildren.append(strong, smallFirst, smallLast);
        divFirst.append(divFirstChildren);
        div.append(divFirst);

        let section__information__1 = document.querySelector("#section__information__1");
        if (section__information__1) {
            section__information__1.innerHTML = "";
            section__information__1.append(div);
        } else {
            console.error("El elemento #section__information__1 no se encuentra en el DOM");
        }
    } catch (error) {
        console.error('Error al obtener el empuje del motor cohete al nivel del mar:', error);
    }
};


export const informRocketEngineThrustVacuum = async(rocket) => {
    try {
        let result = await getAllRocketEngineThrustVacuumTotal();
        
        // Depuración: imprime el resultado de getAllRocketEngineThrustVacuumTotal
        console.log('Resultado de getAllRocketEngineThrustVacuumTotal:', result);

        // Asegúrate de que `result` contiene la propiedad `kN` y que es un número
        if (!result || typeof result.kN !== 'number') {
            console.error('getAllRocketEngineThrustVacuumTotal no retornó un valor válido');
            return;
        }
        
        let { kN: totalKN } = result;
        console.log('Total KN:', totalKN);
        
        // Depuración: imprime el objeto rocket
        console.log('rocket:', rocket);

        // Asegúrate de que `rocket.engines.thrust_vacuum.kN` es un número
        if (!rocket.engines.thrust_vacuum || typeof rocket.engines.thrust_vacuum.kN !== 'number') {
            console.error('rocket.engines.thrust_vacuum.kN no es un número válido:', rocket.engines.thrust_vacuum.kN);
            return;
        }

        let thrust_vacuum_kN = rocket.engines.thrust_vacuum.kN;
        let porcentaje = (thrust_vacuum_kN * 100) / totalKN;
        console.log('Porcentaje calculado:', porcentaje);

        let div = document.createElement('div');
        div.classList.add("carousel__item");

        let divFirst = document.createElement('div');
        divFirst.classList.add("item__progress__bar");
        divFirst.style.cssText = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-three) ${porcentaje}%, transparent 0)`;

        let divFirstChildren = document.createElement('div');
        divFirstChildren.classList.add("progress__value");

        let strong = document.createElement('strong');
        strong.textContent = "Speed in space";

        let smallFirst = document.createElement('small');
        smallFirst.textContent = `${porcentaje.toFixed(2)} %`;

        let smallLast = document.createElement('small');
        let kN = new Intl.NumberFormat('en-US').format(thrust_vacuum_kN);
        let lbf = new Intl.NumberFormat('en-US').format(rocket.engines.thrust_vacuum.lbf);
        smallLast.innerHTML = `${kN} kN <br> ${lbf} lbf`;

        divFirstChildren.append(strong, smallFirst, smallLast);
        divFirst.append(divFirstChildren);
        div.append(divFirst);

        let section__information__1 = document.querySelector("#section__information__1");
        if (section__information__1) {
            section__information__1.append(div);
        } else {
            console.error("El elemento #section__information__1 no se encuentra en el DOM");
        }
    } catch (error) {
        console.error('Error al obtener el empuje del motor cohete en vacío:', error);
    }
};




export const progressRocketWeight = async(Rockets)=>{
    let {kg} = await getRocketMassTotal();
    let conterDiv = [];
    [Rockets].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = "Rocket weight :";
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg
        ProgressFist.value = `${val.mass.kg}`;
        ProgressFist.textContent = `${val.mass.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressPayloadWeights = async(Rockets)=>{
    let {kg} = await getRocketPayloadWeightsTotal();
    let conterDiv = [];
    Rockets.payload_weights.forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `${val.name} :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg;
        ProgressFist.value = `${val.kg}`;
        ProgressFist.textContent = `${val.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketHeightTotal();
    let conterDiv = [];
    [Rockets.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket Height :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketDiameterTotal();
    let conterDiv = [];
    [Rockets.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket diameter :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingDiameterTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Diameter rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Height rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}