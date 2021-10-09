/*Выезжающее меню*/
let burgerMenu = document.querySelector('.burger-menu');
let headerMenu = document.querySelector('.header-menu');

burgerMenu.addEventListener('click', handlerAdd);

function handlerAdd(){
	burgerMenu.classList.toggle('burger-menu_active');
	headerMenu.classList.toggle('header-menu_active');
};