$(document).ready(function(){
    //valida el formulario mediante JQuery Validate
    $("#form-login").validate({
        rules:{
            nomb_usuario:"required",
            contraseña:"required"
        },
        messages:{
                nomb_usuario:"Debe llenar este campo",
                contraseña:"Debe llenar este campo"
            }
        });
    });

    //Redirige la pagina actual a la de registro de usuarios
function redirect(){
    location.replace('registro_user.html');
}

