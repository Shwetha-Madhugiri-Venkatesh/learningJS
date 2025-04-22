let num;
function input_served(){
    num = document.getElementById("inp").value;
    let btn_container = document.getElementById("btns");
    if(btn_container.children.length!=0){
        return;
    }
    for(let i=0;i<num;i++){
        btn_container = document.getElementById("btns");
        let btn = document.createElement("button");
        let text = document.createTextNode(i+1);
        btn.appendChild(text);
        btn.setAttribute("id",`btn${i+1}`);
        btn.setAttribute("class","btn");
        btn.setAttribute("onclick",`fill(${i+1});`);
        btn_container.appendChild(btn);
    }
}
let inner_div = document.getElementById("inner");
let inner_height=inner_div.offsetHeight;
let elem;
let count;
function fill(index){
    for(let i=1;i<count+1;i++){
        elem = document.getElementById(`btn${i}`);
        elem.removeAttribute("style");
    }
    count=0;
    for(let i=1;i<index+1;i++){
        count++;
        elem = document.getElementById(`btn${i}`);
        elem.setAttribute("style",`background-color:pink`);
    }
    inner_height=0;
    let element = document.getElementById("bottle");
    let val = element.offsetHeight;
    let div_hieght = val/num;
    inner_height+=div_hieght*(index);
    inner_div.setAttribute("style",`height:${inner_height}px;`);
}

function clear_window(){
    window.location.reload(true);
}
