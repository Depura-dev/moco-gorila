import { CONTAINERS, FROM, preCOLS } from "../libraries/utils";
import {
  error,
  ok,
  etiqueta,
  etiqueta2,
  eliminarMensajes,
  numerador,
} from "../test/function";

let primerIngreso = true;

const test = function () {
  let $tests = $(".test, .no-component, .no-test");

  $tests.addClass("testing");

  $tests.each(function () {
    //Configuración  de test --------------------
    let isComponent = false;
    let isTitlePage = false;
    let isTest = true;

    //variables
    console.log($(this));
    const $testComponent = $(this);
    const nombreComponente = $testComponent.attr("class").split(" ")[0];

    let mensaje = "";
    let conPrueba = 0;
    let pruebaValida = 0,
      pruebaInvalida = 0,
      contador = 0;

    //Cargando algunas
    if ($testComponent.hasClass("test")) isComponent = true;
    if ($testComponent.hasClass("title-page")) isTitlePage = true;
    if ($testComponent.hasClass("no-test")) isTest = false;

    // recorre la función para cada par (clave, valor)
    let anchoPantalla = window.innerWidth;

    //Eliminar mensajes
    eliminarMensajes();

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

    //Creando viewport
    if (!$("body").find(".test-viewport").length) {
      $("body").append(`
        <cite class="test-viewport"></cite>
      `);
    }

    etiqueta(
      $("body").find(".test-viewport"),
      `${FROM(anchoPantalla)}: ${anchoPantalla}px`
    );

    //Si es testiable
    if (isTest) {
      mensaje = `!!!PRUEBAS DE CALIDAD DEl COMPONENTE: ${nombreComponente}-------
  From(${FROM(anchoPantalla)}) Screen: ${anchoPantalla}`;

      //Mostrar nombre del componente
      etiqueta($testComponent, `${nombreComponente}`, true);

      // Moverse al lugar donde está en component
      if (primerIngreso) {
        $("html, body").animate(
          {
            scrollTop: $testComponent.offset().top - 40,
          },
          2000
        );
      }

      //prueba de ser una section
      if (isComponent) {
        numerador(conPrueba);
        if ($testComponent.prop("tagName") == "SECTION") {
          ok(`El componente es un ${$testComponent.prop("tagName")}`);
        } else {
          error(
            `El componente no es un SECTION, es un ${$testComponent.prop(
              "tagName"
            )}`,
            $testComponent,
            "No es SECTION"
          );
        }
      }

      //El componente tiene container
      numerador(conPrueba);
      contador = 0;
      CONTAINERS.forEach(function (container) {
        $testComponent.find("*").each(function () {
          if ($(this).hasClass(container)) contador++;
        });
      });
      if (contador) {
        ok(`El componente contiene un .container`);
      } else {
        error(
          `El componente no contiene un .container`,
          $testComponent,
          "Componente sin .container"
        );
      }

      //prueba no hay un h1
      if (!isTitlePage) {
        numerador(conPrueba);
        if ($testComponent.find("h1").length) {
          error(
            `El componente contiene un H1`,
            $testComponent.find("h1"),
            "H1"
          );
        } else {
          ok(`El componente no contiene un H1`);
        }
      }

      //No hay section dentro del componente
      numerador(conPrueba);
      if ($testComponent.find("section").length) {
        error(
          `Existe SECTION dentro del componente`,
          $testComponent.find("section"),
          "SECTION interno"
        );
      } else {
        ok(`No hay SECTION dentro del componente`);
      }

      //.todos los row tienen g-0
      numerador(conPrueba);
      contador = 0;
      if ($testComponent.find(".row").length) {
        $testComponent.find(".row").each(function () {
          if (!$(this).hasClass("g-0")) {
            contador++;
            error(false, $(this), `.row sin g-0`);
          }
        });
        if (contador) {
          error(`Existen .row sin su g-0`);
        } else {
          ok(`Todos los .row tienen g-0`);
        }
      } else {
        ok(`No hay .row dentro del componente`);
      }

      //No hay container dentro de otro container
      numerador(conPrueba);
      contador = 0;
      CONTAINERS.forEach(function (classContainer) {
        $testComponent.find("." + classContainer).each(function () {
          const $container = $(this);
          CONTAINERS.forEach(function (ClassContainerInterno) {
            if ($container.find("." + ClassContainerInterno).length) contador++;
            error(
              false,
              $container.find("." + ClassContainerInterno),
              `.container dentro de otro`
            );
          });
        });
      });
      if (contador) {
        error(`Hay .container dentro otro`);
      } else {
        ok(`No existen .container dentro de otro`);
      }

      //Los col suman menos o igual a
      numerador(conPrueba);
      contador = 0;

      if ($testComponent.find(".row").length) {
        $testComponent.find(".row").each(function () {
          let $row = $(this);

          preCOLS.forEach((preCOL) => {
            let sumaCOL = 0;

            for (let index = 1; index <= 12; index++) {
              let $col = $(this).find(">." + preCOL + index);
              $col.each(function () {
                if (
                  $col.length &&
                  $col.css("display") !== "none" &&
                  index !== 12
                ) {
                  sumaCOL += index;
                }
              });
            }

            if (sumaCOL !== 12 && sumaCOL !== 0) {
              error(false, $row, `(suma ${preCOL} = ${sumaCOL}) != 12`);
              contador++;
            }
          });
        });
      }

      if (contador) {
        error(`La suma de los col en algún .row es diferente a 12`);
      } else {
        ok(`La suma de los col en todos .row es igual a 12`);
      }

      //Elementos que se salen de viewport
      numerador(conPrueba);
      contador = 0;

      $testComponent.find("*").each(function () {
        function omitir($elementos) {
          $elementos.each(function () {
            $(this).addClass("no-revisar-scroll");
          });
          return true;
        }
        let positionX = $(this).offset().left;
        let width = $(this).outerWidth();
        let viewportWidth = $("body").width();

        omitir($testComponent.find(".slick-slider").find("*"));

        if ($(this).css("display") == "none") {
          omitir($(this).find("*"));
        }

        if (
          0 < positionX + width - viewportWidth &&
          !$(this).hasClass("no-revisar-scroll") &&
          $(this).prop("tagName") !== "CITE"
        ) {
          contador++;

          error(
            false,
            $(this),
            `<cite class="parpadea"> ⇥ </cite> viewport`,
            true
          );
        }
      });

      if (contador) {
        error(
          `Hay elementos que se salen del viewport`,
          $testComponent,
          `Scroll horizontal <cite class="parpadea"> ➔ </cite>`
        );
      } else {
        ok(`Ningún elemento se sale del viewport`);
      }

      //Final mostrar mensaje @@@@@@@@@@@@
      setTimeout(() => {
        // alert('entre');
      }, 3000);

      let testOk = mensaje ? false : true;

      mensaje += `
  ----------------------------------------
      Pruebas correctas: ${pruebaValida}
      Pruebas incorrectas: ${pruebaInvalida}
  !!!Fin PRUEBAS DE CALIDAD ----------------
  `;
      console.log(mensaje);
      // alert(mensaje);
    }
    primerIngreso = false;
  });
};

document.addEventListener("DOMContentLoaded", test);
document.addEventListener("resize", test);
$(document).ready(function () {
  // actualizaremos el zoom cuando la ventana cambie de tamaño
  $(window).on("resize", test);
});
