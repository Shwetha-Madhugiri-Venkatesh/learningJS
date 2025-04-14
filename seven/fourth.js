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

function message(){
    return "hi";
}
export default message;