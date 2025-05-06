//Array Methods
const arr = ["shwetha","manu","manjula"];
document.writeln(arr+"<br/>");
document.writeln(arr.length+"<br/>");
document.writeln(arr.toString()+"<br>");
document.writeln(arr.at(-1)+"<br>"+arr.at(1)+"<br>");
const arr1=["apple","orange","mango"];
document.writeln(arr.join()+"<br>"+arr.join("@")+"<br>");
document.writeln(arr.pop()+" /"+arr +"<br>");
document.writeln(arr.push("Anjali")+"/"+arr+"<br>");
document.writeln(arr.shift()+" / "+arr+"<br/>");
document.writeln(arr.unshift("Akash")+" / "+arr+"<br/>");
document.writeln(arr.length+"<br/>");
arr[3]="Rakesh";
document.writeln(arr.length+"<br/>");
document.writeln(arr+"<br/>");
arr[arr.length]="Hari";
document.writeln(arr+"<br/>");
delete arr[4];
document.writeln(arr+"<br/>");
const arr2=arr.concat(arr1);
document.writeln(arr2+"<br/>");
document.writeln(arr.concat("Rushitha")+"<br>");
document.writeln(arr.length+"/"+arr2.length+"<br/>");
document.writeln(arr.join("*")+"<br/>");
document.writeln(arr2.join("*")+"<br/>");
document.writeln(arr+"/.../"+arr.copyWithin(3,0)+"/.../"+arr+"<br/>");//overwrites the array
document.writeln(arr2+"/..../"+arr2.copyWithin(4,0,3)+"/.../"+arr2+"<br/>");//overwrites the string
document.writeln(arr.length+"/"+arr2.length+"<br/>");
document.writeln(arr.join("*")+"<br/>");
document.writeln(arr2.join("*")+"<br/>");
const arr4=[[1,2],[1,2,[1,2,5]],1];
document.writeln(arr4.flat()+"<br/>");
const numArr=[1,2,3,4,5];
document.writeln(numArr.flatMap(x=>[x,x*5,x%2])+"<br/>");
arr1.splice(2,0,"hi","hi");//returns nothing but changes the array
document.writeln(arr+"<br/>");
//because of this overwrite problem we have toSpliced()
document.writeln(arr4+"<br/>");
document.writeln(arr4.toSpliced(2,1)+"<br/>");

document.writeln("hi");
const arr3 = ["shwetha",2,"manu","akash","manu"];
document.writeln(arr3.indexOf("manu")+"<br/>");
document.writeln(arr3.lastIndexOf("manu")+"<br/>");
document.writeln(arr3.includes(2)+"<br/>");
let a = arr3.find(find_func);
let b = arr3.findIndex(find_func);
let c = arr3.findLast(find_func);
let d = arr3.findLastIndex(find_func);
function find_func(value,index,array){
    return typeof value=="string";
}
document.writeln(a+"<br/>");
document.writeln(b+"<br/>");
document.writeln(c+"<br/>");
document.writeln(d+"<br/>");
arr3.sort();
document.writeln(arr3+"<br/>");
arr3.reverse();
document.writeln(arr3+"<br/>");
let e =arr3.toSorted();
document.writeln(arr3+"<br/>");
document.writeln(e+"<br/>");
let g = arr3.toReversed();
document.writeln(arr3+"<br/>");
document.writeln(g+"<br/>");
let arr5 = [1,2,3,9,5,3];
arr5.sort(function(a,b){return a-b});
document.writeln(arr5+"<br/>");
arr5.sort(function(a,b){return b-a});
document.writeln(arr5+"<br/>");
arr5.sort(function(){return 0.5-Math.random()});
document.writeln(arr5+"<br/>");
document.writeln(Math.min.apply(null,arr5)+"<br/>");
document.writeln(Math.max.apply(null,arr5)+"<br/>");

let arr6 = [
    {type:"shirt",cloth:"cotton",price:1000,},
    {type:"pant",cloth:"polyester",price:600,},
];
arr6.sort(function(a,b){return a.price-b.price});
for(let c of arr6){
    for(let [x,y] of Object.entries(c)){
        document.writeln(x+","+y+"<br/>");
    }
}
document.writeln("<br/><br/><br/>");
arr6.sort(function(a,b){return b.price-a.price});
for(let c of arr6){
    for(let [x,y] of Object.entries(c)){
        document.writeln(x+","+y+"<br/>");
    }
}
document.writeln("<br/><br/><br/>");
arr6.sort(function(a,b){
    let a_low = a.type.toLowerCase();
    let b_low = b.type.toLowerCase();
    if(a_low<b_low) {return -1};
    if(a_low>b_low) {return 1};
    return 0;
});
for(let c of arr6){
    for(let [x,y] of Object.entries(c)){
        document.writeln(x+","+y+"<br/>");
    }
}
document.writeln("<br/><br/>");
//forEach
let text = "";
arr5.forEach(myFunction);
function myFunction(value,index,array){
    text+=value+" ";
}
document.writeln(text);

document.writeln("<br/><br/>");
//map()
let map_method = arr5.map(my_Function);
function my_Function(value,index,array){
    return value*10;
}
let text1 = "";
map_method.forEach(myFunction1);
function myFunction1(value,index,array){
    text1+=value+" ";
}
document.writeln(text1);
document.writeln("<br/><br/>");
//flatmap
let falt_method = map_method.flatMap(m => [m,m-2]);
// function flat_func(value,index,array){
//     return value+2;
// }
let text2 = "";
falt_method.forEach(myFunction2);
function myFunction2(value,index,array){
    text2+=value+" ";
}
document.writeln(text2+"<br/>");

//filter
let filtered = arr5.filter(filter_func);
function filter_func(value,index,array){
    return value >= 5;
}
let text3 = "";
filtered.forEach(myFunction3);
function myFunction3(value,index,array){
    text3+=value+" ";
}
document.writeln(text3+"<br/>");


//reduce()
let res = arr5.reduce(reduce_func,100);
function reduce_func(sum,value,index,array){
    return sum+value;
}
document.writeln(res+"<br/>");

//every()
let every_ex = arr5.every(every_func);
function every_func(value,index,array){
    return value > 10;
}
document.writeln(every_ex+"<br/>");
arr5.push(11);

//some()
let some_ex = arr5.some(some_func);
function some_func(value,index,array){
    return value>10;
}
document.writeln(some_ex+"<br/>");

//Array.from();
document.writeln(Array.from("shwetha")+"<br/>");

//keys()
let keys_arr = arr4.keys();
for(let c of keys_arr){
    document.writeln(c+" ");
}
document.writeln("<br/><br/>");
//entries
let entry = arr4.entries();
for(let x of entry){
    document.writeln(x+"<br/>");
}
document.writeln("<br/><br/>");
//with() overwrites the postion
let new_arr4 = arr4.with(1,"shwe");
for(let x of new_arr4){
    document.writeln(x+"<br/>");
}
document.writeln("<br/><br/>");
//...spread
let combine = [...arr5,...arr4];
for(let x of combine){
    document.writeln(x+"<br/>");
}
