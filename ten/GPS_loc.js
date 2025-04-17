//fuction to get location
function getLocation(){
    try{
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }catch(err){
        document.writeln("GPS is not supported");
    }
}
function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;

    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

let err_text = document.getElementById("err");
function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            err_text.innerHTML="permission is not there";
            break;
        case error.POSITION_UNAVAILABLE:
            err_text.innerHTML="position does not exixt";
            break;
        case error.TIMEOUT:
            err_text.innerHTML="Position finding timedOut!";
            break;
        case error.UNKNOWN_ERROR:
            err_text.innerHTML="Error not identified.";
            break;
    }
}