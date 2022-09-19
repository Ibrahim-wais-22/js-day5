let time = new Date;
document.querySelector(".timeH").innerHTML= `${time.getHours()} :`;
document.querySelector(".timeMm").innerHTML= `${time.getMinutes()} :`;
document.querySelector(".timeS").innerHTML= time.getSeconds();
document.querySelector(".timeD").innerHTML= time.getDate();
document.querySelector(".timeM").innerHTML= time.getMonth();
document.querySelector(".timeY").innerHTML= time.getFullYear();