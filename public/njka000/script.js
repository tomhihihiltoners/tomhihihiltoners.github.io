const timer = document.getElementById("timer");
const title = document.getElementById("event-title");
const background = document.getElementById("background");

let targetDate;

async function init() {
    try {
        const response = await fetch("./time.json?t=" + Date.now());

        if (!response.ok) {
            throw new Error(`time.json: HTTP ${response.status}`);
        }

        const config = await response.json();

        if (!config.title || !config.date) {
            throw new Error("В time.json отсутствует title или date");
        }

        title.textContent = config.title;

        // Фоновое изображение
        if (config.banner) {
            const img = new Image();

            img.onload = () => {
                background.style.backgroundImage =
                    `url("${config.banner}")`;
            };

            img.onerror = () => {
                console.error("Не удалось загрузить баннер");
            };

            img.src = config.banner;
        }

        // Екатеринбург / Пермь — UTC+5
        let dateString = config.date;

        if (!/(Z|[+-]\d{2}:\d{2})$/i.test(dateString)) {
            dateString += "+05:00";
        }

        targetDate = new Date(dateString);

        if (isNaN(targetDate.getTime())) {
            throw new Error("Неверный формат даты: " + config.date);
        }

        updateTimer();
        setInterval(updateTimer, 1000);

    } catch (error) {
        title.textContent = "ОШИБКА ЗАГРУЗКИ";
        console.error("TIMER ERROR:", error);
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