'use strict';

import  '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import timer from './modules/timer';
import toggleMenu from './modules/toggleMenu';
import popup from './modules/popup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validAllForm from './modules/validAllForm';

// Timer
timer();
// модальное окно
toggleMenu();
// Табы
tabs();
// Popup
popup();
// slider
slider();
// смена картинок
changeImg();
// calculate 
calc();
// валидация
validAllForm();
// send AJAX form
sendForm();