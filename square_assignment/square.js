let div_ele = document.getElementById("div_ele");
// function animate_div(){
//     setInterval(main_func,500);
// }
// function main_func(){
//     let width = Math.floor(Math.random()*1000)-500;
//     let height = Math.floor(Math.random()*760)-300;
//     let degree = Math.floor(Math.random()*360);
//     div_ele.setAttribute("style",`transform: translate(${-width}px,${-height}px) rotate(${degree}deg);transition:2s`);
// }
function animate_div(){
    let window_x = window.screen.availWidth-100;
    let window_y = window.screen.availHeight-100;
    console.log(window_x,window_y);
    let x = Math.floor(Math.random()*window_x)-window_x/2;
    let y = Math.floor(Math.random()*window_y)-window_y/2;
    let degree = Math.floor(Math.random()*360)+180;
    div_ele.setAttribute("style",`transform: translate(${x}px,${y}px) rotate(${degree}deg);`);
}