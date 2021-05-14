// Alerts
const alert_container = document.getElementById('alert-container');
const close_alert = document.querySelector('#alert-container');

function showAlert(message,type){
    code = '';
    code += `<p>${message}</p><i id="close-alert" class="fas fa-times">`
    alert_item = document.createElement('div');
    alert_item.classList.add('alert');
    if(type){
        alert_item.classList.add(type);
    }
    alert_item.innerHTML = code;
    alert_container.appendChild(alert_item);
    clearTimeout();
    setTimeout(()=>{alert_container.innerHTML=''},5000);
}

close_alert.addEventListener('click',(event)=>{
    alert_container.removeChild(event.srcElement.parentElement);
})
