import React from 'react';

export function alertbox(msg=null){
    const customAlertMsg = document.getElementById('custom-alert-msg');
    customAlertMsg.innerHTML = msg;

    const jsalert = document.getElementById("jsalert");
    jsalert.classList.toggle("show-alert");
}

export function CustomAlert() {
    return (
        <div id="jsalert" className="darksoul-alert-js bg-color t-color">
            <div id="custom-alert-msg" className="text-2xl darksoul-alert-content lobster-regular">Nothing ¯\_(ツ)_/¯</div>
            <button type="button" onClick={alertbox} className="alert-close-btn"></button>
        </div>
    );
}