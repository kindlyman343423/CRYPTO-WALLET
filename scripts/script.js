function change()
{
   //var first = document.getElementsByClassName('left-option')[0];
   var first = document.getElementById('left-select');
   var second = first.value;
   document.getElementById('middle-down').innerHTML = second;
   //console.log(second);
}
function mid()
{
   //var text = document.getElementById('middle-down');
   //console.log(text.value);
   var v = document.getElementById('middle-text');
   var x = v.value;
   console.log(x/weather);
   document.getElementById('result').innerHTML = x/weather;
}
