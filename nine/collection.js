
let p_tag = document.getElementsByTagName("p");
for (let x of p_tag) {
    x.style.color = "blue";
}



let h5_tags = document.querySelectorAll("h5");
for (let x of h5_tags) {
    x.style.color = "red";
}
//lengths before adding
console.log(p_tag.length);
console.log(h5_tags.length);

//lengths after adding
function change() {
    let new_para = document.createElement("p");
    let new_para_text = document.createTextNode("I am new");
    new_para.appendChild(new_para_text);
    let div_para = document.getElementById("paras");
    div_para.appendChild(new_para);
    console.log(p_tag.length);
}

function query() {
    let new_h5 = document.createElement("h5");
    let new_h5_content = document.createTextNode("I AM NEW");
    new_h5.appendChild(new_h5_content);
    let div_h5 = document.getElementById("h5s");
    div_h5.appendChild(new_h5);
    console.log(h5_tags.length);
}

document.writeln(null == null);
document.writeln(null === null);
document.writeln(undefined == undefined);
document.writeln(undefined === undefined);
document.writeln(NaN == NaN);
document.writeln(NaN === NaN);
document.writeln(typeof null);
document.writeln(typeof undefined);
document.writeln(typeof NaN);
// for(let x of null){
//     document.writeln(x);
// }
// for(let x in NaN){
//     document.writeln(x);
// }

for(let x in Array){
    document.writeln(x);
}
