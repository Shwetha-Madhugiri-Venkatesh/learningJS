document.getElementById("heading").innerText="shwetha";
document.getElementById("imagebtn").onclick= function() {
    document.getElementById("image1btn").style.fontSize="13px";
    document.getElementById("img").src="img1.jpeg";
    document.getElementById("imagebtn").style.fontSize="20px";
}
function myFunction(){
    document.getElementById("imagebtn").style.fontSize="13px";
    document.getElementById("img").src="img.jpg";
    document.getElementById("image1btn").style.fontSize="20px";
}
//document.getElementsByClassName("firstdiv")[0].style.visibility="hidden";
document.getElementById("div-para").style.display="block";
//document.getElementsByClassName("firstdiv")[0].innerHTML="<h2>HI</h2>";
//document.write(5+10);
function add(){
    var result = 10+5;
    const style = document.createElement("style");
    style.innerHTML = `
        #res::after {
            content: "${result}";
            color: black;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}
alert("Welcome to my first JavaScript page");
console.log("Welcome to my first JavaScript page");
console.log(myName);//Hoisted
var myName="Shwetha";
console.log(myName);
var myName;
console.log(myName);
myName="Manu";
console.log(myName);
//console.log(x); can not be hoisted
let x=10;
//let myName="shwetha";
//var x ; can not reuse let name
//console.log(myName);can not reuse the var name
console.log(x);
//let x; can not redeclare
x=20;
console.log(x);
//console.log(y); can not be hoisted
const y=20;
//let y; can not reuse const name
//var y; can not reuse const name
//const x; can not reuse let name
//const myName; can not reuse var name
console.log(y);
//const y; can not redeclare
//y=30; can not reassign
//const z; must initialize the const
const arr = ["shwetha","manu"];
arr[0]="akash";
arr.push("rakesh");
console.log(arr);
const obj={name:"shwetha",age:21};
obj.name="manu"
console.log(obj);