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

//guess
let inputvalue=document.querySelector('input');
let output=document.getElementsByClassName('message');
let marks=document.getElementsByClassName('score');
let guess=document.getElementsByClassName('number');
let higher=document.getElementsByClassName('highscore');
let randomNum=parseInt(Math.random() * 100+ 1);
console.log(randomNum);

let counted= 100;
function maincheck(){
    console.log(inputvalue.value);
    if(randomNum>inputvalue.value){
        output[0].innerHTML=("Your guess is Low");
        counted--;
        marks[0].innerHTML=(counted);
    }
    else if(randomNum<inputvalue.value)
    {
        output[0].innerHTML=("Your guess is high");
        counted--;
        marks[0].innerHTML=(counted);
    }
    else{
        output[0].innerHTML=("Hurray you won");
        guess[0].innerHTML=inputvalue.value;
        higher[0].innerHTML=(counted);
        marks[0].innerHTML=(counted);
    }
}
