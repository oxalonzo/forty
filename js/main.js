$(document).ready(function() {



/*boton*/

$('.boton').mouseenter(function() {
    $(this).css('border', 'solid #9bf1ff 2px')
           .css('color', '#9bf1ff');


    $('.flecha').css('marginLeft', '15px')
                .css('transition', 'margin-left 0.3s ease-in');

});

$('.boton').click(function(e){

    e.preventDefault();

    const href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);
})

$('.boton').mouseleave(function() {
    $(this).css('border', 'solid var(--blanco) 2px')
           .css('color', 'var(--blanco)');

    $('.flecha').css('marginLeft', '0px')
                .css('transition', 'margin-left 0.3s ease-in');
});

/* foto uno del main*/

 $('.foto-uno').mouseenter(function() {
    $('.contenedor-tituloUno').css('width', '190px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoUno').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-uno').mouseleave(function() {
    $('.contenedor-tituloUno').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoUno').css('backgroundColor', '#78bed8d0')
                                 .css('transition', 'background-color 0.7s ease-in');;
});

/* foto dos del main*/

$('.foto-dos').mouseenter(function() {
    $('.contenedor-tituloDos').css('width', '186px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoDos').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-dos').mouseleave(function() {
    $('.contenedor-tituloDos').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoDos').css('backgroundColor', '#7d76b4d2')
                                 .css('transition', 'background-color 0.7s ease-in');;
});


/* foto tres del main*/

$('.foto-tres').mouseenter(function() {
    $('.contenedor-tituloTres').css('width', '181px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoTres').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-tres').mouseleave(function() {
    $('.contenedor-tituloTres').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoTres').css('backgroundColor', '#d6847bd0')
                                 .css('transition', 'background-color 0.7s ease-in');;
});


/* foto cuatro del main*/

$('.foto-cuatro').mouseenter(function() {
    $('.contenedor-tituloCuatro').css('width', '150px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoCuatro').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-cuatro').mouseleave(function() {
    $('.contenedor-tituloCuatro').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoCuatro').css('backgroundColor', '#d9af8885')
                                 .css('transition', 'background-color 0.7s ease-in');;
});

/* foto cinco del main*/

$('.foto-cinco').mouseenter(function() {
    $('.contenedor-tituloCinco').css('width', '203px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoCinco').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-cinco').mouseleave(function() {
    $('.contenedor-tituloCinco').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoCinco').css('backgroundColor', '#7f98cfd3')
                                 .css('transition', 'background-color 0.7s ease-in');;
});

/* foto seis del main*/

$('.foto-seis').mouseenter(function() {
    $('.contenedor-tituloSeis').css('width', '186px')
                              .css('transition', 'width 0.4s ease-in');

    $('.contenedor-colorFotoSeis').css('backgroundColor', 'transparent')
                                 .css('transition', 'background-color 0.5s ease-in');
});

$('.foto-seis').mouseleave(function() {
    $('.contenedor-tituloSeis').css('width', '100%')
                              .css('transition', 'width 0.7s ease-in');

    $('.contenedor-colorFotoSeis').css('backgroundColor', '#85baa0cf')
                                 .css('transition', 'background-color 0.7s ease-in');;
});


    
});