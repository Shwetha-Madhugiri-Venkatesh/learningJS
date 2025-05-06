let arr = [{name:"shwetha"}];
let s = new Set(arr);
// document.writeln([...s][0].name);
// document.writeln(s.size);
// s.add(null);
// for(let x of s){
//     document.writeln(x);
// }
// let s_key = s.keys();
// for(let x of s_key){
//     document.writeln(x);
// }
// let s_val = s.values();
// for(let x of s_val){
//     document.writeln(x);
// }
// let s_entry = s.entries();
// for(let [x,y] of s_entry){
//     document.writeln(x);
// }
// let spread = [...s];
// document.writeln(spread);
// document.writeln(Array.isArray(spread));
// let spread_entry=[...s.entries()];
// for(let x of spread_entry){
//     document.writeln(x);
// }
// console.log([...s.entries()]);

// let map_ex = new Map(arr);
// console.log(map_ex);
// for(let x of map_ex){
//     document.writeln(x);
// }

let num =10;
let obj = {
    "shwetha":"name",
    age:num,
    10:"name",
    null:null,
    undefined:undefined,
    [{name:"shwetha"}]:"object",
}
obj[{name:"shwetha"}]="object1";
// document.writeln(Array.isArray([{name:"shwetha"}]));
// document.writeln(obj[{name:"shwetha"}]);
for(let [x,y] of Object.entries(obj)){
    document.writeln(x+" "+typeof x+" : "+y+" "+typeof y+"<br/>");
}
//so internally no matter whatever the key u give it is converted to string
//You can not leave key undefined
document.writeln("<br/><br/>");
let na=10;
let ob = {clg:"KNSIT"};
let map_ex1 = new Map([
    [na,"shwetha"],
    ["shwetha",num],
    [null,"null"],
    ["null",null],
    [undefined,"undefined"],
    ["undefined",undefined],
    [ob,10],
    [10,{clg:"RNSIT"}],
]);
for(let [x,y] of map_ex1.entries()){
    document.writeln(x+" "+typeof x+" : "+y+" "+typeof y+"<br/>");
}
document.writeln(map_ex1.get(ob));
document.writeln(typeof map_ex1);
document.writeln("<br/><br/>");
//document.writeln(map_ex1.get([object Object])); can not do it
//So in map datatypes are preserved
//you can leave key undefined
//we can use objects but not directly, we have to pass the reference

let obj_arr = [
    [1,{s_name:"shwetha",age:19}],
    [2,{nam:"manjula",age:15}],
    [3,{s_name:"manu",age:30}],
    [4,{cloth:"cotton",age:40}],
];
let map_obj = new Map(obj_arr);
let res = Map.groupBy(map_obj.values(),filtered);//res is a map
function filtered({age}){
    return age>20?"above 20":"below 20";
}
document.writeln(res);
document.writeln(typeof res.get("above 20"));
for(let x of res.get("below 20")){
    document.writeln(x.age);
}
// for(let x of map_ex1){
//     document.writeln(x);
// }
//The structure of res would be:
// res = [
//     ["above 20",{0:{s_name:"shwetha",age:19},1:{nam:"manjula",age:15}}],
//     ["below 20",{0:{s_name:"manu",age:30},1: {cloth:"cotton",age:40}}],
// ];

let obj_arr1 = [
    {s_name:"shwetha",age:19},
    {nam:"manjula",age:15},
    {s_name:"manu",age:30},
    {cloth:"cotton",age:40},
];
let res1 = Object.groupBy(obj_arr1,filtered);
//document.writeln(res1); error can not convert object to primitive data type, so it is object
for(let x of res1["below 20"]){//get() won't work
    document.writeln(x.age);
}
// res1 = {
//     "above 20":{0:{s_name:"shwetha",age:19},1:{nam:"manjula",age:15}},
//     "below 20":{0:{s_name:"manu",age:30},1: {cloth:"cotton",age:40}}
// };