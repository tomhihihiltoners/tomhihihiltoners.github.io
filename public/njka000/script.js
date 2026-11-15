const timer = document.getElementById("timer");
const title = document.getElementById("event-title");
const background = document.getElementById("background");

let targetDate;

async function init() {
    try {
        const response = await fetch("./time.json");
        if (!response.ok) throw new Error("Ошибка загрузки JSON");

        const config = await response.json();

        title.textContent = config.title;

        if (config.banner) {
            const img = new Image();

            img.onload = () => {
                background.style.backgroundImage =
                    `url("${config.banner}")`;
            };

            img.src = config.banner;
        }

        targetDate = new Date(config.date + "+05:00");

        if (isNaN(targetDate.getTime())) {
            throw new Error("Некорректная дата");
        }

        updateTimer();
        setInterval(updateTimer, 1000);

    } catch (error) {
        title.textContent = "ОШИБКА ЗАГРУЗКИ";
        console.error(error);
    }
}

function updateTimer() {
    let diff = Math.max(0, targetDate - Date.now());

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);
    diff %= 60000;

    const seconds = Math.floor(diff / 1000);

    const format = n => String(n).padStart(2, "0");

    timer.textContent =
        `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

init();