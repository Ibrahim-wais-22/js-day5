// function updateTime(){
//     let time = new Date;
//         time.getHours() 
//         time.getMinutes()
//         time.getSeconds()
//         time.getDate()
//         time.getMonth()
//         time.getFullYear()
    
// }
// document.querySelector(".timeMm").innerHTML= ;
// document.querySelector(".timeS").innerHTML= ;
// document.querySelector(".timeD").innerHTML= ;
// document.querySelector(".timeM").innerHTML= ;
// document.querySelector(".timeY").innerHTML= ;
GetTime();

function GetTime(){
  var Time = new Date()
  var hour = Time.getHours()
  var minute = Time.getMinutes()
  var second = Time.getSeconds()

  if(minute < 10){
    minute = "0" + minute
  }

  if(second < 10){
    second = "0" + second
  }

  var GetCurrentTime = hour + ":" + minute + ":" + second + " ";

  if(hour > 11){
    GetCurrentTime += "p.m."
  }else{
    GetCurrentTime += "a.m."
  }

  document.getElementById("CurrentTime").innerHTML = GetCurrentTime;
  setTimeout(GetTime,1000)
}


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