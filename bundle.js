/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/geolocalizacion/index.js
/* harmony default export */ function geolocalizacion() {
    getLocation()
    
}
function iniciarMap(lat,lng) {
    let cordenadas = {lat,lng}
    
    let contenedorMapa = document.getElementById('location')
    let map = new google.maps.Map(contenedorMapa,{
        zoom:18,
        center:cordenadas
    })
    let marker = new google.maps.Marker({
        position:cordenadas,
        map
    })
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}
function showPosition(position) {
    iniciarMap(position.coords.latitude,position.coords.longitude)
}

;// CONCATENATED MODULE: ./src/js/modal/index.js
/* harmony default export */ function modal() {
    activarModal(x)
    desactivarModal(x)
}
let elementoModal = document.getElementById('modal')
let elementoContainerCross = document.getElementById('container-cross')
function activarModal(cb) {
    let btn = document.getElementById('btn')
    let btn2 = document.getElementById('btn2')
    btn.addEventListener('click',function () {
        cb('block','hidden')
    })
    btn2.addEventListener('click',function () {
        cb('block','hidden')
    })
}

function desactivarModal(cb) {
    let elementoCross = document.getElementById('icon-cross')
    elementoCross.addEventListener('click',function () {
        cb('none','scroll')
    })
}
function x(display,overflow) {
    elementoContainerCross.style.display = display
    document.body.style.overflowY  = overflow
    elementoModal.style.display = display
}
;// CONCATENATED MODULE: ./src/js/modal/Selectbox.js
/* harmony default export */ function Selectbox() {
    desplegarOpciones()
}
let activacion = true

function desplegarOpciones() {
    let elemetoSelect = document.getElementById('select')
    let elemetoOpciones = document.getElementById('opciones')
    elemetoSelect.addEventListener('click',function (params) {
        
        if (activacion) {
            elemetoOpciones.style.transform = 'scaleX(1)'
            activacion = false

            console.log('true');
            return activacion
        }
        elemetoOpciones.style.transform = 'scaleX(0)'
        console.log('false');
        activacion = true
        return activacion
    })
}
;// CONCATENATED MODULE: ./src/js/validarsw.js
/* harmony default export */ function validarsw() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
           .then(reg => console.log('Registro de SW exitoso', reg))
            .catch(err => console.warn('Error al tratar de registrar el sw', err))
    }
}


;// CONCATENATED MODULE: ./src/js/btn-install/btnInstall.js
/* harmony default export */ function btnInstall() {
    installprompt()
}

let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById("install_button");

function installprompt() {
    window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.hidden = false;
        installButton.addEventListener("click", installApp);
    });
}

function installApp() {
    deferredPrompt.prompt();
    installButton.disabled = true;
    deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
            console.log("PWA setup accepted");
            installButton.hidden = true;
        } else {
            console.log("PWA setup rejected");
        }
        installButton.disabled = false;
        deferredPrompt = null;
    });
}
;// CONCATENATED MODULE: ./src/js/app.js





/* harmony default export */ function app() {
    geolocalizacion()
    modal()
    Selectbox()
    validarsw()
    btnInstall()
}



;// CONCATENATED MODULE: ./src/index.js
/*import  './css/style.css'
import  './css/reset.css'
import './asset/iconos/style.css'*/


//import "./asset/img/Icono-144-px.png"; import"./asset/img/consola.png"; import"./asset/img/pcgamer.jpg";  import"./asset/img/1.png"; import"./asset/img/5.png"; import"./asset/img/6.png"; import"./asset/img/Anpar.jpg"; import"./asset/img/asphalt8.jpg"; import"./asset/img/assassin.jpg"; import"./asset/img/b.jpg"; import"./asset/img/battle.jpg"; import"./asset/img/battlefield.jpg"; import"./asset/img/carrace.jpg"; import"./asset/img/circle.png"; import"./asset/img/coldwar.png"; import"./asset/img/controller.jpg"; import"./asset/img/controller1.png"; import"./asset/img/controller5.png"; import"./asset/img/controller6.png"; import"./asset/img/controller7.png"; import"./asset/img/craft.jpeg"; import"./asset/img/cube.png"; import"./asset/img/cube2.png"; import"./asset/img/cube3.png"; import"./asset/img/download.jpg"; import"./asset/img/download__4_-removebg-preview.png"; import"./asset/img/feedback.jpg"; import"./asset/img/fifa21.webp"; import"./asset/img/flame.jpg"; import"./asset/img/fortnit.jpg"; import"./asset/img/fortnite.jpg"; import"./asset/img/game.jpg"; import"./asset/img/game2.jpg"; import"./asset/img/game3.jpg"; import"./asset/img/gamebg.jpg"; import"./asset/img/image9.jpg"; import"./asset/img/incrdible.png"; import"./asset/img/jumanji.jpg"; import"./asset/img/nba.jpg"; import"./asset/img/NEW DESING.png"; import"./asset/img/pes22.webp"; import"./asset/img/rakuto.png"; import"./asset/img/spider.png"; import"./asset/img/vaklish.png"; import"./asset/img/warxone.jpg"; import"./asset/img/wras.jpg";

app()

/******/ })()
;