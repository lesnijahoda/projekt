const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");

let numberOfCookies = 0;
let costOfclickUpgrade = 20;
let clickUpgradeIncrease = 1;

cookie.onclick = () => {
    numberOfCookies+= clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
    console.log("click")
}


//vytvoření funkce
//function nazev() {}

function cheats() {
    console.log("cheats on!");
    numberOfCookies += 1000000;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}
//spusteni funkce
//cheats();


const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = "Cookies:" +numberOfCookies;
}
//cheatsTwo();



const clickUpgradeFunction = () => {
if (numberOfCookies >= costOfclickUpgrade){
    //odecteme cenu upgradu
    //pocet susenek a odectu 20
    numberOfCookies -= costOfclickUpgrade;

    //aktualizace odstavce
    counter.innerText = "Cookies:" + numberOfCookies;

    //zvedneme pocet susenek na kliknuti
    clickUpgradeIncrease++;
}
};

clickUpgrade.onclick = clickUpgradeFunction;
