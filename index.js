$(function(){
   calcularPersonaje();

   $("#btn-inicio").click(function(){
      $("#contenedor-inicio").hide();
      $("#contenedor-preguntas").show();
   })

   $("input[type='radio']").on('change', ()=>{
      calcularPersonaje();
   });

   $("#btn-diagnostico").click(function(){
      $("#contenedor-preguntas").hide();
      $("#contenedor-resultado").show();
   });

});

function calcularPersonaje(){
   puntaje=0;
   $.each($("input[type='radio']:checked"), (i, v)=>{
      puntaje += parseInt($(v).val()) ?? 0;
   });
   const personaje = personajes.find(p => puntaje >= p.min && puntaje <= p.max);
   console.log(puntaje);
   console.log(personaje);

   $("#img-personaje").attr("src", 'image/'+personaje.url);
   $("#nombre-personaje").text(personaje.nombre);
   $("#descripcion").text(personaje.descripcion);
}