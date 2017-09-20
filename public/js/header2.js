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