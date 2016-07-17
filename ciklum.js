//header menu fullscreen

$(".header-menu > li").on('click', function () {
    $('.dropdown-submenu').addClass("hidden");
    $(this).find('.dropdown-submenu').removeClass("hidden");
    return false;
});

$('body, .dropdown-submenu').on('click', function () {
    $('.dropdown-submenu').addClass("hidden");
});


// header menu @media

$(".hide-menu").on('click', function () {
    $('.left-side-menu').addClass("visible-tb-mob");
    return false;
});

$('body').on('click', function () {
    $('.left-side-menu').removeClass("visible-tb-mob");
});

$(".dropdown-submenu > li").on('click', function () {
    $('.last-submenu').addClass("hidden");
    $(this).find('.last-submenu').removeClass("hidden");
    return false;
});

$('body, .last-submenu').on('click', function () {
    $('.last-submenu').addClass("hidden");
});


//footer menu 480px

$(".column-header").on('click', function () {
	$('ul.column-list').addClass("footer-hidden");
    $(this).next().removeClass("footer-hidden");
    return false;
});

$('body').on('click', function () {
    $('ul.column-list').addClass("footer-hidden");
});
