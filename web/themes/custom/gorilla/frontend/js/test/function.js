
    //FUNCIONES=============================================================
    //Validas y muestra el mensaje de las pruebas negativas
    export function error(consolLog, $elemento, errorText, viewport) {
      if (consolLog) {
        validarPrueba(false);
        mensaje += `${consolLog} \u2718`;
      }

      if ($elemento && errorText && !viewport) {
        $elemento.addClass("test-error");
        const $contentMensaje = $elemento.find(">.test-error__content-mensaje");
        if ($contentMensaje.length) {
          $contentMensaje.append(`
        <cite class="test-error__mensaje">${errorText}</cite>
        `);
        } else {
          $elemento.append(`
        <cite class="test-error__content-mensaje">
        <cite class="test-error__mensaje">${errorText}</cite>
        </cite>
        `);
        }
      }

      if ($elemento && errorText && viewport) {
        $elemento.addClass("test-error");
        const $contentMensaje = $elemento.find(">.test-error__content-mensaje");
        if ($contentMensaje.length) {
          $contentMensaje.append(`
        <cite class="test-error__mensaje test-error__mensaje--viewport">${errorText}</cite>
        `);
        } else {
          $elemento.append(`
        <cite class="test-error__content-mensaje test-error__content-mensaje--viewport">
        <cite class="test-error__mensaje">${errorText}</cite>
        </cite>
        `);
        }
      }

      return true;
    }

    //Validas y muestra el mensaje de las pruebas positivos
    export function ok(consolLog) {
      validarPrueba(true);
      mensaje += `${consolLog} \u2714`;
      return true;
    }

    //Mostrar etiquetas
    export function etiqueta($elemento, etiquetaText, nombreComponente) {
      if ($elemento && etiquetaText && !nombreComponente) {
        $elemento.addClass("test-etiqueta");
        const $contentMensaje = $elemento.find(
          ">.test-etiqueta__content-mensaje"
        );
        if ($contentMensaje.length) {
          $contentMensaje.append(`
        <cite class="test-etiqueta__mensaje">${etiquetaText}</cite>
        `);
        } else {
          $elemento.append(`
        <cite class="test-etiqueta__content-mensaje">
        <cite class="test-etiqueta__mensaje">${etiquetaText}</cite>
        </cite>
        `);
        }
      }

      if ($elemento && etiquetaText && nombreComponente) {
        $elemento.addClass("test-etiqueta");
        const $contentMensaje = $elemento.find(
          ">.test-etiqueta__content-mensaje--nombre-componente"
        );

        if (!$contentMensaje.length) {
          $elemento.append(`
        <div class="test-etiqueta__content-mensaje test-etiqueta__content-mensaje--nombre-componente">
        <cite class="test-etiqueta__mensaje">${etiquetaText}</cite>
        </div>
        `);
        }
      }

      return true;
    }
    export function etiqueta2($elemento, etiquetaText, nombreComponente) {
      if ($elemento && etiquetaText && !nombreComponente) {
        $elemento.addClass("test-etiqueta2");
        const $contentMensaje = $elemento.find(
          ">.test-etiqueta2__content-mensaje"
        );
        if ($contentMensaje.length) {
          $contentMensaje.append(`
        <cite class="test-etiqueta2__mensaje">${etiquetaText}</cite>
        `);
        } else {
          $elemento.append(`
        <cite class="test-etiqueta2__content-mensaje">
        <cite class="test-etiqueta2__mensaje">${etiquetaText}</cite>
        </cite>
        `);
        }
      }
      return true;
    }

    //Eliminar mensajes y etiquetas
    export function eliminarMensajes() {
      $('body')
        .find(".test-etiqueta__content-mensaje, .test-etiqueta2__content-mensaje, .test-error__content-mensaje")
        .each(function () {
          $(this).remove();
        });

        $('body')
        .find(".test-etiqueta, .test-error, .test-etiqueta2")
        .each(function () {
          if ($(this).hasClass('test-etiqueta')) {
            $(this).removeClass('test-etiqueta');
          }
          if ($(this).hasClass('test-etiqueta2')) {
            $(this).removeClass('test-etiqueta2');
          }
          if ($(this).hasClass('test-error')) {
            $(this).removeClass('test-error');
          }
        });
      return true;
    }

    //Crea el encabezado de las pruebas
    export function numerador(num) {
      num++;
      mensaje += `
    ${num}. `;
      return true;
    }

    //LLeva la  cuenta de las pruebas correctas e incorrectas
    export function validarPrueba(isCorrect) {
      if (isCorrect) {
        pruebaValida++;
      } else {
        pruebaInvalida++;
      }
      return true;
    }
    //FIN FUNCIONES========================================================
