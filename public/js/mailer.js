
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
    console.log(mail.email);
});
