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