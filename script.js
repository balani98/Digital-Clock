"use strict"
function getDateTime(){
   var date=new Date();  //creating the object of date class
   var hour=date.getHours();
   var min=date.getMinutes();
   var sec=date.getSeconds();
   hour = updateTime(hour);
   min=updateTime(min);
   sec=updateTime(sec);
   document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}
setInterval(getDateTime,1000);

function updateTime(k){
  if(k<10){
      return '0' + k;
  }else{
     return k ;
  }


}
