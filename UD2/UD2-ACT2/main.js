

const INPUT = document.getElementById("input");
const PROGRESS = document.getElementById("progress");
const METER = document.getElementById("meter");

const SHOW = document.getElementById("show");
const CI = document.getElementById("ci");
const CP = document.getElementById("cp");


function newMeterValue(value){
   let value = INPUT.value;
   CI = value;
}

function showMeter(){
    alert(METER.value);
}
function setMeterAsProgress(){
    METER.value = PROGRESS.value
}

SHOW.addEventListener("click", showMeter);
CI.addEventListener("click", newMeterValue);
CP.addEventListener("click", setMeterAsProgress);