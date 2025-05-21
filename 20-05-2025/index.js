// async function sayHello(){
//     return "Hello";
// }
// sayHello().then(
//     function(value){display(value);}
// );//second
// function display(val){
//     console.log(val);
// }

// //asyn
// function hi(){
//     console.log("hi");
// }
// //setInterval(hi,3000);//fourth

// function good(){
//     console.log("good");
// }
// good();//first
// let num=1;
// let myProm = new Promise(prom_func);
// function prom_func(ok,notok){
//     if(num==0){
//         ok("Its Zero");
//     }else{
//         notok("Its a value!");
//     }
// }
// myProm.then(
//     function(val){display(val);},
//     function(error){display(error);}
// );//third
// let obj;
// async function fetchData() {
//   const response = await fetch("my.txt");
//   const data = await response.json();
//   obj=data;
//   console.log(data);
// }
// Object.preventExtensions(obj);
// function hello(){
//     console.log("hello");
// }
// fetchData();
// hello();//here it is executed irrespective of fetchdata()

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    console.log(this);
    console.log(person.firstName + " " + person.lastName);
  }
}
setTimeout(person.display,1000);