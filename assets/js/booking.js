"use strict";

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", getData);

function  init() {
    document.querySelector("form").addEventListener("submit", processForm);

}

function processForm(e){
    e.preventDefault();

    const naam = document.querySelector("#naam").value ;
    const mail = document.querySelector("#mail").value ;
    const telefoon = document.querySelector("#telefoon").value ;
    const naam_zaal = document.querySelector("#naam_zaal").value ;
    const datum_reservering = document.querySelector("#datum_reservering").value ;
    const opmerking = document.querySelector("#opmerking").value ;

    localStorage.setItem("Naam", naam);
    localStorage.setItem("Email", mail);
    localStorage.setItem("Telefoon", telefoon);
    localStorage.setItem("Zaal", naam_zaal);
    localStorage.setItem("Datum", datum_reservering);
    localStorage.setItem("Opmerkingen", opmerking);

    getData();
}

function getData(){
    const booking_naam = localStorage.getItem("Naam");
    const booking_mail = localStorage.getItem("Email");
    const booking_tel = localStorage.getItem("Telefoon");
    const booking_zaal = localStorage.getItem("Zaal");
    const booking_datum = localStorage.getItem("Datum");
    const booking_opmerkingen = localStorage.getItem("Opmerkingen");

    const p_naam = document.querySelector("#booking_naam2");
    const p_mail = document.querySelector("#booking_mail2");
    const p_tel = document.querySelector("#booking_telefoon2");
    const p_zaal = document.querySelector("#booking_zaal2");
    const p_datum = document.querySelector("#booking_datum2");
    const p_opmerking = document.querySelector("#booking_opmerking2");

    p_naam.innerHTML = booking_naam;
    p_mail.innerHTML = booking_mail;
    p_tel.innerHTML = booking_tel;
    p_zaal.innerHTML = booking_zaal;
    p_datum.innerHTML = booking_datum;
    p_opmerking.innerHTML = booking_opmerkingen;
}