//Funciona correctamente, añadir el resto de campos y validaciones
$(function(){
    $("#form-distrb").validate({
        //Reglas de validación
        rules:{
            // NAME del INPUT
            nombre:{
                required: true,
                minlength: 3
            },
            pass1: "required",
            pass2:{
                required: true,
                equalTo: "#pass1"
            }
        },
        messages:{
            nombre: "Debe ingresar un mínimo de 3 caracteres"
        }
    });
});


