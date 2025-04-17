//JSON Example
let obj = {
    name:"shwetha",
    age:21,
    marial_status:false,
    children:null,
    skills:{java:"nice",
        python:"mediocore",
        c:4,
    },
    nick_names:["chubby","ammu","shwethu"],
    DOB:"19-04-2003",
    Husband:undefined,
    task:function(){
        return "programming";
    },
}

let JSON_format=JSON.stringify(obj);//eliminated function and husband properties
document.writeln(JSON_format+"<br/>");
let obj2={
    name:"shwetha",
    age:21,
    marial_status:false,
    children:null,
    skills:{java:"nice",
        python:"mediocore",
        c:4,
    },
    nick_names:["chubby","ammu","shwethu"],
    DOB:"04-19-2003",
    Husband:"undefined",
    task:`function(){
        return "programming";
    }`,
}
let JSON_format1=JSON.stringify(obj2);//included function
document.writeln(JSON_format1+"<br/>");
let JSON_parse=JSON.parse(JSON_format1);
document.writeln(obj2==JSON_parse+"<br/>");
document.writeln(obj2===JSON_parse+"<br/>");

let arr = ["shwetha",null,8,undefined,{name:"manu"},true];//undefined has became null
let arr_JSON=JSON.stringify(arr);
document.writeln(arr_JSON+"<br/>");
let arr1 = ["shwetha",null,8,"undefined",{name:"manu"},true];
let arr_JSON1=JSON.stringify(arr1);
document.writeln(arr_JSON1+"<br/>");//corrected
let arr_parse=JSON.parse(arr_JSON);
let arr_parse1=JSON.parse(arr_JSON1);
document.writeln(arr==arr_parse+"<br/>");
document.writeln(arr===arr_parse+"<br/>");
document.writeln(arr1==arr_parse1+"<br/>");
document.writeln(arr1===arr_parse1+"<br/>");


//using reviver
let with_reviver=JSON.parse(JSON_format1,function(key,value){
    if(key=="DOB"){
        return new Date(value);
    }else{
        return value;
    }
});
document.writeln(with_reviver.DOB+"<br/>");
with_reviver.task=eval("("+with_reviver.task+")");
document.writeln(with_reviver.name+"///"+with_reviver.task());


//JSON server
window.location="demo.php?x="+JSON_format1;