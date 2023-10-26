'use strict'

var limpiar = document.getElementById('limpiar');
var enviar = document.getElementById('enviar');
var iconosFooter = document.querySelectorAll('.icono-footer')




limpiar.addEventListener('mouseenter', () => { 
    limpiar.style.border = 'solid 2px #9bf1ff';
    limpiar.style.color = '#9bf1ff';
});

limpiar.addEventListener('mouseleave', () => { 
    limpiar.style.border = 'solid 2px #fff';
    limpiar.style.color = '#fff';
});

/*boton de enviar */


enviar.addEventListener('mouseenter', () => { 
    enviar.style.background = 'transparent';
    enviar.style.color = '#fff';
    enviar.style.transition = 'background 0.4s ease-in'
});

enviar.addEventListener('mouseleave', () => { 
    enviar.style.background = '#fff';
    enviar.style.color = '#242943';
});

/*iconos del footer*/

iconosFooter.forEach( function(iconos){

    iconos.addEventListener('mouseenter', function() {
         iconos.style.backgroundColor = '#9bf1ff';
    });

    iconos.addEventListener('mouseleave', () => { 
        iconos.style.background = '#fff';
    });
       

})





