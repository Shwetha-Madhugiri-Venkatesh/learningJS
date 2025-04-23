let num;
let parent_div = document.getElementById("parent");
let div_con = document.createElement("div");
function submit(){
    num = document.getElementById("inp").value;
    if(div_con.children.length!=0){
        parent_div.removeChild(div_con);
    }
    div_con = document.createElement("div");
    div_con.setAttribute("id","div_container");
    parent_div.appendChild(div_con);
    for(let x =0;x<num;x++){
        let div_ele = document.createElement("div");
        div_ele.setAttribute("id","divs");
        div_con.appendChild(div_ele);
    }
}