$(function () {
    "use strict";

    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".showPopup").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    $("span, .overlay").click(function () {
        $(".showPopup").fadeOut();
    })
})