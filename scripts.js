const guessField=document.querySelector("#guessField");
const startButton=document.querySelector("#startButton");
const inputField=document.querySelector("#inputField");
const labelField1=document.querySelector("#labelField1");
const labelField2=document.querySelector("#labelField2");
let guess=Math.floor(Math.random()*50+1);
let number;
let count=0;
startButton.onclick=()=>{
    inputField.style.visibility="visible";
    startButton.style.display="none"
}

document.getElementById("submitButton").onclick=function(){
    number=document.getElementById("guessField").value;
    count+=1;
    if(number==guess){
        
        inputField.style.visibility="hidden";
        labelField1.style.visibility="visible";
        labelField2.style.visibility="visible";
        labelField1.innerHTML="Correct!!!";
        labelField2.innerHTML=`You guessed the number in ${count} turns`
    }
    else if(number<guess){
        alert("Number is too small, Enter another number");
        guessField.value=null;
       
    }
    else if(number>guess){
        alert("Number is too large, Enter another number")
       guessField.value=null;
    }
}   
   

  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 