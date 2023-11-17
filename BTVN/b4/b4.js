let second2 = 0;
function updateTime() {
    var d = new Date();
    var second = d.getSeconds();
    if(second < 10) {
        second2 = "0" + second;
    } else {
        second2 = second;
    }
    
    document.querySelector("#time").textContent = (d.getHours() + ":" + d.getMinutes() + ":" + second2);
}

setInterval(updateTime, 1000);