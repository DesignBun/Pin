// ==UserScript==
// @name         Pin
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://www.pinterest.com/pin-builder/*
// @match        https://www.pinterest.ru/pin-builder/*
// @icon         https://www.google.com/s2/favicons?domain=pinterest.ru
// @homepage     https://github.com/DesignBun/Pin
// @updateURL    https://github.com/DesignBun/Pin/raw/main/Pin.user.js
// @grant        window.close
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addValueChangeListener
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @grant window.onurlchange
// ==/UserScript==

const title="111" // Название доски куда сохранять пины
const subTitle="111" // Название раздела куда сохранять пины
setTimeout(() => {
    //debugger
    //let elements = document.querySelector(".CCY.czT.eEj.iyn.FTD.L4E.DI9.BG7");
    let elTitle = document.querySelectorAll('div[title="'+title+'"]');
    if (elTitle.length > 0) {
        for (let i = elTitle.length; i > 0; i--) {
            elTitle[i-1].click();
        }
        setTimeout(() => {
            let elSubTitle = document.querySelectorAll('div[title="'+subTitle+'"]');
            if (elSubTitle.length > 0) {
                for (let i = elSubTitle.length; i > 0; i--) {
                    elSubTitle[i-1].click();
                }
            }
        }, Math.random() * 2000 + 2000);
    } else {
        console.log('Нету элемента');
        alert(`Что то пошло не так, отключите скрипт`);
    }
}, Math.random() * 5000 + 5000);

//debugger
