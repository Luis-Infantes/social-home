//-------LOGIN--------------------------------

//Formulario de acceso

const container = document.querySelector('#login')

// Creación del formulario
const formLogin = document.createElement('form');
formLogin.className = 'login-form';

// Creación de los campos del formulario

// Campo del usuario
const userInput = document.createElement('input');
userInput.type = 'text';
userInput.placeholder = 'Nombre del vecino/a';
userInput.required = true;

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

    const usuario = userInput.value.trim();
    const contrasena = passInput.value.trim();
    const onlyText = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!onlyText.test(usuario)) {

        alert('El campo del nombre solo puede contener letras y espacios');
        return;
    }

    else if (contrasena.length !==6) {

        alert('El campo de la contraseña debe de contener al menos 6 dígitos');
        return;

    } else {

        localStorage.setItem('usuario', usuario);
        window.location.href = '/perfil/perfil.html';

    }
});




// Añadir los elementos al formulario

formLogin.appendChild(userInput);
formLogin.appendChild(passInput);
formLogin.appendChild(submitBtn);

//Añadir formulario al contenedor

container.appendChild(formLogin);


//---------------------------------------------






