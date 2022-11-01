let outdisplay=document.getElementById("output");
let eraseAll=document.getElementById("erase-all");
let resultButton=document.getElementById("result")
let curr=""
outdisplay.value=curr
function inputTaker(e){
    outdisplay.value=outdisplay.value+e.target.value
}
document.getElementById("inp-val-1").addEventListener('click',inputTaker);
document.getElementById("inp-val-2").addEventListener('click',inputTaker);
document.getElementById("inp-val-3").addEventListener('click',inputTaker);
document.getElementById("inp-val-4").addEventListener('click',inputTaker);
document.getElementById("inp-val-5").addEventListener('click',inputTaker);
document.getElementById("inp-val-6").addEventListener('click',inputTaker);
document.getElementById("inp-val-7").addEventListener('click',inputTaker);
document.getElementById("inp-val-8").addEventListener('click',inputTaker);
document.getElementById("inp-val-9").addEventListener('click',inputTaker);
document.getElementById("inp-val-0").addEventListener('click',inputTaker);
document.getElementById("inp-val--").addEventListener('click',inputTaker);
document.getElementById("inp-val-+").addEventListener('click',inputTaker);
document.getElementById("inp-val-*").addEventListener('click',inputTaker);
document.getElementById("inp-val-/").addEventListener('click',inputTaker);
document.getElementById("inp-val-.").addEventListener('click',inputTaker);
document.getElementById("inp-val-1").addEventListener('click',inputTaker);
eraseAll.addEventListener("click",eraseall);
function eraseall(){
    outdisplay.value=''
}
resultButton.addEventListener("click",resultFunction)
function resultFunction(){
    outdisplay.value=eval(outdisplay.value);
}