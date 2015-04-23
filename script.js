var i = 0;

$(document).ready(function(){

    $('#generate').on('click',function(){
        i++;
        $('body').append("<div class='line'>Line #"+i+
            "<div class='changeColor'>Change Color</div><div class='remove'>Remove</div></div>");

        $('.changeColor').on('click',function(){
            $(this).closest('.line').css('background-color','orangered');
        });

        $('.remove').on('click',function(){
            $(this).closest('.line').remove();
        });
    });



});