$(document).ready(function () {
 //$(selector).accion();

 $("#title").html("DOM con jQuery");

 $(".demo").html("Clase seleccionada");

 $(".demo").first().html("primer elemento")

 $("img").attr("src", "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg");

 $("img").attr("title", "Un koala");

 $("#btn").click(function () {
    $("#resultado").toggle();
 });
});