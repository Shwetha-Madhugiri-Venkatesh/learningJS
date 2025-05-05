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
    let window_width = window.screen.availWidth;
    let window_height = window.screen.availHeight;
    console.log(window_width,window_height);
    let width = Math.floor(Math.random()*600)-100;
    let height = Math.floor(Math.random()*400)-100;
    let degree = Math.floor(Math.random()*360)+180;
    div_ele.setAttribute("style",`transform: translate(${width}px,${height}px) rotate(${degree}deg);`);
}