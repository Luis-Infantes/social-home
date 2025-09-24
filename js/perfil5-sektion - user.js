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

const userName = 'Enrique Martín';
const property = '5º A';
const email = 'Enrique@admin.es';
const tlfNumber = '555 55 55 55';
const userWork = 'Jubilado';
const userNote = 'Soy el presidente de la comunidad. Escríbeme para cualquier consulta';




personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);
personalDates.content('Situación laboral', userWork);
personalDates.content('Notas', userNote);

const returnBack = document.getElementById('return-back').onclick = function () {

    addEventListener('click', () => {history.back()});
    
};


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

addFollower('img/imagen3.png', 'perfil3-user.html');
addFollower('img/image2.png', 'perfil2-user.html');
addFollower('img/image4.png', 'perfil4-user.html');
addFollower('img/image1.png', 'perfil1-user.html');
addFollower('img/image6.png', 'perfil6-user.html');

//------------------------------------------------------------------------------------------

