const timer = document.getElementById("timer");
const title = document.getElementById("event-title");
const banner = document.getElementById("banner");

let targetDate;

async function init() {
    try {
        const response = await fetch("./time.json");
        if (!response.ok) throw new Error("Не удалось загрузить time.json");

        const config = await response.json();

        title.textContent = config.title;

        if (config.banner) {
            banner.src = config.banner;
            banner.hidden = false;

            banner.onerror = () => {
                banner.hidden = true;
            };
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
    let diff = Math.max(0, targetDate.getTime() - Date.now());

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