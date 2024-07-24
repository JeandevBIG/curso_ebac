$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const Input = $('#list').val();
        const Lista = '<li><span>' + Input;

        $('#ul-list').append(Lista);
        $('#list').val('');
    });

    $('#ul-list').on('click', 'li', function(e){   
        if (!$(e.taget).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });

    $('#clear').on('click', function(){
        $('#ul-list').empty();
    });

});