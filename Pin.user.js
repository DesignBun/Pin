// ==UserScript==
// @name         Pin
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://www.pinterest.ru/pin-builder/*
// @icon         https://www.google.com/s2/favicons?domain=pinterest.ru
// @homepage     https://github.com/DesignBun/Pin
// @updateURL    https://github.com/DesignBun/Pin/raw/main/Pin.user.js
// @grant        window.close
// ==/UserScript==

const title="111" // Название альбома куда сохранять пины
    setTimeout(() => {
        //let elements = document.querySelector(".CCY.czT.eEj.iyn.FTD.L4E.DI9.BG7");
        let elements = document.querySelector('div[title="'+title+'"]');
        if (elements) {
            elements.click();
        } else {
            console.log('Нету элемента');
            alert(`Что то пошло не так, отключите скрипт`);
        }
    }, Math.random() * 5000 + 5000);
