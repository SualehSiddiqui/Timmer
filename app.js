var displayTime = document.querySelector("#time");
var displayTimeValue = document.querySelector("#time").value;
var sec0;
var sec;
var min0;
var min;
var hour0;
var hour;
var onOrOff;
// console.log(displayTimeValue)

function timmer(){
    -- sec
console.log(sec)

    if(sec == 0){
        sec = 60;
        --min;
        if(min === 0){
            min = 60;
            --hour
        }
    }
    var s = sec < 10 ? "0" + sec : sec ;
    var m = min < 10 ? "0" + min : min ;
    var h = hour < 10 ? "0" + hour : hour ;

    displayTime.value = h + " : " + m + " : " + s;
}

function valueOfWatch(){
    sec0 = displayTimeValue.slice(6);
    sec = sec0 < 10 ? displayTimeValue.slice(7) : sec0;
    console.log(sec)
    min0 = displayTimeValue.slice(3, 5);
    min = min0 < 10 ? displayTimeValue.slice(4, 5) : min0;
    hour0 = displayTimeValue.slice(0, 2);
    hour = hour0 < 10 ? displayTimeValue.slice(1, 2) : hour0;
}

function startWatch(){
   valueOfWatch()
   console.log(displayTimeValue)
    onOrOff = setInterval(timmer , 1000);
}

function pauseWatch(){
    clearInterval(onOrOff);
}

function resetWatch(){
    clearInterval(onOrOff)
    displayTime.value = "00:00:00";
}