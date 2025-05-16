let arr = [1,2,3,4];
let obj={name:"shwetha",marks:123};
//let spread = [...arr,...obj];//only iterables can use this
let spread = {...arr,...obj};
console.log(spread);
let concat_ = arr.concat(obj);
console.log(concat_);

let set_ex = new Set([1,2]);
let entry = set_ex.entries();
for(let x of entry){
    console.log(x);
}