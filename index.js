let homeEl = document.getElementById('home-el');
let guestEl = document.getElementById('guest-el');

let home1 = document.getElementById('home-add1');
let home2 = document.getElementById('home-add2');
let home3 = document.getElementById('home-add3');
let homeSub1 = document.getElementById('home-subtract');

//Guest Variables 

let guest1 = document.getElementById('guest-add1');
let guest2 = document.getElementById('guest-add2');
let guest3 = document.getElementById('guest-add3');
let guestSub1 = document.getElementById('guest-subtract');
let resetEl = document.getElementById('reset')

let homeResult = 0;
let result = 0;


home1.onclick = function add1(){
    homeResult += 1;
    homeEl.textContent = homeResult; 
}

home2.onclick = function add2(){
     homeResult += 2;
    homeEl.textContent = homeResult;
}

home3.onclick = function add3(){
     homeResult += 3;
    homeEl.textContent = homeResult;
}

homeSub1.onclick = function subtract1(){
     homeResult -= 1;
    homeEl.textContent = homeResult;
} 

// Guest code

guest1.onclick = function add1(){
    result += 1;
    guestEl.textContent = result; 
}

guest2.onclick = function add2(){
     result += 2;
    guestEl.textContent = result;
}

guest3.onclick = function add3(){
     result += 3;
    guestEl.textContent = result;
}

guestSub1.onclick = function subtract1(){
     result -= 1;
    guestEl.textContent = result;
}

resetEl.onclick = function reset(){
    result = 0;
    homeResult = 0;
    homeEl.textContent = homeResult;
    guestEl.textContent = result;
}
