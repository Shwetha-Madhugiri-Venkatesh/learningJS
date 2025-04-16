//changing the inner text
document.getElementById("heading").innerHTML=" have a nice day!";
document.getElementById("im1").src="img2.webp";

function validate(){
    let val = document.forms["form1"]["name"].value;
    if(val!="bird"){
        alert("Recognise correctly!!!!Don't you have eyes!!");
        return false;
    }else{
        alert("Congratulations!, You proved your eye sight..");
    }
}

function test_res(){
    let inp = document.getElementById("my_name").value;
    if(inp == "Shwetha M V"){
        document.getElementById("res").innerHTML = "You are a true friend";
    }else{
        document.getElementById("res").innerHTML = "Don't you even know my name!!!";
    }
}

//changing the css style
document.getElementById("test").style.backgroundColor="green";

//Animations
function animation(){
    let id = null;
    const elem = document.getElementById("animate");
    let pos=0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 400){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.width=pos+"px";
            elem.style.height=pos+"px";
        }
    }
}


//onLoad and onunLoad events
function onload_func(){
    animation();
    let text="";
    if(navigator.cookieEnabled==true){
        text = "Cookies world";
    }
    else{
        text="load the page";
    }
    document.getElementById("onload_event").innerHTML=text;
    document.getElementsByTagName("body")[0].style.backgroundColor="pink";
}

function unload_func(){
    document.getElementsByTagName("body")[0].style.backgroundColor="green";
}

//oninput, onchange
function input_func(obj){
    obj.style.color="blue";
}

function change_func(){
    let x = document.getElementById("inp");
    x.value = x.value.toLowerCase();
}

//onmouseover()
function over_func(){
    document.getElementById("im1").src="img1.jfif";
}

function mouse_out(obj){
    obj.src="img2.webp";
}

//onmousedown
function down_func(obj){
    obj.innerHTML = "BYE BYE";
}

function up_func(obj){
    obj.innerHTML="click again!!!!";
}

//Event handling
//1. we can define more than one event handlers for one elements
document.getElementById("multi").addEventListener("click", function(){this.innerHTML="I am changed"});
document.getElementById("multi").addEventListener("mouseover",function(){this.style.backgroundColor="orange"});
document.getElementById("multi").addEventListener("mouseout", function(){this.style.backgroundColor="yellow"});

//bubbling events
document.getElementById("bubble_click").addEventListener("click", function(){document.getElementById("buble_img").src="img2.webp"},false);
document.getElementById("bubble").addEventListener("click",function(){alert("Are you sure")},false);
//capturing events
// document.getElementById("bubble_click").addEventListener("click", function(){document.getElementById("buble_img").src="img2.webp"},true);
// document.getElementById("bubble").addEventListener("click",function(){alert("Are you sure")},true);

//applying to window object
window.addEventListener("resize",window_func);
function window_func(){
    document.getElementById("window_change").innerHTML=Math.random();
}
document.getElementById("remove").addEventListener("click",function(){window.removeEventListener("resize",window_func)});

//DOM Navigation
//document.getElementById("first_child").innerHTML=document.getElementById("heading").firstChild.nodeValue;
document.getElementById("first_child").innerHTML=document.getElementById("heading").childNodes[0].nodeValue;
//document.getElementById("body_element").innerHTML=document.body.innerHTML;
// document.getElementById("Document_body").innerHTML=document.documentElement.innerHTML;
//document.getElementById("Document_body").innerHTML=document.getElementById("first_child").nodeType;
document.getElementById("Document_body").innerHTML=document.getElementById("first_child").firstChild.nodeType;//text node


//creating new node in HTML
let new_node = document.createElement("p");
let text_content = document.createTextNode("HI I AM NEW");
new_node.appendChild(text_content);
let div_ele = document.getElementById("DOM_nodes");
div_ele.appendChild(new_node);

// let div_elem = document.getElementById("bubble");
// let before = document.getElementById("bubble_click");
// div_elem.insertBefore(new_node,before)
//document.getElementById("text").remove();

let replace = document.createElement("p");
let replace_text = document.createTextNode("I AM REPLACED");
replace.appendChild(replace_text);
div_ele.replaceChild(replace,new_node);

