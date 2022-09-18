const clock = document.querySelector(".clock");

function sayTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${seconds}`;
    
}

sayTime();
setInterval(sayTime, 1000);


