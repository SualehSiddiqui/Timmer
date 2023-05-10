var displayTime = document.querySelector("#time").value;
var sec = 00;
var min = 00;
var hour = 00;
var onOrOff;
console.log(displayTime)

function timmer(){
    
}

function startWatch(){
    onOrOff =   setInterval(stopWatch , 1000)
}

function pauseWatch(){
    clearInterval(onOrOff)
}

function resetWatch(){
    clearInterval(onOrOff)
    sec = 0;
    min = 0;
    hour = 0;
    displayTime.innerHTML = "00 : 00 : 00";
}