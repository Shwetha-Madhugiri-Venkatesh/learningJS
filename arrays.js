const arr = [
	{name:'lll'},
	{name:'kk'},
	{name:'rr'},
];
document.writeln(arr.toString());
document.writeln(arr.sort());
for(let x in arr){
    document.writeln(arr[x].name);
}
arr.push(1);
document.writeln(arr);
arr[5]="hi";
document.writeln(arr);
document.writeln(Array.isArray(arr));
document.writeln(arr instanceof Array);
