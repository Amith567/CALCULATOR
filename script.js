function callfunc(val){
    document.getElementById("screen").value+=val;
}
function callfunres(){
   var valu=document.getElementById("screen").value
   var result=eval(valu)
   document.getElementById("screen").value=result
}
function callfunclr(){
    document.getElementById("screen").value=""
}
function dele() {
    const display = document.getElementById("screen");
    display.value = display.value.slice(0, -1);}