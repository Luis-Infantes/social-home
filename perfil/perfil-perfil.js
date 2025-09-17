//-------------------PERFIL--------------------

const perfilHeader = document.getElementById('social-header')

const nombreUser = localStorage.getItem('usuario') ;

const saludo = document.createElement('h1');
saludo.classList.add('saludo-user');
saludo.textContent = `${nombreUser}`;

perfilHeader.appendChild(saludo);