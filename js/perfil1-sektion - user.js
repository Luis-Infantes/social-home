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

//const userName = localStorage.getItem('usuario'); pendiente de ""ELIMINAR""
const userName = 'Santiago Torres';
const property = '1º A';
const email = 'SantiThor@contact.es';
const tlfNumber = '111 11 11 11';






personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);






const userInfo = document.getElementById('user-info');

//--------Mostrar situación laboral guardada en local--------------------//

//contenedor que engloba situación laboral

const workContainer = document.createElement('div');
workContainer.className = 'work-container';


//título de laboral actual

const workTittle = document.createElement('h2');
workTittle.textContent = 'Situación Laboral';
workTittle.className = 'work-tittle';

workContainer.appendChild(workTittle);

//Información estática de situación laboral
const work = document.createElement('p');
work.textContent = 'Activo';
work.className = 'actual-work';

// Cargar estado guardado en localStorage
const workSave = localStorage.getItem('actualwork1');
if (workSave) {
    work.textContent = workSave;
}


workContainer.appendChild(work);

userInfo.appendChild(workContainer);
//---------------------------------------------------------//



//-----Función estado de ánimo----------------------------//



//Contenedor que engloba estado de ánimo
const moodContainer = document.createElement('div');
moodContainer.className = 'mood-container';

//Título de estado de ánimo
const moodTittle = document.createElement('h2');
moodTittle.textContent = 'Estado de ánimo';
moodTittle.className = 'mood-tittle';

workContainer.appendChild(moodTittle);

//Información estática con estado de ánimo
const mood = document.createElement('p');
mood.textContent = 'Hoy me siento tranquilo';
mood.className = 'mood-styles';

// Cargar estado guardado en localStorage
const moodSave = localStorage.getItem('actualmood1');
if (moodSave) {
    mood.textContent = moodSave;
}

moodContainer.appendChild(mood);

userInfo.appendChild(moodContainer);

//--------------------------------------------------------//



//------Regresar a la página del usuario---------------------//

document.getElementById('return-back').onclick = function () {

    const usuario = localStorage.getItem('usuario');

     if (usuario === 'Santiago') {

        window.location.href = 'perfil1.html';

   } if (usuario === 'Marisa') {
    
        window.location.href = 'perfil2.html';

   } if (usuario === 'Marla') {
    
        window.location.href = 'perfil3.html';

   } if (usuario === 'Antonio') {
    
        window.location.href = 'perfil4.html';

   } if (usuario === 'Enrique') {
    
        window.location.href = 'perfil5.html';

   } if (usuario === 'Amparo') {
    
        window.location.href = 'perfil6.html';

   } else {

        alert('Dale al botón para volver a tu perfil');
    }
    
};



//--------------------------------------------------------------------------//

//-------Enviar mensajes privados-------------------------------------------


const userSend = document.getElementById('user-send');

// Contenedor para el formulario de mensajes privados
const divSend = document.createElement('div');
divSend.className = 'div-send';
userSend.appendChild(divSend);

//Título formulario
const tittleSend = document.createElement('h2');
tittleSend.textContent = 'Enviar mensaje privado';
tittleSend.className = 'tittle-send';
divSend.appendChild(tittleSend);

//Formulario de mensajes privados
const formSend = document.createElement('form');
formSend.className = 'form-send';
divSend.appendChild(formSend);

//Campo de entrada de texto
const textareaSend = document.createElement('textarea');
textareaSend.type = 'texto';
textareaSend.className = 'textarea-send';
formSend.appendChild(textareaSend);

//Botón de envio de mensajes privados
const btnSend = document.createElement('button');
btnSend.textContent = 'Enviar';
btnSend.className = 'btn-send';
formSend.appendChild(btnSend);

//--------------------------------------------------------------------------


//----Función para followers----------------------

const userMsn = document.getElementById('user-msn');


// Crear el contenedor y el título solo una vez
const followersContainer = document.createElement('div');
followersContainer.className = 'followers-container';

const followerTittle = document.createElement('h2');
followerTittle.textContent = 'Seguidores';
followerTittle.className = 'follower-tittle';

// Añadir el título antes de las imágenes
userMsn.appendChild(followerTittle);
userMsn.appendChild(followersContainer);

// Ahora, una función para añadir cada seguidor
function addFollower(followerImg = null, followerLink = null) {
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
}

// Añadir seguidores
addFollower('img/image5.png', 'perfil5-user.html');
addFollower('img/imagen3.png', 'perfil3-user.html');
addFollower('img/image2.png', 'perfil2-user.html');

//------------------------------------------------------------------------------------------









