

const INPUT = document.getElementById("input");
const PROGRESS = document.getElementById("progress");
const METER = document.getElementById("meter");

const SHOW = document.getElementById("show");
const CI = document.getElementById("ci");
const CP = document.getElementById("cp");


function newMeterValue(value){
   value = INPUT.value;
   CI = value;
}

function showMeter(){
    alert(METER.value);
}
function setMeterAsProgress(){

}

SHOW.addEventListener("click", showMeter);
CI.addEventListener("click", newMeterValue);
CP.addEventListener("click", setMeterAsProgress);