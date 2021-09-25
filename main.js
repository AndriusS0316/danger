
let rez = 0;
let random = 0;

let toggleNumber = 2;


const push = document.querySelector('.push');
const push2 = document.querySelector('.push2');
const switchh = document.querySelector('.switch');
const toggle = document.querySelector('.toggle');

// skaicius.innerText 
// number.innerText


{ document.querySelector(".push2").style.display = "none"; }
{ document.querySelector(".ispejimas2").style.display = "none"; }
{ document.querySelector(".img").style.display = "none"; }

{ document.querySelector(".ispejimas3").style.display = "none"; }

{ document.querySelector(".switch").style.display = "none"; }
{ document.querySelector(".toggle").style.display = "none"; }




function pushClick () {
    { document.querySelector(".push").style.display = "none"; }
    { document.querySelector(".ispejimas").style.display = "none"; }

    { document.querySelector(".push2").style.display = "block"; }
    { document.querySelector(".ispejimas2").style.display = "block"; }
    { document.querySelector(".img").style.display = "block"; }
}

function push2Click () {
    { document.querySelector(".ispejimas3").style.display = "block"; }
    { document.querySelector(".switch").style.display = "block"; }
    { document.querySelector(".toggle").style.display = "block"; }

    { document.querySelector(".push2").style.display = "none"; }
    { document.querySelector(".ispejimas2").style.display = "none"; }
    { document.querySelector(".img").style.display = "none"; }

}

function switchhClick () {
    toggle.innerText = "on";


    setTimeout(function(){
        { document.querySelector(".switch").style.display = "none"; }
        { document.querySelector(".toggle").style.display = "none"; }

        { document.querySelector(".ispejimas3").style.display = "none"; }
    }, 1000);
}


push.addEventListener('click', pushClick);
push2.addEventListener('click', push2Click);
switchh.addEventListener('click', switchhClick);
