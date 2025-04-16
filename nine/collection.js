function change(){
let p_tag = document.getElementsByTagName("p");
for(let x of p_tag){
    x.style.color="blue";
}
}

function query(){
    let h5_tags = document.querySelectorAll("h5");
    for(let x of h5_tags){
        x.style.color="red";
    }
}

let new_para=document.createElement("p");
let new_para_text = document.createTextNode("I am new");
new_para.appendChild(new_para_text);
let div_para=document.getElementById("paras");
div_para.appendChild(new_para);

let new_h5 = document.createElement("h5");
let new_h5_content = document.createTextNode("I AM NEW");
new_h5.appendChild(new_h5_content);
let div_h5 = document.getElementById("h5s");
div_h5.appendChild(new_h5);