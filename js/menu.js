
const index = document.getElementById('btn-index');
const valores = document.getElementById('btn-valores');
const servicios = document.getElementById('btn-servicios');
const contactanos = document.getElementById('btn-contactanos');
const preguntas = document.getElementById('btn-preguntas');

function disableIndex(){
    if(index.click = true){
        index.classList.add('disabled')
        valores.classList.remove('disabled')
        servicios.classList.remove('disabled')
        contactanos.classList.remove('disabled')
        preguntas.classList.remove('disabled')
    }
}
function disabled() {
    if (valores.click = true) {
        index.classList.remove('disabled')
        valores.classList.add('disabled')
        servicios.classList.remove('disabled')
        contactanos.classList.remove('disabled')
        preguntas.classList.remove('disabled')
    }
}
function disableServicios() {
    if (servicios.click = true) {
        index.classList.remove('disabled')
        servicios.classList.add('disabled')
        valores.classList.remove('disabled')
        contactanos.classList.remove('disabled')
        preguntas.classList.remove('disabled')
    }
}
function disableContactanos() {
    if (contactanos.click = true) {
        index.classList.remove('disabled')
        contactanos.classList.add('disabled')
        valores.classList.remove('disabled')
        servicios.classList.remove('disabled')
        preguntas.classList.remove('disabled')
    }
}

function disablePreguntas() {

    if (preguntas.click = true) {
        index.classList.remove('disabled')
        preguntas.classList.add('disabled')
        valores.classList.remove('disabled')
        servicios.classList.remove('disabled')
        contactanos.classList.remove('disabled')
    }
}




