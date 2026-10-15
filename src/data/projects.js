export const projects = [
  {
    id: 'zeleniy_holm',
    title: 'Зелёный Холм',
    year: '2026',
    category: 'Документальный фильм',
    cover:
      '',
    description:
      'Документальный фильм об экологии в Челябинске. О рекультивированной свалке и другом.',
    media: {
      videos: [
        '<iframe src="https://drive.google.com/file/d/141g9r7W71RaYuGyeIlm1pZyBfFqFGj-g/preview" width="640" height="480"></iframe>',
      ],
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      ],
    },
    team: [
      { name: 'Дмитрий Давыдов', role: 'Режиссёр, монтажёр' },
      { name: 'Milo Hart', role: 'а' },
      { name: 'Noah Rios', role: 'Sound design' },
    ],
    vkUrl: 'https://vk.com/',
    downloadUrl: 'https://drive.google.com/file/d/141g9r7W71RaYuGyeIlm1pZyBfFqFGj-g/view?usp=sharing',
  },
  {
    id: 'echo-loop',
    title: 'Echo Loop',
    year: '2023',
    category: 'Interactive Experience',
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description:
      'A demo prototype for a music-tech identity built around rhythm, feedback, and layered tones. The project focuses on a tactile visual rhythm meant to translate live sonic gestures into a memorable digital scene.',
    media: {
      videos: [],
      images: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
      ],
    },
    team: [
      { name: 'Eden Vale', role: 'Experience design' },
      { name: 'Luca Novak', role: 'Visual systems' },
      { name: 'Stella Moore', role: 'Prototype development' },
    ],
    vkUrl: 'https://vk.com/feed',
    downloadUrl: 'https://disk.yandex.ru/',
  },
  {
    id: 'signal-forms',
    title: 'Signal Forms',
    year: '2024',
    category: 'Editorial Design',
    cover:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description:
      'Placeholder editorial work shaping a fictional publication centered on design culture and speculative urban futures. The system pairs expressive typography with restrained layouts and modular image treatment.',
    media: {
      videos: [],
      images: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
      ],
    },
    team: [
      { name: 'Nina Sol', role: 'Art direction' },
      { name: 'Jules Kim', role: 'Typography' },
    ],
    vkUrl: 'https://vk.com/',
    downloadUrl: 'https://disk.yandex.com/',
  },
  {
    id: 'stillness-index',
    title: 'Stillness Index',
    year: '2022',
    category: 'Campaign',
    cover:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description:
      'A fictional product launch narrative built around slow motion, still frames, and tactile materials. The concept relies on negative space and quiet pacing to communicate premium restraint without excess ornament.',
    media: {
      videos: [
        'https://www.w3schools.com/html/mov_bbb.mp4',
      ],
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      ],
    },
    team: [
      { name: 'Theo Park', role: 'Campaign design' },
      { name: 'Kira Lane', role: 'Producer' },
      { name: 'Raf Sato', role: 'Post production' },
    ],
    vkUrl: 'https://vk.com/feed',
    downloadUrl: 'https://disk.yandex.ru/',
  },
];

export const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default projects;
