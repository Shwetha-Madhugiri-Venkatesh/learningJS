document.writeln(window.innerHeight+"<br/>");
document.writeln(window.innerWidth+"<br/>");

document.writeln(window.screen.height+"<br/>");
document.writeln(window.screen.width+"<br/>");
document.writeln(window.screen.availHeight+"<br/>");
document.writeln(window.screen.availWidth+"<br/>");
document.writeln(window.screen.colorDepth+"<br/>")
document.writeln(window.screen.pixelDepth+"<br/>");

document.writeln(window.location.href+"<br/>");
document.writeln(window.location.hostname+"<br/>");
document.writeln(window.location.pathname+"<br/>");
document.writeln(window.location.port+"<br/>");
document.writeln(window.location.protocol+"<br/>");

function load_new(){
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
}

function history_back(){
    window.history.back();
}

function history_forward(){
    window.history.forward();
}
document.writeln("<br/><br/>");
document.writeln(navigator.cookieEnabled+"<br/>");
document.writeln(navigator.language+"<br/>");
document.writeln(navigator.onLine+"<br/>");
document.writeln(navigator.appName+"<br/>");
document.writeln(navigator.appCodeName+"<br/>");
document.writeln(navigator.product+"<br/>");
document.writeln(navigator.appVersion+"<br/>");
document.writeln(navigator.userAgent+"<br/>");
document.writeln(navigator.platform+"<br/>");
document.writeln(navigator.javaEnabled+"<br/>");