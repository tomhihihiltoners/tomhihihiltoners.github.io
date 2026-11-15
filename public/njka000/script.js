const timer = document.getElementById("timer");
const title = document.getElementById("event-title");
const background = document.getElementById("background");

let targetDate;

function parseTargetDate(date, timezone) {
    if (typeof date !== "string" || typeof timezone !== "string") {
        throw new Error("В time.json должны быть указаны date и timezone");
    }

    if (/(Z|[+-]\d{2}:\d{2})$/i.test(date)) {
        return new Date(date);
    }

    const match = date.match(
        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/
    );

    if (!match) {
        throw new Error("Неверный формат даты: " + date);
    }

    const [, year, month, day, hour, minute, second = "0", fraction = "0"] = match;
    const wallTime = Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute),
        Number(second),
        Number(fraction.padEnd(3, "0"))
    );
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
    });

    let timestamp = wallTime;

    for (let iteration = 0; iteration < 3; iteration++) {
        const parts = Object.fromEntries(
            formatter.formatToParts(new Date(timestamp))
                .filter(part => part.type !== "literal")
                .map(part => [part.type, Number(part.value)])
        );
        const zoneTime = Date.UTC(
            parts.year,
            parts.month - 1,
            parts.day,
            parts.hour,
            parts.minute,
            parts.second
        );
        const adjustedTimestamp = wallTime - (zoneTime - timestamp);

        if (adjustedTimestamp === timestamp) {
            break;
        }

        timestamp = adjustedTimestamp;
    }

    return new Date(timestamp);
}

async function init() {
    try {
        if (!timer || !title || !background) {
            throw new Error("Не найдены обязательные элементы таймера в index.html");
        }

        const response = await fetch("./time.json?t=" + Date.now());

        if (!response.ok) {
            throw new Error(`time.json: HTTP ${response.status}`);
        }

        const config = await response.json();

        if (!config.title || !config.date || !config.timezone) {
            throw new Error("В time.json отсутствует title, date или timezone");
        }

        title.textContent = config.title;

        if (config.banner) {
            const bannerImage = new Image();
            bannerImage.onload = () => {
                background.style.backgroundImage = `url("${config.banner}")`;
            };
            bannerImage.onerror = () => {
                console.error("Не удалось загрузить изображение баннера:", config.banner);
            };
            bannerImage.src = config.banner;
        }

        targetDate = parseTargetDate(config.date, config.timezone);

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

    const format = n => String(n).padStart(2, "0");

    timer.textContent =
        `${format(days)}:${format(hours)}:${format(minutes)}`;
}

init();