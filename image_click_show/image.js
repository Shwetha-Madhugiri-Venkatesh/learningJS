let image_ele = document.getElementsByClassName("imgs");
let im_con=document.getElementsByClassName("img");
let dots = document.getElementById("dot_container");
let popup = document.getElementById("popup");
let img_div = document.createElement("img");
let div_img = document.getElementById("show_img");
div_img.appendChild(img_div);
popup.style.display="none";
dots.style.display="none";
let curr = dots.style.left;
dots.appendChild(popup);

for(let x=0;x<image_ele.length;x++){
    image_ele[x].addEventListener("mouseover",()=>dot_popup(x));
    image_ele[x].addEventListener("mouseout",()=>dot_popout());
}
function dot_popup(index){
    img_div.setAttribute("src",``);
    popup.style.display="none";
    im_con[index].appendChild(dots);
    im_con[index].style.position="relative";
    image_ele[index].style.position="absolute";
    dots.style.position="absolute";
    dots.style.display="flex";
    //dots.setAttribute("id", `dots${index}`);
    dots.setAttribute("onclick",`show_popup(${index})`)
    console.log(curr);
    dots.style.left=`${curr+160}px`;
}
function dot_popout(){
    dots.style.display="none";
}
function show_popup(index){
    popup.setAttribute("onclick",`show_image(${index})`)
   popup.style.display="flex";
}
function show_image(index){
    let img_url = image_ele[index].src;
    img_div.setAttribute("src",`${img_url}`);
}
