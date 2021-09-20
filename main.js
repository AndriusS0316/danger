
let rez = 0;
let random = 0;



const push = document.querySelector('.push');
const push2 = document.querySelector('.push2');

// skaicius.innerText 
// number.innerText


{ document.querySelector(".push2").style.display = "none"; }
{ document.querySelector(".ispejimas2").style.display = "none"; }


function pushClick () {
    { document.querySelector(".push").style.display = "none"; }
    { document.querySelector(".ispejimas").style.display = "none"; }

    { document.querySelector(".push2").style.display = "block"; }
    { document.querySelector(".ispejimas2").style.display = "block"; }
}

function push2Click () {

}


push.addEventListener('click', pushClick);
push2.addEventListener('click', push2Click);
