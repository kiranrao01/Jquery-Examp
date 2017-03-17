function addUser() {
    $('button').click( function() {
        console.log('Submit Clicked');
        var first = $("#first").val();
        var last = $("#last").val();
        var email = $("#email").val();
        var number = $("#number").val();
        if (first!=='' && last!=='' && email!=='' && number!=='') {
            $("#list").append(
                '<tr><td>'+first+'</td>' +
                '<td>'+last+'</td>' +
                '<td>'+email+'</td>' +
                '<td>'+number+'</td></tr>'
            );
            resetForm();
            //submitForm();
        }
        else {
            alert('You cannot have blank fields.');
        }
    });

}

function resetForm() {
    console.log('Reset Form');
    $('input').val('');

}

function submitForm() {
    console.log('Submit');
    return false;
}

$(document).ready( function() {
    console.log('Ready');
    addUser();
});
