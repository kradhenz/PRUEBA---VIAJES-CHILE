// SCROLL NAVBAR ANIMATION
$(window).scroll(function(){
    // CONDITIONAL STATEMENT BASED IN WINDOWS SIZE
    if (window.innerWidth < 768) {
        $('#nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    } else {
        $('#nav').toggleClass('scrolled', $(this).scrollTop() > 600);
    }
})

// CONTACT ALERT
$("#send").click(function () {
    alert("El mensaje fue enviado exitosamente");
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})