const plane_from = document.getElementById('plane-from');
const plane_to = document.getElementById('plane-to');

const display_from = document.getElementById('display-from')
const display_to = document.getElementById('display-to')

const swap_btn = document.getElementById('swap');

const airports = [
    {"code": "BDP","airport": "Bhadrapur"},
    {"code": "BWA","airport": "Bhairahawa"},
    {"code": "BHR","airport": "Bharatpur"},
    {"code": "BIR","airport": "Biratnagar"},
    {"code": "DHI","airport": "Dhangadi"},
    {"code": "JKR","airport": "Janakpur"},
    {"code": "JMO","airport": "Jomsom"},
    {"code": "KTM","airport": "Kathmandu"},
    {"code": "LUA","airport": "Lukla"},
    {"code": "MTN","airport": "Mountain"},
    {"code": "KEP","airport": "Nepalgunj"},
    {"code": "PKR","airport": "Pokhara"},
    {"code": "RJB","airport": "Rajbiraj"},
    {"code": "RCH","airport": "Ramechhap"},
    {"code": "SIF","airport": "Simara"},
    {"code": "IMK","airport": "Simikot"},
    {"code": "SKH","airport": "Surkhet"},
    {"code": "TMI","airport": "Tumlingtar"}
];

function populateAirportFrom(){
    let options = '';
    airports.forEach((airport)=>{
        if(plane_to.value!=airport.code){
            if(plane_from.value == airport.code){
                options += `<option value = "${airport.code}" selected>${airport.airport}</option>`;
                display_from.innerText = airport.code;
            }else{
                options += `<option value = "${airport.code}">${airport.airport}</option>`;
            }
        }

    });
    plane_from.innerHTML = options;
}
function populateAirportTo(){
    let options = '';
    airports.forEach((airport)=>{
        if(plane_from.value!=airport.code){
            if(plane_to.value == airport.code){
                options += `<option value = "${airport.code}" selected>${airport.airport}</option>`;
                display_to.innerText = airport.code;
            }else{
                options += `<option value = "${airport.code}">${airport.airport}</option>`;
            }
        }

    });
    plane_to.innerHTML = options;
}

function swap(){
    let fcode = '';
    let tcode = '';
    airports.forEach((airport)=>{
        if(plane_to.options[plane_to.selectedIndex].value == airport.code){
            fcode += `<option value = "${airport.code}" selected>${airport.airport}</option>`;
        }else{
         fcode += `<option value = "${airport.code}">${airport.airport}</option>`;
        }
        if(plane_from.options[plane_from.selectedIndex].value == airport.code){
         tcode += `<option value = "${airport.code}" selected>${airport.airport}</option>`;
        }else{
         tcode += `<option value = "${airport.code}">${airport.airport}</option>`;
        }
    })
    plane_from.innerHTML = fcode;
    plane_to.innerHTML =  tcode;
 }
 

plane_from.addEventListener('change',()=>{
    populateAirportFrom();
    populateAirportTo();
});
plane_to.addEventListener('change',()=>{
    populateAirportFrom();
    populateAirportTo();
});
swap_btn.addEventListener('click',(event)=>{
    event.preventDefault();
   swap();
   populateAirportFrom();
   populateAirportTo();
});




populateAirportFrom();
populateAirportTo();