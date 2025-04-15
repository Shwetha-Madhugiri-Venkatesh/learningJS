document.writeln("classes"+"<br/>");
//const obj9 = new class1("anu",22,200); can not be hoisted
class class1{
    constructor(nam,ag,mark){
        this.name = nam;
        this.age = ag;
        this.marks=mark;
    }
    get _marks(){
        return this.marks;
    }
    set _marks(x){
        this.marks=x;
    }
    static display(){
        return "hello";
    }
    static display1(f){
        return "hello "+f.name
    }
    display_marks(){
        return this.marks;
    }
}
const obj8 = new class1("anjali",22,200);
document.writeln(obj8._marks+"<br/>");
obj8._marks=300;
document.writeln(obj8._marks+"<br/>");

document.writeln(class1.display()+"<br/>");
document.writeln(class1.display1(obj8)+"<br/>");
document.writeln(obj8.display_marks()+"<br/>");

//class inheritence
class inherit extends class1{
    constructor(mark,colleg){
        super(mark);
        this.college = colleg;
    }
    show(){
        return this.display_marks()+" is the marks obtained by  who is from "+this.college;
    }
}
const obj10 = new inherit(100,"knsit");
document.writeln(obj10.show()+"<br/>");

//callbacks
function inner(name){
    return name;
}
function outer(name,call){
   return call(name)+"<br/>";
}
document.writeln(outer("shwetha",inner));

//JS Asynchronus
// setTimeout(function(){document.writeln(async());},1000);
// function async(){
//     return "manu_shwetha";
// }

function date(){
    let curr = new Date();
    document.getElementById("clock").innerHTML=curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds();
}
setInterval(date,1000);
document.writeln("<br/><br/>");
//HTML DOM
let c = document.getElementById("clock");
document.writeln(c.innerHTML+"<br/>");
// for(let x in c){
//     document.writeln(x+'<br/>');
// }
// for(let x in document){
//     document.writeln(x+'<br/>');
// }
document.writeln("<br/><br/>");
document.writeln(typeof c+"<br/>");
let s = document.getElementsByTagName("p");
document.writeln(s[0].innerHTML+"<br/>");//for this we have to add [0] to access the content
let t = document.getElementById("outer");
document.writeln(t.getElementsByTagName("p")[0].innerHTML+"<br/>");//only getElementsby tagname will work
let  w = document.querySelectorAll("p.class_name");
document.writeln(w[0].innerHTML+"/ and /"+w[1].innerHTML+"<br/>");
let r = document.forms["first_form"];
document.writeln(typeof r+"<br/>");
let text="";
for(let x =0;x<r.length;x++){
    text+=r.elements[x].value+"<br/>";
}
document.writeln(text);