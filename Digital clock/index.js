const hourElement=document.getElementById("hour")
const minuteElement=document.getElementById("minutes")
const secondElement=document.getElementById("seconds")
const ampmElement=document.getElementById("ampm")

function update(){
    /*first we get the hour from our computer using the date constructor*/
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm="AM"
    
    if(h>12){
        h=h-12
        ampm="PM"
    }

     h=h<10 ?"0"+h:h;
     m=m<10 ?"0"+m:m;
     s=s<10 ?"0"+s:s;

   hourElement.innerText=h;
   minuteElement.innerText=m;
   secondElement.innerText=s;
   ampmElement.innerText=ampm
   setTimeout(()=>{
    update()
   },1000)
}
/*call the function for every time */
update()