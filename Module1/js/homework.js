'use strict';

// Log and Pass
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

// Alerts
const accessForbidden = 'Доступ запрещен!';
const userCanceled = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';

// Script
const inputValue = prompt('Введите ваш логин:');

if (inputValue === null) {
	alert(userCanceled);
} else if (inputValue.includes(adminLogin)) { // Введённое значения 'admin'?, если нет то:
	const secondInputValue = prompt('Введите ваш пароль:');
	if (secondInputValue === null) {
	alert(userCanceled);
    } else if (secondInputValue.includes(adminPassword)) {
    	alert(welcome);
    } else {
    	alert(accessForbidden);
    }
} else {
	alert(accessForbidden);
}

//console.log(inputValue.includes('admin') );
