//Implementing geoLocation
let text = document.getElementById("position");
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }catch(err){
        text.innerHTML=err;
    }
}
function showPosition(position){
    text.innerHTML="The latitude is: "+position.coords.latitude+"<br/>The longitude is: "+position.coords.longitude;
}

//Forms API

//checkValidity()
function check(){
    let inp_obj = document.getElementById("inp");
    if(!inp_obj.checkValidity()){
        document.writeln(inp_obj.validationMessage+"<br/><br/>");
        console.log(Object.entries(inp_obj.validity));
        for(let x in inp_obj.validity){
            document.writeln(x+":"+inp_obj.validity[x]+"<br/>");
        }
        document.writeln(inp_obj.willValidate);
    }else{
        document.writeln("Input is ok");
    }
}

// function history(){
//     //window.history.go(1);
//     window.history.go(-2);
// }

//local storage use
function strorage(){
localStorage.setItem("name","shwetha");
document.writeln(localStorage.getItem("name")+"<br/>");

sessionStorage.setItem("bio","I am shwetha");
document.writeln(sessionStorage.getItem("bio")+"<br/>");
}
//checking whether browser will support worker or not
if(typeof(Worker)!=="undefined"){
    document.writeln("Yes!Browser supports");
}else{
    document.writeln("No! sorry");
}

let w;
function start(){
    if(typeof(w)=="undefined"){
        w=new Worker("web_worker.js");
    }
    w.onmessage=function(event){
        document.getElementById("res").innerHTML=event.data;
    };
}
function stop(){
    w.terminate();
    w=undefined;
}

//Fetch API
// async function getData(file) {
//     let file_Object = await fetch(file);
//     let file_text = await file_Object.text();
//     document.getElementById("external").innerHTML=file_text;
// }
// getData("text.txt");

let file="text.txt";
fetch(file)
.then(x=>x.text())
.then(y=>document.getElementById("external").innerHTML=y);
