let num;
function input_served(){
    num = document.getElementById("inp").value;
    console.log(num);
    for(let i=0;i<num;i++){
        let btn_container = document.getElementById("btns");
        let btn = document.createElement("button");
        let text = document.createTextNode(i+1);
        let ran = Math.floor((Math.random()*200)+100);
        let ran1 = Math.floor((Math.random()*200)+100);
        let ran2 = Math.floor((Math.random()*200)+100);
        btn.appendChild(text);
        btn.setAttribute("id",`btn${i+1}`);
        btn.setAttribute("class","btn");
        btn.setAttribute("onclick",`fill(${i+1});`);
        btn.setAttribute("style",`background-color:rgb(${ran2},${ran1},${ran})`);
        btn_container.appendChild(btn);
    }
}
let inner_div = document.getElementById("inner");
let inner_height=inner_div.offsetHeight;
function fill(index){
    inner_height=0;
    let element = document.getElementById("bottle");
    let val = element.offsetHeight;
    let div_hieght = val/num;
    inner_height+=div_hieght*(index);
    inner_div.setAttribute("style",`height:${inner_height}px;`);
}
