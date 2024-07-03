
export const getAllHistoryId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/history/${id}`)
    let data = await res.json();
    return data;
}

export const getAllHistory = async (page , limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();
    console.log(data);
    
    return data;
}



export const tableHistory = async (History) => {
    let information__table__1 = document.querySelector("#section__information__1");
    information__table__1.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("table__history");

    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Title";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${History.title}`;
    div1.append(span1, strong1);

    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Event Date (UTC)";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${History.event_date_utc}`;
    div2.append(span2, strong2);

    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Event Date (Unix)";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${History.event_date_unix}`;
    div3.append(span3, strong3);

    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Details";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${History.details}`;
    div4.append(span4, strong4);

    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Article";
    let a5 = document.createElement("a");
    a5.href = `${History.links.article}`;
    a5.textContent = "Read Article";
    a5.target = "_blank"; // Opens the link in a new tab
    div5.append(span5, a5);

    div.append(div1, div2, div3, div4, div5);
    information__table__1.append(div);
};
