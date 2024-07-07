$(document).ready(function () {
  /* Tooltip botón Enviar correo*/
  $('[data-bs-toggle="tooltip"]').tooltip();

  /* Alerta Botón Enviar correo */
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
  /*  modificar el color del texto de los títulos
"INGREDIENTES" y "PREPARACIÓN"  */
  $("section div div h2").dblclick(function () {
    $(this).css({ color: "red" });
  });

  /* desaparecer y aparecer el contenido en todas
las tarjetas */
  // $(".card").click(function () {
  //   $(".card-body").toggle();
  // });

  $(".card-title").on("click", function () {
    // Seleccionar el elemento padre con la clase "card" y toggle el contenido
    $(this).parents(".card").find(".card-text").toggle();
    // Añadir la clase .rotate-drop-down a la imagen con id dropdown
    $(this).find("#dropdown").toggleClass("rotate-drop-down");
    $(this).find("#dropdown").toggleClass("rotate-drop-up");
  });
});
