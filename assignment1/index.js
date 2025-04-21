let arr=["Saab", "Volvo", "BMW", 'Toyota', 'Ford', 'Subaru', 'Tesla'];
let id = null;
function start(){
    clearInterval(id);
    id = setInterval(count,500);
    function count(){
    document.getElementById("res").innerHTML= arr[Math.floor(Math.random()*arr.length)];
    }
}
function stop(){
    clearInterval(id);
}
