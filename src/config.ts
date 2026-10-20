/**
 * КОНФИГУРАЦИОННЫЙ ФАЙЛ ПРОЕКТА
 * Все ссылки на видео, скриншоты и тексты редактируются здесь.
 */

export interface EvidenceFrame {
  id: string;
  tag: string; // FRAME 01, FRAME 02, etc.
  imageSrc: string; // путь (/frame1.jpg) или URL
  description?: string;
}

export const SITE_CONFIG = {
  author: "ДМИТРИЙ ДАВЫДОВ",
  title: " ",

  // 1. Оригинальная реклама 1995 года
  originalCommercial: {
    tag: "Настоящая реклама Coca-Cola (1995)",
    heading: "Легендарная реклама Coca-Cola, 1995",
    videoSrc: '<iframe src="https://drive.google.com/file/d/1pdQIPGe_DcWeBwz31jfkc4zvL9Fs7DAY/preview" width="640" height="480"></iframe>',
  },

  // 2. AI-реклама 2025 года
  aiCommercial: {
    tag: "Видео, созданное с помощью ИИ. (2025)",
    heading: "Реклама Coca-Cola, сгенерированная с помощью ИИ (2025)",
    videoSrc: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0JKLMNOPQRSTUVW/view",
  },

  // 3. Визуальные доказательства (чистые скриншоты без лишних маркеров)
  evidence: {
    explanation: "Количество колёс меняется от кадра к кадру, что стало для меня признаком генерации видео с помощью ИИ.",
    frames: [
      {
        id: "frame-01",
        tag: "FRAME 01",
        imageSrc: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1400&q=80",
        description: "Кадр 1"
      },
      {
        id: "frame-02",
        tag: "FRAME 02",
        imageSrc: "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1400&q=80",
        description: "Кадр 2"
      },
      {
        id: "frame-03",
        tag: "FRAME 03",
        imageSrc: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1400&q=80",
        description: "Кадр 3"
      }
    ] as EvidenceFrame[]
  },

  // 4. Вердикт
  verdict: {
    heading: "Купил бы я это?",
    text: "Повлияла ли AI-реклама на моё желание покупать Coca-Cola? Нет. Оригинал 1995 года создавал ощущение праздника и тепла, а сгенерированный ролик оставляет ощущение холодного видеоряда, в котором при внимательном взгляде распадается физика объектов."
  }
};
