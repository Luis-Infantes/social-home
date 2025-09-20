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

const userName = 'Marisa Pilar';
const property = '2º A';
const email = 'MariPi@contact.es';
const tlfNumber = '222 22 22 22';
const userWork = 'Activo';
const userNote = 'Odio las reuniones. Todos los meses son gastos';




personalDates.content('Nombre', userName);
personalDates.content('Piso', property);
personalDates.content('email', email);
personalDates.content('Tlf', tlfNumber);
personalDates.content('Situación laboral', userWork);
personalDates.content('Notas', userNote);

const returnComun = document.getElementById('return').onclick = function () {

    window.location.href = 'comunity.html';
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
            cell.style.backgroundColor = '#87f0e2';
            cell.style.color = '#064b2e'
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