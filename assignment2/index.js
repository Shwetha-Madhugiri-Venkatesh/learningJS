let num;
let btn_container;
document.getElementById("generate_btn").style.display="none";
function submit_btn(){
    num = document.getElementById("inp").value;
    let btn_div = document.getElementById("parent");
    btn_container = document.createElement("div");
    btn_container.setAttribute("id","btns");
    btn_div.appendChild(btn_container);
    if(btn_container.children.length!=0){
        return;
    }
    for(let i=0;i<num;i++){
        let new_elem = document.createElement("button");
        let text=document.createTextNode(`${i+1}`);
        new_elem.appendChild(text);
        btn_container.appendChild(new_elem);
        new_elem.setAttribute("id",`btn${i+1}`);
        new_elem.setAttribute("class","btn");
        new_elem.setAttribute("onclick",`count_ele(${i+1})`);
    }
    document.getElementById("generate_btn").style.display="block";
    document.getElementById("input_container").style.display="none";
}
let obj={};
let key;
let count;
let pre=0;
// let report_text="";
function count_ele(index){
    document.getElementById(`btn${index}`).style.backgroundColor="red";
    if(pre!=index){
        count=0;
    }
    count++;
    key=`button${index}`;
    if(obj[key]==undefined){
    obj[key]=count;
    }else{
        obj[key]+=count;
    }
    pre=index;
}
function generate(){
    document.getElementById("generate_btn").style.display="none";
    document.getElementById("parent").style.display="none";
    document.getElementById("input_container").style.display="none";
    document.getElementById("report_sec").style.display="block";
    document.getElementById("clear_div").style.display="block";
    document.getElementById("report").innerHTML="";
    document.getElementById("title_res").innerHTML="Report:<br/>";
    for(let [x,y] of Object.entries(obj)){
        let entry = x+" : "+y;
        document.getElementById("report").innerHTML+=entry+"<br/>";
    }
    obj={};

    if(document.getElementById("clear")==null){
    clear_elem=document.createElement("button");
    let clear_text=document.createTextNode("Clear");
    clear_elem.appendChild(clear_text);
    let clear_con = document.getElementById("clear_div");
    clear_con.appendChild(clear_elem);
    clear_elem.setAttribute("id","clear");
    clear_elem.setAttribute("onclick","clear()");
    document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("report_sec").style.display="none";
    document.getElementById("input_container").style.display="block";
    document.getElementById("parent").removeChild(btns);
    document.getElementById("parent").style.display="block";
    document.getElementById("clear_div").style.display="none";
    document.getElementById("inp").value="";
    });
    }
}