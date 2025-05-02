let count =0;
function slice(event,obj){
    let div1 = document.createElement("div");
    let styles = window.getComputedStyle(obj);
    if(parseInt(styles.width)<=30){
        return;
    }
    let dv_width = parseInt(styles.width)-event.offsetX;
    div1.setAttribute("style",`width:${event.offsetX-2}px;z-index:${count};border-left:none`);
    div1.setAttribute("onclick","slice(event,this)");
    div1.setAttribute("class","divs");
    obj.appendChild(div1);
    let div2 = document.createElement("div");
    div2.setAttribute("style",`width:${dv_width-2}px;z-index:${count};right:0;border-right:none`);
    div2.setAttribute("onclick","slice(event,this)");
    div2.setAttribute("class","divs");
    obj.appendChild(div2);
    obj.removeAttribute("onclick");
    count++;
}