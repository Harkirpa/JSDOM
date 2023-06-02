//4.
var a=document.getElementsByClassName("change");
console.log(a[0].innerHTML);

a[0].addEventListener('click',() =>{
             a[0].innerHTML="Hello World";
})
//5.
var b=document.getElementsByClassName("changetext");
console.log(b[0].innerHTML);

function trans(){
            b[0].innerHTML="Welcome To Elevation Academy";
}
//6
let heads = document.getElementById("heading");

console.log(heads);
heads.style.color="red"
heads.style.fontSize="50px"
//7
let c=document.querySelector(".cont");
let count=true;
function boxes(){
    if(count){

        c.style.display='block';
        count=false;
    }
    else{
        c.style.display='flex';
        count=true;
    }
}
//9
let display=document.querySelectorAll('h5');
display[0].addEventListener('click',()=>
{
  function startclock(){
    let time=new Date();

    let hrs=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();
    let AMPM="AM";
    
    if(hrs>12){
        hrs-=12;
        AMPM="PM"
    }
    console.log('time:${hrs}:${min}:${sec}');
   // console.log(`Time: $(hrs):$(mins):$(secs)`);
    display[1].innerHTML=`${hrs}:${mins}:${secs}   ${AMPM}`
  } 
    setInterval(()=>{
        startclock();
        
    },1000)
   
})

/* 1: */
let hy= document.getElementById("text");
console.log(hy);

//2.
let second=document.getElementsByTagName("h1");
console.log(second);
//3.
let third=document.getElementsByClassName("box");
console.log(third);


