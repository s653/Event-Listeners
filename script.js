// Click Event 

let count = 0;
function clickButton() {
    count++;
    document.getElementById('clickCount').innerText = `Click Count : ${count}`;
}

// Mouse Event 

function imagePosition(event) {
    let positionX = event.clientX;
    let positionY = event.clientY;
    document.getElementById('positionX').innerText = positionX;
    document.getElementById('positionY').innerText = positionY;

}

// Keyboard Event 

let input = document.getElementById("keyboardinput");
input.onkeydown = function (event) {
    document.getElementById("keyboardPosition").innerText = "Last Key Pressed :" + event.key;
}

// Focus and Blur Events

function focusEvent(event) {
    document.getElementById("focusPosition").innerText = "Focus and Blur : Focus";
}
function blurEvent(event) {
    document.getElementById("focusPosition").innerText = "Focus and Blur : Not Focus";
}

// Touch Events 
function touchEvent() {
    let touchEvent = document.getElementById("touchEvent");
    let position = document.getElementById("position");
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    position.textContent = `Touch Position : ${x}, ${y}`;
}

// Window Resize Event 

function resizeEvent(event) {
    document.getElementById("width").innerText = window.innerWidth;
    document.getElementById("height").innerText = window.innerHeight;
}
window.addEventListener("resize", resizeEvent);
resizeEvent();

// Form Submit Event 

function formSubmit(event) {
    event.preventDefault();
    let submit = document.getElementById("formsubmit");
    submit.textContent = "Form Status : Submitted";
}

function resetForm() {
    document.getElementById("submitEvent").reset();
    document.getElementById("formsubmit").textContent = "Form Status : Not Submitted";
}

// drag and drop 
function dragStart() {
    let dragstart = document.getElementById("dragdrop");
    let dragMessage = document.getElementById("dragMessage");
    dragMessage.textContent = "Drag Status : Dragging";
}

function dragEnd() {
    let dragMessage = document.getElementById("dragMessage");
    dragMessage.textContent = "Drag Status : Ended";
}

// media event 

let video = document.getElementById("myvideo");
let mediaMessage = document.getElementById("mediaEvent");

video.onplay = () => {
    mediaMessage.textContent = "Media Status: Playing";
}

video.onpause = () => {
    mediaMessage.textContent = "Media Status: Paused";
}
video.onended = () => {
    mediaMessage.textContent = "Media Status: Ended";
}