$(function(){
    //Validación del formulario de distribuidores
    $("#form-distrb").validate({
        //Reglas de validación
        rules:{
            // NAME del INPUT
            nombre:{
                required: true,
                minlength: 3
            },
            appat:"required",
            apmat: "required",
            correo:{
                required: true,
                email: true
            },
            tel:{
                required: true,
                digits: true,
                maxlength: 10
            },
            vehiculo:"required",
            producto:{
                required: true,
                minlength: 2
            }
        },
        messages:{
            nombre:{
                required: "Debe ingresar un mínimo de 3 caracteres",
                minlength: "Debe tener un mínimo de 3 caracteres"
            },
            correo:{
                required: "Debe llenar este campo",
                email: "Debe ingresar un correo válido"
            },
            tel:{
                required: "Debe llenar este campo",
                maxlength: "Debe ingresar un teléfono válido"
            },
            vehiculo: "Debe ingresar una opcion",
            producto:{
                required: "Debe llenar este campo",
                minlength: "Debe escoger un mínimo de 2 opciones"
            }
        }
    });
});


