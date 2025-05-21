//deep copy and shallow copy
let obj = {name:"shwetha",marks:{science:98}};
let obj1 = {...obj};
obj1.name="manu";
console.log(obj,obj1);
// the structure of obj and obj1 isFinite,
// obj={name:"shwetha",marks:{science:98}};
// obj1={name:"shwetha",marks:objreff};
//so if we change name, it behaves deep copy and if we change marks obj, it will behave shallow copy

let obj2 = structuredClone(obj);
let obj3 = JSON.parse(JSON.stringify(obj));
obj2.marks.science=120;
console.log(obj,obj2,obj3);

let a ={ 
name: 'Venky',
company: 'Itorizon',
age:24
}
 
let b ={ 
name: 'Venky',
company: 'Itorizon',
age:24
}

console.log(a==b,a===b);
let c = a;
console.log(a==c,a===c);
let d = structuredClone(a);
console.log(d==a,d===a);


console.log("map");
let m = new Map([[name,"shwetha"],["marks",100]]);
let m1 = new Map([[name,"shwetha"],["marks",100]]);
console.log(m==m1,m===m1);
let m2 = m;
console.log(m2==m,m2===m);
let m3 = structuredClone(m);
console.log(m3==m,m3===m);


console.log('set');
let s = new Set([1,2,3]);
let s1 = new Set([1,2,3]);
console.log(s==s1,s===s1);
let s2=s;
console.log(s2==s,s2===s);
let s3 = structuredClone(s);
console.log(s3==s,s3===s);

console.log("arrays");
let ar = [1,2,3];
let ar1=[1,2,3];
console.log(ar==ar1,ar===ar1);
ar2=ar;
console.log(ar2==ar,ar2===ar);
ar3=structuredClone(ar);
console.log(ar3==ar,ar3===ar);

console.log("strings");
let str = "shwetha";
let str1 = "shwetha";
console.log(str==str1,str===str1);
let str2 = str;

console.log("dates");
let date=new Date();
let date2 = new Date();
console.log(date==date2,date===date2);
let date3 = date;
console.log(date3==date,date3===date);

let n = null;
let n1 = "null";
console.log(n==n1,n===n1);

let n2 = undefined;
console.log(n==n2,n===n2);//true, false

let n3 =0;
console.log(n==n3,n===n3);

let n4 ="undefined";
console.log(n1==n4,n1===n4);

let n5 = "0";
let n6 = false;
console.log(n5==n6,n5===n6);//true,false

let str3 = "";
let str4 = new String("");
console.log(str3==str4,str3===str4);//true false

let arr =[];
let arrr = new Array();
console.log(arr==arrr,arr===arrr);//false false

let o={};
let o1= new Object();
console.log(o==o1,o===o1);//false false

let array = [{name:"shwetha",marks:98}];
let array1 = structuredClone(array);
array1[0].name="manu";
console.log(array,array1);