$("#contact-form").submit(() => {
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
        contentType: "application/json",
        data: JSON.stringify(mail),
        success: function () {
            toastr.info("Ваше повідомлення успішно надіслано");
            $("input, textarea").val("");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error("Спробуйте пізніше", "Помилка")
            console.log("Error, status = " + textStatus + ", " +
                "error thrown: " + errorThrown
            );
        },
        dataType: 'text'
    });
});

$("#contact-form").submit(function (e) {
    e.preventDefault();
});