var ud_active_status = false;
var ud_button = document.getElementById('ud_button');

ud_button.addEventListener('click', ud_button_click,false);

function ud_button_click(){
    var ud_object = document.getElementsByTagName('body');
    if(ud_active_status == false){
        ud_active_status = true;
        ud_object[0].classList.add('ud_active');

    } else {
        ud_object[0].classList.remove('ud_active');
        ud_active_status = false;

    }

};