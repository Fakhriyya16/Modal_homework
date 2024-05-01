"use strict";

let modalButton = document.querySelector(".modal-button-custom");
let closeIcon = document.querySelector(".fa-solid");
let closeButton = document.querySelector(".closebtn");

modalButton.addEventListener("click",function(){
    document.querySelector(".modal-open-part").classList.add("active-modal");
    document.querySelector(".screen").classList.add("background-dark");
})

closeIcon.addEventListener("click",function(){
    document.querySelector(".modal-open-part").classList.remove("active-modal");
    document.querySelector(".screen").classList.remove("background-dark");
})

closeButton.addEventListener("click",function(){
    document.querySelector(".modal-open-part").classList.remove("active-modal");
    document.querySelector(".screen").classList.remove("background-dark");
})