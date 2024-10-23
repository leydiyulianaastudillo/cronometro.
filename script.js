document.addEventListener("DOMContentLoaded", function() {
    let startTime, updatedTime, difference, tInterval;
    let running = false;

    const tiempoDisplay = document.getElementById("tiempo");

    function startTimer() {
        if (!running) {
            startTime = new Date().getTime();
            tInterval = setInterval(updateTime, 1);
            running = true;
        }
    }

    function stopTimer() {
        clearInterval(tInterval);
        running = false;
    }

    function resetTimer() {
        clearInterval(tInterval);
        running = false;
        difference = 0;
        tiempoDisplay.innerHTML = "00:00:00";
    }

    function updateTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        tiempoDisplay.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                                  (minutes < 10 ? "0" + minutes : minutes) + ":" +
                                  (seconds < 10 ? "0" + seconds : seconds);
    }

    // Event Listeners
    document.getElementById("start").addEventListener("click", startTimer);
    document.getElementById("stop").addEventListener("click", stopTimer);
    document.getElementById("reset").addEventListener("click", resetTimer);
});
