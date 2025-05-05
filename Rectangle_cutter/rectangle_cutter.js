function slice(event,obj){
    let div1 = document.createElement("div");
    let styles = window.getComputedStyle(obj);
    if(parseInt(styles.width)<=30){
        return;
    }
    let dv_width = parseInt(styles.width)-event.offsetX;
    div1.setAttribute("style",`width:${event.offsetX-2}px;`);
    div1.setAttribute("onclick","slice(event,this)");
    div1.setAttribute("class","divs");
    obj.appendChild(div1);
    let div2 = document.createElement("div");
    div2.setAttribute("style",`width:${dv_width}px;`);
    div2.setAttribute("onclick","slice(event,this)");
    div2.setAttribute("class","divs-right");
    obj.appendChild(div2);
    obj.removeAttribute("onclick");
    obj.setAttribute("style",`border-style:none;width:${styles.width}`);
}
// let styles1 = obj.getBoundingClientRect()
// console.log(styles1.width);