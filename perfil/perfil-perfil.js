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

const userName = localStorage.getItem('usuario');
const property = 'Tercero D';
const email = 'Luis@contact.es';
const tlfNumber = '555 55 55 55';
const userWork = 'Activo';
const userNote = 'Me encantan las juntas de vecinos. No me pierdo ninguna';




personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);
personalDates.content('Trabajo', userWork);
personalDates.content('Frase', userNote);





