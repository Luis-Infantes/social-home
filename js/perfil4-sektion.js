//-------------------perfil.html--------------------


// ------------Funcion para los datos del perfil-------//

const personalDates = {

    date: document.getElementById('user-info'),

    content: function(key, value) {

        const element = document.createElement('p');

        if (key.toLowerCase() === 'email') {

            element.innerHTML = `${key}: <a href="${value}" class="user-email">${value}</a>`;
        } else {

            element.textContent = `${key}: ${value}`;
        }

        this.date.appendChild(element);

        

    }
};

const userName = 'Tony García';
const property = '4º A';
const email = 'AntonGar@contact.es';
const tlfNumber = '444 44 44 44';
const userWork = 'Autónomo';
const userNote = 'Intento ir a las reuniones pero siempre sale algo a última hora';




personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);
personalDates.content('Situación laboral', userWork);
personalDates.content('Notas', userNote);


const returnComun = document.getElementById('return').onclick = function () {

    window.location.href = 'comunity.html';
};

const returnLogin = document.getElementById('return-login').onclick = function () {

    window.location.href = 'index.html';
};


// ------------Funcion para contenedor de mensajes -------//




 function msnGeneral (msnName, msnTittle, msnGeneral) {

        const msnType = document.createElement('h5');
        const msnText = document.createElement('p');

        msnType.textContent = `${msnName}`;
        msnText.textContent = ` ${msnTittle}`;

        
        msnType.className = 'msn-names';
        msnText.className = 'msn-text';

        msnGeneral.appendChild(msnType);
        msnGeneral.appendChild(msnText);

}


const userMsn = document.getElementById('user-msn');

const presidentName = 'Enrique García';
let presidenTittle = 'Mensajes del presidente de la comunidad';


const neighName = 'Vecinos';
let neighTittle = 'Mensajes de tus vecinos de contacto';


const neighRequestName = 'Solicitudes';
let neighRequestTittle = 'Peticiones de contacto de otros vecinos';

msnGeneral(presidentName,presidenTittle,userMsn);
msnGeneral(neighName,neighTittle,userMsn);
msnGeneral(neighRequestName,neighRequestTittle,userMsn);


//----------------------------------------------------



// ------------Funcion para la sección calendario-------


//--Cabecera del mes actual----------------------------





//------Días de la semana-------------------

function createCalendar (mouth, year, userCalendar) {

    const calendarGeneral = document.getElementById(userCalendar);
    calendarGeneral.innerHTML = '';

    const mothNames = [

    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];


    const mothTittle = document.createElement('h4');

    mothTittle.textContent = `${mothNames[mouth]} (${year})`;
    mothTittle.classList.add('calendar-tittle');

    calendarGeneral.appendChild(mothTittle);


    const daysweek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    const calendarDate = new Date(year, mouth, 1);

    const today = new Date();

    const table = document.createElement('table');
    table.classList.add('user-Calendar');

    // Cabezera de los días de la semana

    const calendarHeader = document.createElement('tr');
    daysweek.forEach(day => {

        const th = document.createElement('th');
        th.textContent = day;
        calendarHeader.appendChild(th);

    });

    table.appendChild(calendarHeader);

    // Espacios vacios antes del primer día

    let file = document.createElement('tr');

    let daysWeek = (calendarDate.getDay() + 6) %7;// Ajustes para que el lunes comience desde el 0

    for (let i = 0; i < daysWeek; i++) {

        file.appendChild(document.createElement('td'));
    }


    // Días del mes

    while (calendarDate.getMonth() === mouth) {

        const cell = document.createElement('td');
        cell.textContent = calendarDate.getDate();
   


    // Resaltar día actual

        if (
            calendarDate.getDate() === today.getDate() &&
            calendarDate.getMonth() === today.getMonth() &&
            calendarDate.getFullYear() === today.getFullYear()
        ) {
            cell.style.backgroundColor = '#db95e9';
            cell.style.color = '#5e035e'
            cell.style.fontWeight = 'bold';
            cell.style.borderRadius = '12px';
        }

            file.appendChild(cell);


        if (file.children.length === 7) {

            table.appendChild(file);
            file = document.createElement('tr');
        }

            calendarDate.setDate(calendarDate.getDate() + 1);
    }

    // Añadir la última fila si no está vacia

    if (file.children.length > 0) {
        while(file.children.length < 7) {

            file.appendChild(document.createElement('td'));
        }
        table.appendChild(file);
    }

    calendarGeneral.appendChild(table);

}

// Mostrar el mes actual

const todayCalendar = new Date();

//const perfilCalendar = document.getElementById('user-calendar');

createCalendar(todayCalendar.getMonth(), todayCalendar.getFullYear(), 'user-calendar');





//----Chat de la comunidad--------

// Funcionalidad para enviar mensajes de texto en el chat

// Definimos una constante con el nombre del usuario
const actualUser = 'Tony';

// Cargamos todos los mensajes escritos al inciar
document.addEventListener("DOMContentLoaded", cargarMensajes);

// Enviar un mensaje

document.getElementById('chat-form').addEventListener('submit', function (e) {

    e.preventDefault();
    enviarMensaje();
});



// Función para cargar mensajes añadidos

function cargarMensajes() {
    const messages = JSON.parse(localStorage.getItem('mensajesChat')) || [];
    const likes = JSON.parse(localStorage.getItem('likesChat')) || {};
    const content = document.getElementById('chat-message');
    content.innerHTML = '';

    messages.forEach((msg, index) => {
        const div = document.createElement('div');
        div.className = 'message';
        div.textContent = `${msg.usuario}: ${msg.texto}`;

        if (msg.usuario === actualUser) {
            div.classList.add('mensaje-usuario');
        } else {
            div.classList.add('mensaje-vecino');

            // Botón de like solo para mensajes de otros usuarios
            const likeHeart = document.createElement('span');
            likeHeart.className = 'like-btn';
            likeHeart.textContent = likes[index] ? '❤️' : '🤍';

            likeHeart.addEventListener("click", function () {
                // Cambia el estado visual
                if (likeHeart.textContent === "🤍") {
                    likeHeart.textContent = "❤️";
                    likes[index] = true;
                } else {
                    likeHeart.textContent = "🤍";
                    delete likes[index];
                }
                // Guarda en localStorage
                localStorage.setItem('likesChat', JSON.stringify(likes));
            });

            div.appendChild(likeHeart);
        }

        // Botón para editar mensajes (solo del usuario actual)
        if (msg.usuario === actualUser) {
            const btnEdit = document.createElement('button');
            btnEdit.textContent = '✏️';
            btnEdit.className = 'editar-btn';
            btnEdit.onclick = function () {
                editarMensaje(index, msg.texto);
            };
            div.appendChild(btnEdit);
        }

        // Botón para eliminar mensajes (solo del usuario actual)
        if (msg.usuario === actualUser) {
            const btnDelete = document.createElement('button');
            btnDelete.textContent = '❌';
            btnDelete.className = 'eliminar-btn';
            btnDelete.onclick = function () {
                eliminarMensaje(index);
            };
            div.appendChild(btnDelete);
        }

        content.appendChild(div);
    });

    // Bajar el scroll hasta el último mensaje
    content.scrollTop = content.scrollHeight;
}



// Función para editar mensajes

function editarMensaje(index, textoActual) {
    const content = document.getElementById('chat-message');
    const mensajeDiv = content.children[index];

    // Reemplaza el texto por un input
    mensajeDiv.innerHTML = '';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = textoActual;
    mensajeDiv.appendChild(input);

    const btnGuardar = document.createElement('button');
    btnGuardar.textContent = '💾';
    btnGuardar.className = 'save-btn';
    btnGuardar.onclick = function() {
        guardarEdicion(index, input.value);
    };
    mensajeDiv.appendChild(btnGuardar);

    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = '❌';
    btnCancelar.className ='cancel-btn';
    btnCancelar.onclick = function() {
        cargarMensajes(); // Vuelve a mostrar los mensajes sin editar
    };
    mensajeDiv.appendChild(btnCancelar);
}


// Función para guardar los mensajes

function guardarEdicion(index, nuevoTexto) {
    if (!nuevoTexto.trim()) return;
    const messages = JSON.parse(localStorage.getItem('mensajesChat')) || [];
    messages[index].texto = nuevoTexto.trim();
    localStorage.setItem('mensajesChat', JSON.stringify(messages));
    cargarMensajes();
}





// Funcion para eliminar mensajes

function eliminarMensaje(index) {

    const messages = JSON.parse(localStorage.getItem('mensajesChat'));
    messages.splice(index,1); // Elimina el mensaje de la posición indicada
    localStorage.setItem('mensajesChat', JSON.stringify(messages));
    cargarMensajes();
}



// Funcion para enviar mensajes


function enviarMensaje () {

    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;


    const messages = JSON.parse(localStorage.getItem('mensajesChat')) || [];
    messages.push({

        usuario: actualUser,
        texto: text,
        fecha: new Date().toISOString()
    });

    localStorage.setItem('mensajesChat', JSON.stringify(messages));
    input.value = '';
    cargarMensajes();
}