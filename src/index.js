// datos primarios
const nombre = document.querySelector('#nombreFormContacto');
const apellido = document.querySelector('#apellidosFormContacto');
const domicilio = document.querySelector('#domicilioFormContacto');
const nacimiento = document.querySelector('#nacimientoFormContacto');

//sexo
const varon = document.getElementById('varon');
const mujer = document.getElementById('mujer');
const otro = document.getElementById('otro');

//contraseña
const contrasenia = document.querySelector('#contrasenia')

//preguntas

const pasatiempos = document.querySelector('#pasatiempos');
const familia = document.querySelector('#familia');
const persona = document.querySelector('#persona');
const trabajo = document.querySelector('#trabajo');


//boton
const btnDatos = document.querySelector('#recopilaDatos');

btnDatos.addEventListener('click', () => {

    console.log('Nombre: ' + nombre.value + ' /' + 'Apellido: ' + apellido.value + ' /' + 'Domicilio: ' + domicilio.value + ' /' + 'Nacimiento: ' + nacimiento.value + ' /' + 'Contraseña: ' + contrasenia.value);

    if (varon.checked) {
        console.log(varon.value);
    } else if (mujer.checked) {
        console.log(mujer.value);
    } else if (otro.checked) {
        console.log(otro.value);
    }
    console.log('Preg 1: ' + pasatiempos.value + ' /' + 'Preg 2: ' + familia.value + ' /' + 'Preg 3: ' + persona.value + ' /' + 'Preg 4: ' + trabajo.value);
})

