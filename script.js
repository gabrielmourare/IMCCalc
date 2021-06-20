'use strict'

const botao = document.querySelector('button')

botao.addEventListener('click', calculaIMC);

function calculaIMC () {

    
        var peso = parseFloat(document.getElementById('peso').value).toFixed(2);
        var altura = parseFloat(document.getElementById('altura').value).toFixed(2);
        var imc = parseFloat(peso / Math.pow(altura, 2));
    
        document.getElementById('imc').setAttribute("value", imc.toFixed(2));


        }