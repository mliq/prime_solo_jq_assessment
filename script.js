var i = 0;

$(document).ready(function(){

    $('#generate').on('click',function(){
        i++;
        $('body').append("<div class='line'>Line #"+i+
            "<div id='changeColor'>Change Color</div><div id='remove'>Remove</div></div>");

        $('#changeColor').on('click',function(){
            $(this).closest('.line').css('background-color','orangered');
        });
    });



});