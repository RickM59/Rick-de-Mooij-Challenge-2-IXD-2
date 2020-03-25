var interval = setInterval(begroetingsFunctie,1000);

function begroetingsFunctie(){
    
    if (new Date().getHours() >= 0) {
            document.getElementById("groeting").innerHTML = "Goedenacht";
        }

    if (new Date().getHours() >= 6) {
            document.getElementById("groeting").innerHTML = "Goedemorgen";
        }

    if (new Date().getHours() >= 12) {
            document.getElementById("groeting").innerHTML = "Goedemiddag";
        }

    if (new Date().getHours() >= 18) {
            document.getElementById("groeting").innerHTML = "Goedeavond";
        }
}
    
/* Functie bepaalt wat voor soort groeting het marsmannetje ontvangt gebaseerd op de huidige tijd.*/

var interval = achtergrondTijd(begroetingsFunctie,1000);

function achtergrondTijd(){
    if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
        document.body.style.backgroundColor = "#ffbe5c";
    }
    
    if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        document.body.style.backgroundColor = "#7adbf0";
    }
    
    if (new Date().getHours() >= 0 && new Date().getHours() < 6) {
        document.body.style.backgroundColor = "#343435"
    }

        
}

var w = new Date();
var weekdag = new Array(7);
    
weekdag [0] = "Zondag";
weekdag [1] = "Maandag";
weekdag [2] = "Dinsdag";
weekdag [3] = "Woensdag";
weekdag [4] = "Donderdag";
weekdag [5] = "Vrijdag";
weekdag [6] = "Zaterdag";
    
var n = weekdag[w.getDay()];
document.getElementById("weekdag").innerHTML = n;

var d = new Date();
document.getElementById("dag").innerHTML = d.getDate();

var m = new Date();

var maand = new Array (12);

maand [0] = "Januari";
maand [1] = "Februari";
maand [2] = "Maart";
maand [3] = "April";
maand [4] = "Mei";
maand [5] = "Juni";
maand [6] = "Juli";
maand [7] = "Augustus";
maand [8] = "September";
maand [9] = "October";
maand [10] = "November";
maand [11] = "December";
 
var o = maand[m.getMonth()];
document.getElementById("maand").innerHTML= o;

var j = new Date();
document.getElementById("jaar").innerHTML = j.getFullYear();



var interval = setInterval(klokje,1000);

function klokje(){
    var vandaag = new Date();
    var uren = vandaag.getHours();
    var minuten = vandaag.getMinutes();
    var seconden = vandaag.getSeconds();
    uren = checkTijd(uren);
    minuten = checkTijd(minuten);
    seconden = checkTijd(seconden);
    
    document.getElementById("uren").innerHTML = uren;
    document.getElementById("minuten").innerHTML = minuten;
    document.getElementById("seconden").innerHTML = seconden;
    
}

function checkTijd(i){
    if (i < 10){i = "0" + i};
    return i;
}

