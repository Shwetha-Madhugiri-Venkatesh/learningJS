let id = null;
let y;
// document.writeln(y.repeat(2));
function time(){
    clearInterval(id);
    id=setInterval(newTime,500);
    function newTime(){
        let date = new Date();
        //date.setHours(11,30,30);
        let hour = date.getHours();
        let t = date.toLocaleTimeString();
        let am_pm = t.slice(t.length-2,t.length);
        if(hour>=12){
            hour=hour-12;
            date.setHours(hour);
        } 
        if(hour>=0&&hour<=9){
            document.getElementById("hour_text").innerHTML="0"+date.getHours();
            document.getElementById("min_text").innerHTML=date.getMinutes();
            document.getElementById("sec_text").innerHTML=date.getSeconds();
            document.getElementById("day_text").innerHTML=am_pm.toUpperCase();
        }else{
            document.getElementById("hour_text").innerHTML=date.getHours();
            document.getElementById("min_text").innerHTML=date.getMinutes();
            document.getElementById("sec_text").innerHTML=date.getSeconds();
            document.getElementById("am").innerHTML=am_pm.toUpperCase();
        }
    }
}