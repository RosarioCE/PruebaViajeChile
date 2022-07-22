/*SECCIÓN CONTACTO_Alert botón Enviar*/

document.getElementById ("correoEnviado").addEventListener("click", function(){
    alert("Correo Enviado");
})


/*SECCIÓN DESTACADOS _ Card toggle_ Aplicado a los títulos de las cards*/

$('.card-title').on('click', function() {
    $('.card-text').toggle('fast', function() {
    });
});


