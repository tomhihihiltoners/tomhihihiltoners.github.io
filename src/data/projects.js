export const projects = [
  {
    id: 'zeleniy_holm',
    title: 'Зелёный Холм',
    year: '2026',
    category: 'Документальный фильм',
    cover:
      'https://file.garden/atDNoqj9Xr_pDZ7l/gh_01.jpg',
    description:
      'Документальный фильм об экологии в Челябинске. О рекультивированной свалке, кстати, тоже.',
    media: {
      videos: [
        '<iframe src="https://drive.google.com/file/d/141g9r7W71RaYuGyeIlm1pZyBfFqFGj-g/preview" width="640" height="480"></iframe>',
      ],
      images: [
        'https://file.garden/atDNoqj9Xr_pDZ7l/gh_02.jpg',
        'https://file.garden/atDNoqj9Xr_pDZ7l/gh_03.jpg',
      ],
    },
    team: [
      { name: 'Дмитрий Давыдов', role: 'Режиссёр, монтажёр' },
    ],
    vkUrl: 'https://vk.com/',
    downloadUrl: 'https://drive.google.com/file/d/141g9r7W71RaYuGyeIlm1pZyBfFqFGj-g/view?usp=sharing',
  },
  {
    id: 'podcastpier',
    title: 'Подкаст с Пьером Броше',
    year: '2026',
    category: 'Подкаст',
    cover:
      'https://file.garden/atDNoqj9Xr_pDZ7l/pier.jpg',
    description:
      'В новом выпуске — разговор об искусстве и креативности с человеком, влюбленным в Россию, — искусствоведом, книжным издателем и телеведущим канала «Россия Культура» Пьером-Кристианом Броше.',
    media: {
      videos: [
        '<iframe src="https://drive.google.com/file/d/1eQoUbNNFxiOCxaa_FZkFYicAqh7rS7Uh/preview" width="640" height="480"></iframe>',
        '<iframe src="https://drive.google.com/file/d/1nZZtX-GNIW_wHtfYXpc_1rVmho6-m4VQ/preview" width="640" height="480"></iframe>'
      ],
      images: [
        'https://file.garden/atDNoqj9Xr_pDZ7l/pier_02.jpg',
        'https://file.garden/atDNoqj9Xr_pDZ7l/pier_03.jpg',
      ],
    },
    team: [
      { name: 'Дмитрий Давыдов', role: 'Режиссёр, режиссёр монтажа' }
    ],
    vkUrl: 'https://vk.ru/wall-228703273_816',
    downloadUrl: 'https://t.me/+jAjso927D9ZkYWZi',
  },
];

export const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default projects;
