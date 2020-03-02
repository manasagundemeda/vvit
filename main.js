fetch("data.json")
.then((response)=>{
     return response.json();
}).then((data)=>{
    //console.log(data);
    display_info(data.basics)
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");

    //Heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;

    bodyElement.append(card);
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let m=document.createElement("h2");m.textContent=info.role;
    card.append(m);

    let n=document.createElement("a");
    n.href="mailto:"+info.email;
    n.textContent=info.email;
    card.append(n);

    let br=document.createElement("br");
    card.append(br);
    

    let p=document.createElement("a");
    p.href="tel:"+info.mobile;
    p.textContent=info.mobile;
    card.append(p);

    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);

    let p1=document.createElement("h2");p1.textContent=info.education;
    card.append(p1);
}