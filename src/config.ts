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
    videoSrc: '<iframe src="https://drive.google.com/file/d/1WYJ4KzWW7u_DghoZsjndPQURuB1MbjLD/preview" width="640" height="480"></iframe>',
  },

  // 3. Визуальные доказательства (чистые скриншоты без лишних маркеров)
  evidence: {
    explanation: "Количество колёс меняется от кадра к кадру, что стало для меня признаком генерации видео с помощью ИИ.",
    frames: [
      {
        id: "frame-01",
        tag: "FRAME 01",
        imageSrc: "https://file.garden/atDNoqj9Xr_pDZ7l/mpv-shot0002.jpg",
        description: "Кадр 1"
      },
      {
        id: "frame-02",
        tag: "FRAME 02",
        imageSrc: "https://file.garden/atDNoqj9Xr_pDZ7l/mpv-shot0004.jpg",
        description: "Кадр 2"
      },
      {
        id: "frame-03",
        tag: "FRAME 03",
        imageSrc: "https://file.garden/atDNoqj9Xr_pDZ7l/mpv-shot0005.jpg",
        description: "Кадр 3"
      },
            {
        id: "frame-04",
        tag: "FRAME 04",
        imageSrc: "https://file.garden/atDNoqj9Xr_pDZ7l/mpv-shot0006.jpg",
        description: "Кадр 4"
      }
    ] as EvidenceFrame[]
  },

  // 4. Вердикт
  verdict: {
    heading: "Купил бы я это?",
    text: "Да. Повлияла ли реклама на мое мнение о продукте? Нет. Однако такая реклама у любого другого бренда может спровоцировать крупный скандал в медиаполе.",
  }
};
