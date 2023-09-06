'use strict'

let ul = document.getElementById('ul');

var menu = document.getElementById('menu').addEventListener('click',function(){
    
    this.classList.toggle('close');
    ul.classList.toggle('showUl');
   
})