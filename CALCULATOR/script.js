

function clearResult(){
   document.getElementById("result").value="";
}

function display(val){
    document.getElementById("result").value +=val;
 }

 function calculate(){
    var x= document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
 }
function Deletelaast(){
   let cudisply =document.getElementById("result").value;
   document.getElementById("result").value = cudisply.slice(0,-1  );
}