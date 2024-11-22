'use strict';


let menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    column = document.querySelectorAll('.column'),
    prt = document.getElementById('prompt'),
    adv = document.querySelector('.adv'),
    menuItems = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title');


menuItems[1].textContent = "Второй пункт";
menuItems[2].textContent = "Третий пункт";


let item = document.createElement('li');
item.classList.add('menu-item');
item.textContent = "Пятый пункт";
menu.appendChild(item);


title.textContent = "Мы продаем только подлинную технику Apple";


column[1].removeChild(adv);


prt.textContent = prompt("Ваше отношение к технике Apple", '');


// document.body.style.backgroundImage = 'url(C:/Users/student/Desktop/VitaliyM/JS/JSTest/Task 5/img/apple_true.jpg)';
// body.style.background = 'url(JSTest\Task 5\img\apple_true.jpg)';

var ReplaceBackground = function() {
    document.body.style.background = 'url(C:/Users/student/Desktop/VitaliyM/JS/JSTest/Task 5/img/apple_true.jpg)';
 }

 document.addEventListener("DOMContentLoaded", ReplaceBackground);