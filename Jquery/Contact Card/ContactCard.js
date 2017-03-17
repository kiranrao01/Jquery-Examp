function addUser() {
    $('button').click( function() {
        console.log('Add User Clicked');
        var first = $("#first").val();
        var last = $("#last").val();
        var description = $("#description").val();
        if (first!=='' && last!=='' && description!=='') {
            $('.collection').append(
                '<div class="card"><div class="front"><h3>'+first+' '+' '+last+'</h3><p>Hover to see description</p></div><div class="back"><h3>'+first+' '+last+'</h3><p>'+description+'</p></div></div>'
            );
            resetForm();
            submitForm();
        }
        else {
            alert('You cannot have blank fields.');
        }
    });
}

function swapCard() {
    $('.card').hover(
    function() {
        console.log('HELLO');
        $(this).children('.front').css('display','none');
        $(this).children('.back').css('display','block');
    },
    function() {
        console.log('BYE');
        $(this).children('.front').css('display','block');
        $(this).children('.back').css('display','none');
    }
    );
}

function resetForm() {
    console.log('Reset Form');
    $('input').val('');
    $('textarea').val('');
}

function submitForm() {
    console.log('Submit');
    return false;
}

$(document).ready( function() {
    console.log('Ready');
    addUser();

    $(document).on('click', 'button', function(){
        swapCard();
   });

});
