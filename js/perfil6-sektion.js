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

const userName = 'Amparo Vermú';
const property = '6º A';
const email = 'AmparitoVer@contact.es';
const tlfNumber = '666 66 66 66';
const userWork = 'Activo';





personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);
personalDates.content('Situación laboral', userWork);

const userInfo = document.getElementById('user-info');

//--------Función situación laboral--------------------//

// Crear contenedor

const workContainer = document.createElement('div');
workContainer.className = 'work-container';


// Crear situación laboral actual

const work = document.createElement('p');
work.textContent = 'Activo';
work.className = 'actual-work';

// Cargar estado guardado en localStorage
const workSave = localStorage.getItem('actualwork6');
if (workSave) {
    work.textContent = workSave;
}

workContainer.appendChild(work);


// Botón de editar situación laboral

const workEdit = document.createElement('button');
workEdit.textContent = '✏️';
workEdit.className = 'work-edit';

workEdit.addEventListener('click', () => {
    const actualWork = work.textContent;

    // Crear campo editable
    const workInput = document.createElement('input');
    workInput.value = actualWork
    workInput.className = 'work-input';
    workInput.rows = 3;

    // Crear botón de guardar
    const workBtn = document.createElement('button');
    workBtn.textContent = '💾';
    workBtn.className = 'work-btn';

    // Limpiar contenedor y añadir campo editable + botón
    workContainer.innerHTML = '';
    workContainer.appendChild(workInput);
    workContainer.appendChild(workBtn);

    // Guardar en localStorage al hacer clic
    workBtn.addEventListener('click', () => {
        const newWork = workInput.value;
        localStorage.setItem('actualwork6', newWork);

        // Volver a mostrar el texto y botón de editar
        work.textContent = newWork;
        workContainer.innerHTML = '';
        workContainer.appendChild(work);
        workContainer.appendChild(workEdit);
    });
});

// Añadir todo al contenedor principal
workContainer.appendChild(workEdit);



userInfo.appendChild(workContainer);
//---------------------------------------------------------//

//-----Función estado de ánimo----------------------------//



// Crear contenedor
const moodContainer = document.createElement('div');
moodContainer.className = 'mood-container';

// Crear párrafo con estado de ánimo
const mood = document.createElement('p');
mood.textContent = 'Hoy me siento tranquilo';
mood.className = 'mood-styles';

// Cargar estado guardado en localStorage
const moodSave = localStorage.getItem('actualmood6');
if (moodSave) {
    mood.textContent = moodSave;
}

moodContainer.appendChild(mood);

// Crear botón de editar
const moodEdit = document.createElement('button');
moodEdit.textContent = '✏️';
moodEdit.className = 'mood-edit';

moodEdit.addEventListener('click', () => {
    const actualText = mood.textContent;

    // Crear campo editable
    const moodInput = document.createElement('input');
    moodInput.value = actualText;
    moodInput.className = 'mood-input';
    moodInput.rows = 3;

    // Crear botón de guardar
    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾';
    saveBtn.className = 'work-btn';

    // Limpiar contenedor y añadir campo editable + botón
    moodContainer.innerHTML = '';
    moodContainer.appendChild(moodInput);
    moodContainer.appendChild(saveBtn);

    // Guardar en localStorage al hacer clic
    saveBtn.addEventListener('click', () => {
        const newMood = moodInput.value;
        localStorage.setItem('actualmood6', newMood);

        // Volver a mostrar el texto y botón de editar
        mood.textContent = newMood;
        moodContainer.innerHTML = '';
        moodContainer.appendChild(mood);
        moodContainer.appendChild(moodEdit);
    });
});

// Añadir todo al contenedor principal
moodContainer.appendChild(moodEdit);
userInfo.appendChild(moodContainer);

//--------------------------------------------------------//


const returnLogin = document.getElementById('return-login').onclick = function () {

    window.location.href = 'index.html';
};

// ------------Funcion para contenedor de mensajes -------//

//-------------Mensajes privados del presidente-----------//

const userMsn = document.getElementById('user-msn');

function msnGeneral(msnName, msnTittle) {
    const msnContainer = document.createElement('div');
    msnContainer.className = 'msn-container';

    //Nombre
    const msnType = document.createElement('h2');
    msnType.textContent = msnName;
    msnType.className = 'msn-names';
    msnContainer.appendChild(msnType);

    

    //Título
    
    const msnText = document.createElement('p');
    msnText.textContent = msnTittle;
    msnText.className = 'msn-text';

    
    msnContainer.appendChild(msnText);

    userMsn.appendChild(msnContainer);
}





const presidentName = 'Mensajes privados';
let presidenTittle = 'Acceso mensajes del presidente';

let otherName = '';
let otherTittle = 'Acceso mensajes de vecinos';


msnGeneral(presidentName,presidenTittle);
msnGeneral( otherName,otherTittle);

//--------------------------------------------------------------------------


//----Función para followers----------------------

function followers(followerImg = null, followerLink = null, followersTittle) {

    const followersContainer = document.createElement('div');
    followersContainer.className = 'followers-container';

    // Definir el título de la sección followers
    const followerTittle = document.createElement('h2');
    followerTittle.textContent = followersTittle;
    followerTittle.className = 'follower-tittle';
    followersContainer.appendChild(followerTittle);

    if (followerImg) {
        const followerIm = document.createElement('img');
        followerIm.src = followerImg;
        followerIm.className = 'follower-img';

        if (followerLink) {
            const followerli = document.createElement('a');
            followerli.href = followerLink;
            followerli.appendChild(followerIm);
            followersContainer.appendChild(followerli);
        } else {
            followersContainer.appendChild(followerIm);
        }
    }

    userMsn.appendChild(followersContainer);

}

const tittleFolllower = 'Seguidores';
let followersImg1 = 'img/image5.png';
let followersLink1 = 'perfil5-user.html';



let followersImg3 = 'img/image2.png';
let followersLink3 = 'perfil2-user.html';



followers(followersImg1,followersLink1, tittleFolllower);
followers(followersImg3,followersLink3);


//------------------------------------------------------------------------------------------



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
            cell.style.backgroundColor = '#eca2bb';
            cell.style.color = '#690929'
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


//----Tablon de anuncios--------

const contactTittle = document.getElementById('user-contacts');
contactTittle.textContent = 'Tablón de anuncios';
contactTittle.className = 'contact-tittle';

function contactsCard (nameContact, textContact) {

    let contactCard = document.createElement('p');
    contactCard.className = 'contact-card';
    contactCard.textContent = `${nameContact}: ${textContact}`;

    contactTittle.appendChild(contactCard);

}

contactsCard('Manolo Electricista', '91 333 33 33');
contactsCard('Casimiro Fontanero', '91 222 22 22');
contactsCard('Elvira ascensores', '91 444 44 44');
contactsCard('Pintores Portillo', '91 111 33 33');





//--------------------------------------------------------------------------------------------




//----Chat de la comunidad--------

// Funcionalidad para enviar mensajes de texto en el chat

// Definimos una constante con el nombre del usuario
const actualUser = 'Amparo';

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
        
        //Cambio del color de los mensajes del chat segun el usuario que escriba

        if (msg.usuario === actualUser) {
            div.classList.add('mensaje-usuario');
        } 


        if (msg.usuario === 'Santiago') {

            div.classList.add('mensaje-Santiago');


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

        if (msg.usuario === 'Marisa') {

            div.classList.add('mensaje-Marisa');


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


        if (msg.usuario === 'Marla') {

            div.classList.add('mensaje-Marla');


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

        if (msg.usuario === 'Antonio') {

            div.classList.add('mensaje-Antonio');


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
        

         if (msg.usuario === 'Enrique') {

            div.classList.add('mensaje-Enrique');


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