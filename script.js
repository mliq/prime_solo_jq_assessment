var i = 0;

$(document).ready(function(){

    $('#generate').on('click',function(){
        i++;
        $('body').append("<div class='line'>Line #"+i+
            "<div class='changeColor'>Change Color</div><div class='remove'>Remove</div></div>");

        $('.changeColor').on('click',function(){

            var color = $(this).closest('.line').css('background-color');

            if(color == 'rgb(255, 255, 255)' || color == 'rgba(0, 0, 0, 0)') {
                $(this).closest('.line').css('background-color', 'orangered');
            }
            else {
                $(this).closest('.line').css('background-color', 'white');
            }
        });

        $('.remove').on('click',function(){
            $(this).closest('.line').remove();
        });
    });



});