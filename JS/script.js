let time = new Date;
document.querySelector(".timeH").innerHTML= `${time.getHours()} :`;
document.querySelector(".timeMm").innerHTML= `${time.getMinutes()} :`;
document.querySelector(".timeS").innerHTML= time.getSeconds();
document.querySelector(".timeD").innerHTML= time.getDate();
document.querySelector(".timeM").innerHTML= time.getMonth();
document.querySelector(".timeY").innerHTML= time.getFullYear();

// ----------------------------------------------------------------
function random1(){

    document.querySelector("#showNumber").innerHTML= Math.random()*100;
}
function floor1(){
    let f = document.getElementById('showNumber').textContent;
    document.querySelector("#showNumber").innerHTML= Math.floor(f);
}
function round1(){
    let f = document.getElementById('showNumber').textContent;
    document.querySelector("#showNumber").innerHTML= Math.round(f);
}
function cell1(){
    let f = document.getElementById('showNumber').textContent;
    document.querySelector("#showNumber").innerHTML= Math.ceil(f);
}