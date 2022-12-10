function lovecal(){
var ln = document.getElementById('ln').value;
var n = document.getElementById('n').value;
if(ln =="")
{
    alert("Please enter your name");
}
else if(ln.length<=2)
{
    alert("Name should be more than 2 character");
}
 else if(n =="")
{
    alert("Please enter your name");
}
else if(n.length<=2)
{
    alert("Name should be more than 2 character");
}
else{
    var ls = Math.random();
     ls = ls * 100;
     ls = Math.floor(ls);
     ls = Math.floor(ls + 1);
 var lovescore =document.getElementById('lovevalue').value =ls + "%";
}
}
// if (ls == 100) 
// {
//    alert("Good morning");
//   } 
//   else if (ls<= 80) 
//   {
//     alert("Good day");
//   } 
//   else if(ls<=60)
//   {
//    alert("Good evening");
//   }

  
