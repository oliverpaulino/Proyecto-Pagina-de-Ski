var error = document.getElementById('error')
var correo = document.getElementById('correo')
const nombre = document.getElementById('nombre');
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')




function validar(correo){
    let re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



    if(nombre.value.length == '' || correo.length == '' || asunto.value.length == '' || mensaje.value.length == ''){
        error.innerHTML = 'Llenar todos los campos';
        event.preventDefault();

    }else if(!re.test(correo)){
        error.innerHTML = 'Por favor escriba el correo de forma correcta';
        event.preventDefault();
    }else{
        error.innerHTML = '';
    }
}