function startTime() {
    debugger;
    var today = new Date();
    var h = normalTime(today.getHours());
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = 0 + i};  
    return i;
}
function normalTime(time){
    debugger;
    if(time > 13){
        return time - 12;
    }
    return time;
    // if(time <= 0){
    //     return time + 12
    // }
}
startTime();

