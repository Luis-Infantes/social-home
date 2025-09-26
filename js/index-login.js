//-------LOGIN--------------------------------

//Formulario de acceso

const container = document.querySelector('#login')

// Creación del formulario
const formLogin = document.createElement('form');
formLogin.className = 'login-form';

// Creación de los campos del formulario


//Mensaje de alerta usuario

let alertUser = document.createElement('p');
alertUser.className = 'alert-user';



// Campo del usuario
const userInput = document.createElement('input');
userInput.type = 'text';
userInput.placeholder = 'Usuario';
userInput.required = true;


// Mensaje de alerta de contraseña

let alertPass = document.createElement('p');
alertPass.className = 'alert-pass';

// Campo de la contraseña
const passInput = document.createElement('input');
passInput.type = 'password';
passInput.placeholder = 'Contraseña';
passInput.required = true;



// Botón de formulario

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Entrar';

//Validación de los datos

formLogin.addEventListener('submit', function(event) {

    event.preventDefault();//Evitamos recargar la página

    const u = userInput.value.trim();
    const p = passInput.value.trim();
    const onlyText = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

//Acceso a los perfiles

    if ((!onlyText.test(u))) {

        alertUser.innerText = 'El campo del nombre solo puede contener letras y espacios';
        return;
    }

    if (p.length !==6) {

        alertPass.innerText ='El campo de la contraseña debe de contener 6 dígitos';
        return;

    }
    
    if (u === 'Santiago' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil1.html';     

    } 
    
    if (u === 'Marisa' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil2.html';     

    } 
    
    if (u === 'Marla' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil3.html';     

    } 
    
    if (u === 'Antonio' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil4.html';     

    } 
    
    if (u === 'Enrique' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil5.html';     

    } 
    
    if (u=== 'Amparo' && p === '123456') {
    
            localStorage.setItem('usuario', u);
            window.location.href = 'perfil6.html';     

    } else {

        alertUser.innerText = 'El usuario es incorrecto';
        return;
    }

});

// Añadir los elementos al formulario
formLogin.appendChild(userInput);
formLogin.appendChild(passInput);
formLogin.appendChild(submitBtn);

//Añadir formulario al contenedor
container.appendChild(formLogin);
container.appendChild(alertUser);
container.appendChild(alertPass);

//---------------------------------------------






