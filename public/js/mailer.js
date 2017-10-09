
$("#btnsend").on('click', () => {
    var name = $("#name").val();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var message = $("#message").val();
    var mail = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8081/mail',
        data: JSON.stringify(mail),
        success: function(data) { 
            console.log('success');
         },
        contentType: "application/json",
        dataType: 'json'
    });
});

// $("#contact-form").submit(function(e) {
//     e.preventDefault();
// });