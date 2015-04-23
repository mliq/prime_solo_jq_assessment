var i = 0;

$('document').ready(function(){

   $('#generate').on('click',function(){
       i++;
       $('body').append('<div>Line #'+i+"<div id='changeColor'>Change Color</div><div id='remove'>Remove</div>");
   });

});