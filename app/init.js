function startTime() {
    
    var today = new Date();
    var h = normalTime(today.getHours());
    var m = today.getMinutes();
    var s = today.getSeconds();
    debugger;
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    debugger;
    if (i < 10) {i = '0' + i};  
    return i;
}
function normalTime(time){
    debugger;
    if(time > 13){
        return time - 12;
    }
    
    if(time === 0 && time < 1){
        return time + 12
    }
    return time;
}
startTime();

