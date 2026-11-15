const timer = document.getElementById("timer");
const title = document.getElementById("event-title");

let targetDate;

async function init() {
    try {
        const response = await fetch("./time.json");
        const config = await response.json();

        title.textContent = config.title;

        // Время события в часовом поясе Екатеринбурга
        const dateString = config.date;
        targetDate = new Date(
            new Date(dateString + "+05:00").getTime()
        );

        updateTimer();
        setInterval(updateTimer, 1000);

    } catch (error) {
        title.textContent = "ОШИБКА ЗАГРУЗКИ";
        console.error(error);
    }
}

function updateTimer() {
    const now = Date.now();
    let diff = Math.max(0, targetDate - now);

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);
    diff %= 60000;

    const seconds = Math.floor(diff / 1000);

    const format = n => String(n).padStart(2, "0");

    timer.innerHTML = `
        <span>${format(days)}</span>:<span>${format(hours)}</span>:<span>${format(minutes)}</span>:<span>${format(seconds)}</span>
    `;
}

init();