//promises example
function display(some){
    document.getElementById("res").innerHTML=some;
}
function display1(some){
    document.getElementById("res1").innerHTML=some;
}
function display2(some){
    document.getElementById("res2").innerHTML=some;
}
let my_promise = new Promise(function(myResolve,myReject){
    let x = 9;
    if(x==0){
        myResolve("OK");
    }else{
        myReject("Not OK");
    }
});
my_promise.then(
    function(value){display(value);},
    function(error){display(error);}
);

//For Timeout fuctions
let my_promise1 = new Promise(function(myResolve){
    setTimeout(function(){myResolve("Hi Shwetha")},2000);
});
my_promise1.then(
    function(value){display1(value);},
);

let my_promise3 = new Promise(function(myResolve,myReject){
    let req = new XMLHttpRequest();
    req.open("GET","car.html");
    req.onload=function(){
        if(req.status==200){
            myResolve(req.response);
        }else{
            myReject("File not found!!");
        }
    };
    req.send();
});
my_promise3.then(
    function(value){display2(value);},
    function(error){display2(error);},
)

function display3(some){
    document.writeln(some);
}
//Async functions
async function func1() {
    return "hello";
}
func1().then(
    function(value){display3(value);},
);
//both are same
function myFunction(){
    return Promise.resolve("Hello");
}
myFunction().then(
    function(value){display3(value);},
)
document.writeln(func1()+"<br/>");
document.writeln(myFunction()+"<br/>");

async function func2() {
    let promis = new Promise(function(resolve,reject){
        resolve("Hiii");
    });
    //document.writeln(await promis);
    //return "shwetha";
    return await promis;
}
func2().then(
    function(value){display3(value);},
);

async function func3(){
    let promis1 = new Promise(function(resolve,reject){
        setTimeout(function(){resolve("Good Day!!");},2000);
       // reject("error");
    });
    return await promis1;
}
func3().then(
    function(value){display3(value);},
    function(error){display3(error);},
);

async function func4() {
    let promis2 = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open("GET","car.html");
        req.onload=function(){
            if(req.status==200){
                resolve(req.response);
            }else{
                reject("Not found");
            }
        };
        req.send();
    });
    //document.writeln(await promis2);
    document.getElementById("res5").innerHTML=await promis2;
}
func4();