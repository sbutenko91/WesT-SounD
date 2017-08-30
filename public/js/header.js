var isCollapsed = false;

function toggleHeaderNavBar() {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        $("#navbar").addClass('show');
        $("#navbarSupportedContent").removeClass('show');
        $("#menu").addClass('menuMobile');

    } else {
        $("#navbar").removeClass('show');
        $("#navbarSupportedContent").addClass('show');
        $("#menu").removeClass('menuMobile');
    }
}

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').css('display', 'block');
		} else {
			$('.scrollToTop').css('display', 'none');
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

$(document).ready(function(){
    $("#navbar").on("click","a.nav-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-98;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

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

function selectMenuItem(index) {
    if (index == 1) {
        document.getElementById("menu1").classList.add('active');
    } else {
        document.getElementById("menu1").classList.remove('active');
    }
    if (index == 2) {
        document.getElementById("menu2").classList.add('active');
    } else {
        document.getElementById("menu2").classList.remove('active');
    }
    if (index == 3) {
        document.getElementById("menu3").classList.add('active');
    } else {
        document.getElementById("menu3").classList.remove('active');
    }
    if (index == 4) {
        document.getElementById("menu4").classList.add('active');
    } else {
        document.getElementById("menu4").classList.remove('active');
    }
    if (index == 5) {
        document.getElementById("menu5").classList.add('active');
    } else {
        document.getElementById("menu5").classList.remove('active');
    }
    if (index == 6) {
        document.getElementById("menu6").classList.add('active');
    } else {
        document.getElementById("menu6").classList.remove('active');
    }
}


$(document).ready(function () {
    $(document).on("scroll", () => {
        var scrollPos = $(document).scrollTop();
        scrollPos += 100;
        var top = document.getElementById('top')
        var service = document.getElementById('service')
        var aboutus = document.getElementById('aboutus')
        var equipment = document.getElementById('equipment')
        var gallery = document.getElementById('gallery')
        var clients = document.getElementById('clients')
        var contact = document.getElementById('contact')
        if (scrollPos > top.offsetTop) {
            selectMenuItem(100);
        }
        if (scrollPos > service.offsetTop) {
            selectMenuItem(1);
        }
        if (scrollPos > aboutus.offsetTop) {
            selectMenuItem(2);
        }
        if (scrollPos > equipment.offsetTop) {
             selectMenuItem(3);
        }
        if (scrollPos > gallery.offsetTop) {
             selectMenuItem(4);
        }
        if (scrollPos > clients.offsetTop) {
              selectMenuItem(5);
        }
        if (scrollPos > contact.offsetTop) {
             selectMenuItem(6);
        }
    });
})