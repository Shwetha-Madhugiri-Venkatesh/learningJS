/*Functions*/

//1. Function declaration
function function1(a,b){
    return a%b;
}
document.writeln(function1(5,2)+"<br/>");

//2.Function as Expressions
const x = function (name) {return name;};//using const is better, to avoid the modification of function
document.writeln(x("shwetha")+"<br/>");

//3.Function() constructors
const function2 = new Function("a","b","return a+b");
document.writeln(function2(3,4)+"<br/>");

//4. Function Hoisting 
document.writeln(function3("shwetha",100));//In javascript both variables and fuctions are hoisted
function function3(name, marks){
    return name+" obtained "+marks+" marks.<br/>";
}

//5.self-invoking functions
document.writeln((function (){
    return "hello<br/>";
})());

//6. Functions as values
let y = function1(4,10);
document.writeln(y+'<br/>');

//7.Fuctions as objects
document.writeln(typeof func_obj+"<br/>");
//arguements.length property
function func_obj(a,b){
    return arguments.length;
};
document.writeln(func_obj(2,4)+"<br/>");

//toString() method
document.writeln(func_obj.toString()+"<br/>");

//8. Arrow functions
const z = (x,y)=>x-y;//omit return and curly braces only when single line statement is there.
document.writeln(z(4,2)+"<br/>");

//Arrow functions can not be hoisted
//document.writeln(p("shwetha")+"<br/>");
//const p = (full_name)=>{return full_name};//will throw error

/*Function parameters*/

//1.Parameter rules
//i.do not specify the type
function function4(cloth,num){
    return "we have "+cloth+" in "+num+" numbers.<br/>";
}
//ii.do not check the type of arguements passed
document.writeln(function4("shirt",100)+"<br/>");//correct type
document.writeln(function4(100,"shirt")+"<br/>");//wrong type but no error
//iii.do not check the number of arguements passed
document.writeln(function4("100")+"<br/>");

//2. default parameters
function func(x,y){
    if(y==undefined){
        y="shwetha";
    }
    return "the id "+x+" is "+y;
}
document.writeln(func(100)+'<br/>');

//3. default values
//the above can be,...
function func1(x,y="shwetha"){
    return "the id "+x+" is "+y;
}
document.writeln(func1(100)+"<br/>");
//we can even overwrite the values
document.writeln(func(100,"manu")+"<br/>");
document.writeln(func1(200,"akash")+"<br/>");

//4.function rest parameter
function add(...arg){
    let sum =0;
    for(let i=0;i<arg.length;i++){
        sum+=arg[i];
    }
    return sum;
}
document.writeln(add(1,2,3,4,5,6,7,8,9)+"<br/>");

//5.the Arguement object
function max(){
    let max = arguments[0];
    for(let x of arguments){//here if use in , output is 2, but idf we use of ,the output is 3
        if(x>max){
            max=x;
        }
    }
    // for(let x in arguments){
    //     document.writeln(x+" / "+"<br/>");//here the arguements object = {0:1, 1:2, 2:3}
    // }
    return max;
}
document.writeln(max(1,2,3)+"<br/>");
document.writeln(max(-1,4,6)+"<br/>");
document.writeln(max(-1,-4,-6)+"<br/>");

//JS Function Invocation

//Invoking as function
document.writeln(function1(5,10)+"<br/>");

//the global object
function global(){
    return this;
}
document.writeln(global()+"<br/>");

//Invoking as the method
const obj1 = {
    name:"shwetha",
    full_name:function (){
        document.writeln(this);
        return this.name;
    },
}
document.writeln(obj1.full_name()+"<br/>");

//invoking as the constructor
function construct(name,address){
    this.name=name;
    this.address=address;
}
const obj = new construct("shwetha","hoodi");
document.writeln(obj.name+" /" +obj.address+"<br/>");

//fuction call()
const obj2 = {
    // full_Name: function(){
    //     return this.name;
    // }
    full_Name:function(a,b){
        return "the name "+this.name+" "+a+" "+b;
    }
}
const obj3 ={
    name:"shwetha",
}
const q = obj2.full_Name.call(obj3,5,10);
document.writeln(q+"<br/>");

//function apply()

//the difference is in apply, the arguements are taken in array format
const m = obj2.full_Name.apply(obj3,[5,10]);
document.writeln(m+"<br/>");

//function bind()
//this is used to prevent loosing this
const obj4 = {
    first:"shwetha",
    this_fun:function(){
        document.writeln(this.first+"<br/>");
    },
}
//setTimeout(obj4.this_fun, 3000);//gives undefined so we use bind
let res = obj4.this_fun.bind(obj4);
//setTimeout(res, 3000);

//function closures
//used when we dont want to initiate the variables outside
function counter(){
    let count =0;
    return {
        count_func: function(){
            count++;
            return count;
        }
    };
}
let res1 = counter();
res1.count_func();
res1.count_func();
res1.count_func();
document.writeln(res1.count_func()+"<br/>");