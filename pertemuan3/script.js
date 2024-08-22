$(document).ready(function() {
    //event click
    $('#click').click(function(){
        alert('Saya sedang belajar JQuery!');
    });

    //event dbclick
    $('#dblclick').dblclick(function(){
        $(this).css('background-color','red');
    });

    //event mouseleave
    $('.mouse').mouseleave(function(){
        $(this).css('background-color','skyblue');
    });

    //event mouseenter
    $('.mouse').mouseenter(function(){
        $(this).css('background-color','lime');
    });

    //event keydown
    $('#keydown').keydown(function(){
        $('#pesan_keydown').text($(this).val());
    });

    //event keyup
    $('#keyup').keyup(function(){
        $('#pesan_keyup').text($(this).val());
    });
})