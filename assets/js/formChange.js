const form_container = document.getElementById('ticket-container');
const plane_ticket = document.getElementById('plane-ticket');
const hotel_booking = document.getElementById('hotel-booking');

const hotel_icon = document.getElementById('hotel-icon');
const plane_icon = document.getElementById('plane-icon');

plane_icon.addEventListener('click',()=>{
    plane_ticket.classList.remove('hidden');
    hotel_booking.classList.add('hidden');
    plane_icon.classList.add('selected');
    hotel_icon.classList.remove('selected');
})
hotel_icon.addEventListener('click',()=>{
    hotel_booking.classList.remove('hidden');
    plane_ticket.classList.add('hidden');
    hotel_icon.classList.add('selected');
    plane_icon.classList.remove('selected');
})

plane_ticket.classList.remove('hidden');