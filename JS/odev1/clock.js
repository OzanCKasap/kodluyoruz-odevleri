
let person = prompt("Lütfen isminizi giriniz");

if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hoşgeldin " + person + "!";
};

let clock = document.querySelector("#myClock");

let days = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

setInterval(function myTimer() {
    const saat = new Date()
    const hours = saat.toLocaleTimeString()
    const day = days[saat.getDay()]
    clock.innerHTML = `${day} günü, ${hours} saatinde`
}, 1);


