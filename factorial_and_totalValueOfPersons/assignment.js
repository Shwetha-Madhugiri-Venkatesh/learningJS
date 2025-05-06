// function factorial() {
//     let extract = {};
//     return {
//         next: function cal(num) {
//             console.log(extract);
//             let flag = false;
//             for (let x in extract) {
//                 if (num == x) {
//                     flag = true;
//                 }
//             }
//             if (flag) {
//                 console.log(extract[num]);
//             } else {
//                 let ans = 1;
//                 for (let x = 1; x <= num; x++) {
//                     ans *= x;
//                 }
//                 extract[num] = ans;
//                 console.log(ans);
//             }
//         }
//     };
// }
// let func = factorial();
// func.next(3);

// let obj = new Map();
// function fact(num) {
//     if (obj.get(num)) {
//         console.log(obj.get(num));
//     } else {
//         let ans = 1;
//         for (let x = 1; x <= num; x++) {
//             ans *= x;
//         }
//         obj.set(num,ans);
//         console.log(ans);
//     }
// }
// fact(3);
// fact(4);
// fact(3);

let arr = [
    {name:'Ramesh', value:355},
    { name: 'Sumesh', value: 155 },
    { name: 'Rajesh', value: 345 },
    { name: 'Ramesha', value: 655 },
    { name: 'Ramesh', value: 385 },
    { name: 'Rajesh', value: 305 },
    { name: 'Shree'},
 ];

let map ={};
arr.forEach((item)=>{
if(map[item.name]){
map[item.name]+=item.value;
}else{
map[item.name]=item.value||0;
}
});
console.log(map);