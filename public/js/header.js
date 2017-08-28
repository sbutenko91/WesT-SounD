var isCollapsed = false;

function toggleHeaderNavBar() {
    isCollapsed = !isCollapsed;

    if (isCollapsed || scrollPosition > 300) {
        document.getElementById("navbar").classList.add('show');
        document.getElementById("navbarSupportedContent").classList.add('show');
        document.getElementById("menu").classList.add('menuMobile');

    } else {
        document.getElementById("navbar").classList.remove('show');
        document.getElementById("navbarSupportedContent").classList.remove('show');
        document.getElementById("menu").classList.remove('menuMobile');
    }
}

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#navbar');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > 300) {
                $("#navbar").css('background-color', '#202427');
            } else {
                $('#navbar').css('background-color', 'transparent');
            }
        });
    }
});

var activeIndex = 100;

function selectMenuItem(index) {
    activeIndex = index
    isCollapsed = false
    console.log(activeIndex);
    if (activeIndex == 1) {
        document.getElementById("menu1").classList.add('active');
    } else {
        document.getElementById("menu1").classList.remove('active');
    }

    if (activeIndex == 2) {
        document.getElementById("menu2").classList.add('active');
    } else {
        document.getElementById("menu2").classList.remove('active');
    }
    if (activeIndex == 3) {
        document.getElementById("menu3").classList.add('active');
    } else {
        document.getElementById("menu3").classList.remove('active');
    }
    if (activeIndex == 4) {
        document.getElementById("menu4").classList.add('active');
    } else {
        document.getElementById("menu4").classList.remove('active');
    }
    if (activeIndex == 5) {
        document.getElementById("menu5").classList.add('active');
    } else {
        document.getElementById("menu5").classList.remove('active');
    }
    if (activeIndex == 6) {
        document.getElementById("menu6").classList.add('active');
    } else {
        document.getElementById("menu6").classList.remove('active');
    }
}
