//Funcion de develar contraseña
function revPass(){
    let pass_input = document.getElementById('contraseña').type;
    console.log(pass_input);
    if (pass_input === 'password'){
        document.getElementById('contraseña').onclick(document.getElementById('contraseña').type='text');
    }
    else{
        document.getElementById('contraseña').onclick(document.getElementById('contraseña').type='password');
    }
}

//Desde el botón "Registrarme" redirige la pagina actual a la de registro de usuarios
function redirect(){
    location.replace('registro_user.html');
}

