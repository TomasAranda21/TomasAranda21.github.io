// Variables
const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario .formulario__inputs');
const mensajesForm = document.querySelector('#todos_mensajes');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// const inputsGrupoNombre = document.querySelector('.grupos_inputs-nombre')
// const inputsGrupoEmail = document.querySelector('.grupos_inputs-email')
// const inputsGrupoMensaje = document.querySelector('.grupos_inputs-mensaje')

formulario.addEventListener('submit', validarFormulario);


// Objetos
const campos = {
    nombre: false,
    email: false,
    mensaje:false
}

let usuarioNombre,
    usuarioEmail,
    usuarioMensaje;


const expresiones = {
	nombre_exp: /^[a-zA-Z0-9\_\-\s]+$/,
	email_exp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	mensaje_exp: /^[a-zA-Z0-9\_\-\?\!\¿\¡\.\,\s\/]+$/
}



class UI {
    imprimirAlerta(mensaje) {
        // crear el div
        const divMensaje = document.createElement('div');

        // No duplicar mensaje
        NoduplicarMensaje()
    
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Si es de tipo error agrega una clase
        divMensaje.classList.add('msj_errores-activo');

        // Insertar en el DOM
        mensajesForm.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 4000);
    }
    
    imprimirAlertaExito(){
        const divExito = document.createElement('div');
        divExito.classList.add('mensajes-exito')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.textContent = '¡GRACIAS!'
        p1.classList.add('gracias')

        p2.textContent = 'Su mensaje ha sido enviado Correctamente.'
        p2.classList.add('mensaje-enviado')

        p3.textContent = 'En breve recibira nuestra respuesta.'
        p3.classList.add('respuesta')

        divExito.appendChild(p1)
        divExito.appendChild(p2)
        divExito.appendChild(p3)

        // No duplicar mensaje
        NoduplicarMensaje()

        mensajesForm.appendChild(divExito);
    

        setTimeout( () => {
            divExito.remove();
        }, 5000);
    }

    inputsGrupos(input){
        const inputsGrupo = document.querySelector(`.grupos_inputs-${input}`)
        inputsGrupo.classList.remove('contact__input-ok');
    }
}

// tomas@tomas.com


// Crear la instancia de la clase
ui = new UI();





// Funciones
function validarFormulario(e){
    e.preventDefault();

    const peticion = new XMLHttpRequest();
    peticion.open('POST', '../php/formulario.php');
    
    usuarioNombre = nombre.value.trim();
    usuarioEmail = email.value.trim();
    usuarioMensaje = mensaje.value.trim();


    if(!validarForm()){
        const parametros = 'nombre='+ usuarioNombre +'&email='+ usuarioEmail +'&mensaje='+ usuarioMensaje; 
        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        peticion.onload = () => {
            nombre.value = '';
            email.value = '';
            mensaje.value = '';
        }
        
        peticion.onreadystatechange = () => {
            if(peticion.readyState === 4 && peticion.status === 200){
                ui.inputsGrupos('nombre');
                ui.inputsGrupos('mensaje');
                ui.inputsGrupos('email');
                ui.imprimirAlertaExito();
            }
        }
        peticion.send(parametros);
    }else{
        ui.imprimirAlerta('¡A ocurrido un error en el envio!, Por favor intenta de nuevo.', 'error');
    }
    
}


// No duplicar el formulario
function NoduplicarMensaje(){
    while(mensajesForm.firstChild) {
        mensajesForm.removeChild(mensajesForm.firstChild);
    }
}



function validarForm(){
    if(!campos.nombre || nombre.value === '' || !campos.email || email.value === '' || !campos.mensaje || mensaje.value === ''){
        ui.imprimirAlerta('¡Error! Por favor llena todos los campos Correctamente.', 'error');
        validarCampos();
    }
}



function validarCampos(e){
    switch(e.target.name){
        case 'nombre': 
            validarInputs(expresiones.nombre_exp, e.target, 'nombre');
        break;

        case 'email': 
            validarInputs(expresiones.email_exp, e.target, 'email');
        break;

        case 'mensaje': 
            validarInputs(expresiones.mensaje_exp, e.target, 'mensaje');
        break;
    }
}


function validarInputs(expresion, input, campo){
    const inputsGrupo = document.querySelector(`.grupos_inputs-${campo}`);
    if(!expresion.test(input.value)){
        ui.imprimirAlerta(`Por Favor escribe un ${input.name} valido`, 'error');
        inputsGrupo.classList.remove('contact__input-ok');
        inputsGrupo.classList.add('contact__input-errores');
        campos[campo] = false;
    }else{
        inputsGrupo.classList.remove('contact__input-errores');
        inputsGrupo.classList.add('contact__input-ok');

        campos[campo] = true;
    }
}



inputs.forEach(e => {
    e.addEventListener('blur', validarCampos);
    e.addEventListener('keyup', validarCampos);
})





