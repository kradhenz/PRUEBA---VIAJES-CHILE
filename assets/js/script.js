/* SCROLL NAVBAR ANIMATION */
$(window).scroll(function () {
    /* CONDITIONAL STATEMENT BASED IN WINDOWS SIZE */
    if (window.innerWidth < 768) {
        $('#nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    } else {
        $('#nav').toggleClass('scrolled', $(this).scrollTop() > 500);
    }
});

$(document).ready(function () {
    /* SMOOTH SCROLL ANIMATION */
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            let cat = this.hash;

            $("html, body").animate({
                scrollTop: $(cat).offset().top
            }, 800, function () {
                window.location.hash = cat;
            });
        }
    });
    /* CONTACT ALERT */
    $("#send").click(function () {
        alert("El mensaje fue enviado exitosamente");
    })
    /* TOOLTIP */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});