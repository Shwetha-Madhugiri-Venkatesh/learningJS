//pop up boxes

//1.Alert()

function alert_func(){
    alert("Hi welcome to the page");
}

function confirm_func(){
    let confirm_msg="";
    if(confirm("I agree to the instructions and guidelines")){
        confirm_msg="You agreed";
    }
    else{
        confirm_msg="You didn't agree";
    }
    document.writeln(confirm_msg+"<br/>");
}

function prompt_func(){
    let u_name = prompt("Please enter your name, so that I can remember you!!","Angel");
    let prompt_txt="";
    if(u_name==null || u_name==""){
        prompt_txt="User denied to reveal the identity";
    }else{
        prompt_txt="Hello "+u_name+" ! How are you doing today??";
    }
    document.writeln(prompt_txt+"<br/>");
}

//cookies
function setTheCookie(c_name,c_value,expiry){
    let date = new Date();
    date.setTime(date.getTime()+(expiry*24*60*60*1000));
    let expires="expires="+date.toUTCString();
    document.cookie=c_name+"="+c_value+";"+expires+";path=/";
}

function getTheCookie(c_name){
    let name = c_name+"=";
    let ca = document.cookie.split(";");
    for(let i=0;i<ca.length;i++){
        let c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkTheCookie(){
    let user = getTheCookie("username");
    if(user!=""){
        alert("Welcome again "+user+" we missed you");
    }else{
        user=prompt("please enter your name:","");
        if(user!="" && user!=null){
            setTheCookie("username",user,365);
        }
    }
}