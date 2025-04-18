let element = document.getElementById("ele");
element.addEventListener("mouseover",function(){
    this.style.transform="rotate(90deg) translate(100px,0)";
    this.style.transition="transform 1s";
});
element.addEventListener("mouseout",function(){
    let new2 = clone(this);
    new2.style.transform="rotate(90deg) translate(100px,0)";
    new2.style.transition="transform 1s";
});
function clone(obj){
    let parent = document.getElementById("container");
    let new_ele =obj.cloneNode(true);
    parent.appendChild(new_ele);
    return new_ele;
}

// let obj = {
//     name:"shwetha",
//     age:12,
// }
// obj[Symbol.iterator]=function(){
//     let done=false;
//     return {
//         next: function(){
//             //console.log(obj.age);
//             obj.age+=10;
//             //console.log(obj.age);
//             return {value:[obj.age,obj.name],done:done++};
//         }
//     };
// }
// for(let x of obj){
//     console.log(x);
// }

class iter{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
        *[Symbol.iterator](){
            yield this.name;
            this.age+=10;
            yield this.age;
        }
}
let obj2 = new iter("shwetha",12);
let obj3 = new iter("Hari",13);
for(let x of obj3){
    console.log(x);
}