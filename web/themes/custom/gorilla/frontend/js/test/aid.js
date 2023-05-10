import { CONTAINERS, FROM, preCOLS } from "../libraries/utils";
import {etiqueta, etiqueta2, eliminarMensajes } from "../test/function";

let primerIngreso = true;

const aid = function () {
  let $aids = $(".aid");

  $aids.each(function () {
    //Configuración  de test --------------------
    //variables
    const $testComponent = $(this);

    // recorre la función para cada par (clave, valor)
    let anchoPantalla = window.innerWidth;

    //Eliminar mensajes
    eliminarMensajes();

    //Creando viewport
    if(!$('body').find('.test-viewport').length){
      $('body').append(`
        <cite class="test-viewport"></cite>
      `);
    }

    etiqueta($('body').find('.test-viewport'), `${FROM(anchoPantalla)}: ${anchoPantalla}px`);

    //Si es testiable

      // Moverse al lugar donde está en component
      if (primerIngreso) {
        $("html, body").animate(
          {
            scrollTop: $testComponent.offset().top - 40,
          },
          2000
        );
      }


      //Ayuda visuales
      $testComponent.find("*").each(function () {
        if ($(this).css("position") == "relative") {
          $(this).addClass("test-relative");
          etiqueta2($(this), "relative");
        }
        if ($(this).css("position") == "absolute") {
          $(this).addClass("test-absolute");
          etiqueta2($(this), "absolute");
        }
        if ($(this).css("display") == "flex") {
          $(this).addClass("test-flex");

          if (!$(this).hasClass("row")) {
            etiqueta($(this), "flex");
          }
        }
        if ($(this).css("display") == "grid") {
          $(this).addClass("test-grid");
          etiqueta($(this), "grid");
        }
      });

    primerIngreso = false;
  });
};

document.addEventListener("DOMContentLoaded", aid);
document.addEventListener("resize", aid);
$(document).ready(function () {
  // actualizaremos el zoom cuando la ventana cambie de tamaño
  $(window).on("resize", aid);
});
