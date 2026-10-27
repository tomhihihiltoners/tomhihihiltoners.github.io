/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 * СЛУЧАЙНОЕ БЕССМЕРТИЕ: РИКРОЛЛИНГ — ЦЕНТРАЛЬНАЯ КОНФИГУРАЦИЯ КОНТЕНТА
 * ============================================================================
 *
 * Весь пользовательский текст для лонгрида собран в этом файле:
 * - Заголовки, лиды, подзаголовки и основной нарратив
 * - Таймлайн, хронология событий и элементы терминала
 * - Кнопки, модальные окна, подсказки и accessibility-лейблы
 * - Библиография, источники и выходные данные (колофон)
 *
 * ДЛЯ ПЕРЕВОДА ИЛИ ПРАВКИ:
 * Меняйте строковые значения ниже. Логика компонентов и разметка
 * автоматически подтянут изменения без правок кода приложения.
 *
 * ПРИМЕЧАНИЕ: Ссылки на медиафайлы вынесены отдельно в `/src/config/media.ts`.
 * ============================================================================
 */

export interface LongreadContent {
  metadata: {
    siteTitle: string;
    siteDescription: string;
    authorLabel: string;
    licenseNotice: string;
    audioNotice: string;
    year: string;
  };
  navigation: {
    brandTitle: string;
    sectionLinks: Array<{
      href: string;
      label: string;
    }>;
    colophonLink: string;
    audioButton: {
      mutedLabel: string;
      activeLabel: string;
      enableTitle: string;
      muteTitle: string;
      enableAria: string;
      muteAria: string;
    };
  };
  partOne: {
    hero: {
      kickerPart: string;
      kickerTopic: string;
      kickerYear: string;
      title: string;
      subtitle: string;
      synthButtonPlay: string;
      synthButtonStop: string;
      synthNote: string;
      videoToggleWatch: string;
      videoToggleStill: string;
      vhsToggleOn: string;
      vhsToggleOff: string;
      captionArtist: string;
      captionStudio: string;
      captionProduction: string;
      scrollPrompt: string;
      mediaAlt: string;
      videoTitle: string;
    };
    section1PopSong: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      card1Title: string;
      card1Text: string;
      card2Title: string;
      card2Text: string;
      card3Title: string;
      card3Text: string;
      quoteText: string;
      quoteAuthor: string;
      altStill: string;
      altSleeve: string;
      sleeveCaption: string;
      buttonViewShoot: string;
      buttonViewSleeve: string;
      footerRelease: string;
      footerRuntime: string;
      timelineTitle: string;
      timelinePrompt: string;
      timelineEvents: Array<{
        time: string;
        title: string;
        detail: string;
      }>;
    };
    section2EarlyBaitSwitch: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      comparisonCards: Array<{
        category: string;
        intent: string;
        userReaction: string;
        legacy: string;
      }>;
      statusBarLabel: string;
      statusBarUrl: string;
      statusBarNote: string;
    };
    section3WordOrigin: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      duckrollTitle: string;
      duckrollDesc: string;
      duckrollAlt: string;
      forumTitle: string;
      forumUrl: string;
      forumAuthor: string;
      forumTimestamp: string;
      forumThreadHeading: string;
      forumPostText: string;
      baitFileName: string;
      baitFileInfo: string;
      baitButton: string;
      safeNote: string;
      modal: {
        headerBadge: string;
        closeAria: string;
        toggleVideo: string;
        toggleGif: string;
        recStamp: string;
        altGif: string;
        videoTitle: string;
        heading: string;
        subtitle: string;
        analysis: string;
        audioStatusPlaying: string;
        audioStatusMuted: string;
        continueButton: string;
      };
      verificationNotes: string[];
    };
    section4SpreadInternet: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      recognitionCues: Array<{
        timestamp: string;
        cue: string;
        cognitiveEffect: string;
      }>;
      milestones: Array<{
        date: string;
        platform: string;
        significance: string;
      }>;
    };
    section5RealWorld: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      events: Array<{
        id: string;
        date: string;
        eventTitle: string;
        location: string;
        participants: string;
        whatHappened: string;
        culturalMeaning: string;
      }>;
    };
    section6WhyItWorks: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      pillars: Array<{
        pillarNumber: string;
        name: string;
        explanation: string;
      }>;
    };
    section7Afterlife: {
      kicker: string;
      title: string;
      lead: string;
      paragraphs: string[];
      quote: string;
      quoteAuthor: string;
      cardHeading: string;
      cardSubtext: string;
      proceedButton: string;
    };
  };
  colophon: {
    closingQuote: string;
    sourcesTitle: string;
    sourcesSubtitle: string;
    citations: Array<{
      id: string;
      title: string;
      authorOrSource: string;
      year: string;
      annotation: string;
    }>;
    devNoteTypographyTitle: string;
    devNoteTypographyText: string;
    devNoteTypographyFile: string;
    devNoteMediaTitle: string;
    devNoteMediaText: string;
    devNoteMediaFile: string;
    creditsTag: string;
    creditsProject: string;
    creditsYear: string;
    creditsFairUse: string;
    creditsAudioSynth: string;
  };
  mediaComponents: {
    loadingMedia: string;
    loadingAnimation: string;
    connectingDrive: string;
    fallbackImageTitle: string;
    fallbackImageNotice: string;
    fallbackGifTitle: string;
    fallbackGifNotice: string;
    gifBadge: string;
    embedInfoButton: string;
    openInDriveTitle: string;
    driveNoticeTitle: string;
    driveNoticeDescription: string;
    driveNoticeBullets: string[];
  };
}

export const content: LongreadContent = {
  metadata: {
    siteTitle: 'Случайное бессмертие: Never Gonna Give You Up',
    siteDescription:
      'Интерактивный медиалонгрид о том, как эстрадный клип Рика Астли 1987 года вырвался из телевизионной эпохи и превратился в самый масштабный сетевой розыгрыш в истории человечества.',
    authorLabel: 'Визуальная медиановелла',
    licenseNotice: 'Добросовестное использование (Fair Use) и культурологический разбор',
    audioNotice: 'Синтез аудио в браузере в реальном времени через Web Audio API',
    year: '2026',
  },

  navigation: {
    brandTitle: 'Случайное бессмертие',
    sectionLinks: [
      { href: '#part1-hero', label: 'Дебют 1987 года' },
      { href: '#part1-section1', label: 'Та самая песня' },
      { href: '#part1-section2', label: 'Ссылка вслепую' },
      { href: '#part1-section3', label: 'Дакроллинг' },
      { href: '#part1-section4', label: 'Вирусная волна' },
      { href: '#part1-section5', label: 'Выход в реал' },
      { href: '#part1-section6', label: 'Секрет живучести' },
      { href: '#part1-section7', label: 'Бессмертие' },
    ],
    colophonLink: 'Источники',
    audioButton: {
      mutedLabel: 'Звук выкл',
      activeLabel: 'Звук вкл',
      enableTitle: 'Звук отключен (кликните, чтобы включить звуковые акценты)',
      muteTitle: 'Звук включен (кликните, чтобы заглушить)',
      enableAria: 'Включить звуковые эффекты',
      muteAria: 'Отключить звуковые эффекты',
    },
  },

  partOne: {
    hero: {
      kickerPart: 'ИСТОРИЯ МЕДИА',
      kickerTopic: 'РИК АСТЛИ: NEVER GONNA GIVE YOU UP',
      kickerYear: '1987–НАШИ ДНИ',
      title: 'NEVER GONNA GIVE YOU UP',
      subtitle:
        'История о том, как заурядный дэнс-поп сингл из 1987 года пережил собственную эпоху и стал главным коллективным розыгрышем всемирной паутины.',
      synthButtonPlay: 'Врубить синтезатор 1987 года',
      synthButtonStop: 'Заглушить рифф',
      synthNote: 'Аналоговый пилообразный осциллятор SAW · Без внешних аудиофайлов',
      videoToggleWatch: 'Смотреть клип из архива',
      videoToggleStill: 'Оставить фоновый кадр',
      vhsToggleOn: 'Полосы VHS: ВКЛ',
      vhsToggleOff: 'Полосы VHS: ВЫКЛ',
      captionArtist: 'Рик Астли, 1987 год',
      captionStudio: 'Студия PWL, Лондон',
      captionProduction: 'Продюсерское трио Сток-Эйткен-Уотермен',
      scrollPrompt: 'Листайте к корням рикроллинга',
      mediaAlt: 'Рик Астли исполняет Never Gonna Give You Up (1987)',
      videoTitle: 'Rick Astley — Never Gonna Give You Up (Официальное видео 1987 года)',
    },

    section1PopSong: {
      kicker: '1987 · ФАБРИКА ХИТОВ PWL',
      title: 'ЛЕГЕНДАРНАЯ ПЕСНЯ, КОТОРАЯ СТАЛА МЕМОМ СЛУЧАЙНО',
      lead: '',
      paragraphs: [
        '',
      ],
      card1Title: 'Идея, появившаяся из телефонного звонка',
      card1Text: 'Во время разговора продюсера со своей девушкой, Рик лишь бросил ему "Ты никогда не бросишь ее", это стало супер-идеей.',
      card2Title: 'Необычный голос',
      card2Text: 'Многие радиослушатели думали, что эту песню исполнял взрослый исполнитель. На деле - Рику был 21 год.',
      card3Title: 'Гардероб за ноль фунтов',
      card3Text: 'Бюджет был скромным: Рик снимался в своей обычной одежде.',
      quoteText:
        '«Я только-только подписал контракт с Питом Уотерменом и несколько месяцев просто разносил чай по студии, пока мне наконец не доверили микрофон».',
      quoteAuthor: '— Рик Астли',
      altStill: 'Рик Астли поет в полосатом поло и темном пиджаке (1987)',
      altSleeve: 'Оригинальный конверт 7-дюймового винилового сингла',
      sleeveCaption: 'Обложка виниловой сорокапятки RCA Records (британский релиз PB 41447)',
      buttonViewShoot: 'Кадры со съемок в Лондоне',
      buttonViewSleeve: 'Конверт винила 7"',
      footerRelease: 'Дата релиза: август 1987 года · Студия PWL / RCA Records',
      footerRuntime: 'Хронометраж: 3:32 · Темп: 113 BPM (дэнс-поп)',
      timelineTitle: 'Хроника метаморфозы: от винила 1987-го до вечного мема',
      timelinePrompt: 'Кликните на любой этап для разбора деталей',
      timelineEvents: [
        {
          time: '1987',
          title: 'Дебют на фабрике PWL',
          detail: 'Сингл взял штурмом чарты 25 стран и отхватил престижную премию Brit Awards за лучшую британскую песню.',
        },
        {
          time: '1993',
          title: 'Уход со сцены',
          detail: 'Пресытившись шоу-бизнесом и бесконечной суетой, Астли на пике славы повесил микрофон на гвоздь всего в 27 лет.',
        },
        {
          time: '2007',
          title: 'Первый в истории рикролл',
          detail: 'На имиджборде 4chan в игровом разделе /v/ спонтанно родился классический формат подмены ссылок.',
        },
        {
          time: 'Сегодня',
          title: '1,6+ млрд просмотров',
          detail: 'Полноправный сетевой обряд инициации и нерушимая часть всемирного цифрового фольклора.',
        },
      ],
    },

    section2EarlyBaitSwitch: {
      kicker: 'НАЧАЛО 2000-х · АРХИТЕКТУРА СЕТИ',
      title: 'ССЫЛКА ВСЛЕПУЮ',
      lead: 'Гиперссылки требовали слепой веры. Ранние сетевые тролли превратили эту доверчивость в оружие.',
      paragraphs: [
        'Гиперссылка — это чистый прыжок в неизвестность: ты не можешь наверняка знать, куда тебя выкинет, пока сам не кликнешь.',
      ],
      comparisonCards: [
        {
          category: 'Шок-сайты (1999–2005)',
          intent: 'Оглушить, напугать и вывернуть наизнанку омерзительными кадрами.',
          userReaction: 'Шок, рвотный позыв, спешное захлопывание браузера и подорванное доверие.',
          legacy: 'Агрессивный цифровой шлак, оставивший после себя лишь паранойю.',
        },
        {
          category: 'Рикроллинг (с 2007 по сей день)',
          intent: 'Обезоружить и развеселить бодрым диско-хитом из восьмидесятых.',
          userReaction: 'Облегчение, громкий смех над собой и заедающий в голове припев.',
          legacy: 'Теплая народная традиция, которую старожилы веба с улыбкой передают новичкам.',
        },
      ],
      statusBarLabel: 'Строка состояния браузера при наведении мыши:',
      statusBarUrl: 'http://youtube.com/watch?v=dQw4w9WgXcQ',
      statusBarNote:
        'Тот самый зловещий буквенный код, который миллиарды обитателей сети выучили наизусть как таблицу умножения.',
    },

    section3WordOrigin: {
      kicker: '2006–2007 · КОРНИ НА 4CHAN',
      title: 'ОТ ДАКРОЛЛА К РИКРОЛЛУ',
      lead: 'Нелепая деревянная утка на колесиках заложила фундамент для величайшей сетевой мистификации.',
      paragraphs: [
        'В 2006 году скрипт на 4chan в шутку заменял слово «egg» на «duck» — так родился дакролл. А 29 марта 2007 года местный юзер замаскировал клип Астли под долгожданный трейлер Grand Theft Auto IV.',
      ],
      duckrollTitle: 'Прародитель: Дакролл (2006)',
      duckrollDesc: 'Фотография самодельной деревянной утки на зеленых колесиках, которую подсовывали в качестве наживки.',
      duckrollAlt: 'Деревянная фигурка утки, установленная на зеленые игрушечные колеса',
      forumTitle: '4chan /v/ — Доска видеоигр',
      forumUrl: 'boards.4chan.org/v/res/1129487.html',
      forumAuthor: 'Аноним',
      forumTimestamp: '29.03.07 (Чт) 18:42:10 UTC',
      forumThreadHeading: 'GRAND THEFT AUTO IV: ЗЕРКАЛО ПЕРВОГО ТРЕЙЛЕРА [ВЫСОКОЕ КАЧЕСТВО]',
      forumPostText:
        'Серваки Rockstar намертво легли под натиском миллионов геймеров, пытающихся стянуть премьерный ролик. Я успел сдернуть нормальный 720p-файл до того, как сайт упал. Забирайте по ссылке ниже:',
      baitFileName: 'gta4_official_trailer_hd.mov (24.8 МБ)',
      baitFileInfo: 'Видео QuickTime · 1280x720 · Высокоскоростное зеркало',
      baitButton: 'Скачать трейлер',
      safeNote: 'Безопасная симуляция · Никаких вирусов или реальных загрузок не запустится',
      modal: {
        headerBadge: 'АРХЕОЛОГИЯ ИНТЕРНЕТА · МАРТ 2007 ГОДА',
        closeAria: 'Закрыть окно',
        toggleVideo: 'Переключить на видео',
        toggleGif: 'Переключить на GIF',
        recStamp: 'ЗАПИСЬ ● 1987',
        altGif: 'Зацикленная анимация танцующего Рика Астли',
        videoTitle: 'Rick Astley — Never Gonna Give You Up (Плеер розыгрыша)',
        heading: 'Вас только что рикролльнули',
        subtitle: '29 марта 2007 года · Тот самый розыгрыш с трейлером GTA IV на 4chan',
        analysis:
          'Вместо мрачных гангстерских разборок и погонь перед носом опешившего зрителя выскакивал 21-летний парень в светлом плаще, выделывающий бодрую чечетку с широченной улыбкой.',
        audioStatusPlaying: 'Синтезаторный рифф: играет',
        audioStatusMuted: 'Звук заглушен',
        continueButton: 'Продолжить чтение',
      },
      verificationNotes: [
        'Оригинальная документация и следы треда сохранились в веб-архивах за 29 марта 2007 года.',
        'Факт падения официальных серверов Rockstar Games зафиксирован профильной игровой прессой того времени.',
      ],
    },

    section4SpreadInternet: {
      kicker: '2007–2008 · ВИРУСНЫЙ ВЗРЫВ',
      title: 'ПОДВОХ ЗА ПОЛТОРЫ СЕКУНДЫ',
      lead: 'Барабанная сбивка и клавишный аккорд мгновенно давали понять: вас провели.',
      paragraphs: [
        'Песня выдает себя буквально за полторы секунды. А 1 апреля 2008 года YouTube перенаправил вообще все ролики с главной страницы на Астли, зарикроллив миллионы людей по всей планете за один день.',
      ],
      recognitionCues: [
        {
          timestamp: '0.0с – 0.5с',
          cue: 'Дробь драм-машины LinnDrum',
          cognitiveEffect: 'Звонкая синкопированная перкуссия мигом будит подсознательную тревогу.',
        },
        {
          timestamp: '0.6с – 1.2с',
          cue: 'Рифф синтезатора Roland Juno',
          cognitiveEffect: 'Бодрые клавишные фанфары ставят крест на надеждах: сомнений нет, это ловушка.',
        },
        {
          timestamp: '1.2с – 2.0с',
          cue: 'Топтание в плаще',
          cognitiveEffect: 'Астли передергивает плечами; секундное раздражение переплавляется в хохот.',
        },
      ],
      milestones: [
        {
          date: 'Май 2007',
          platform: 'Геймерские форумы',
          significance: 'Мем вырывается за пределы 4chan и расползается по Digg, Reddit и Slashdot.',
        },
        {
          date: '1 апр 2008',
          platform: 'Главная страница YouTube',
          significance: 'Абсолютно каждое промо-видео на главной странице видеохостинга ведет на клип Рика.',
        },
        {
          date: 'Ноябрь 2008',
          platform: 'Премия MTV Europe Awards',
          significance: 'Сетевой флешмоб признает Астли «Лучшим артистом всех времен».',
        },
        {
          date: 'Июль 2021',
          platform: 'Клуб миллиардников',
          significance: 'Официальный музыкальный клип на YouTube перешагивает отметку в 1 000 000 000 просмотров.',
        },
      ],
    },

    section5RealWorld: {
      kicker: '2008 ГОД · ПРЫЖОК ЧЕРЕЗ ЭКРАН',
      title: 'ВЫХОД В РЕАЛЬНОСТЬ',
      lead: 'Уличные митинги, праздничные парады, ревущие стадионы и престижные телепремии.',
      paragraphs: [
        'В 2008 году мем окончательно пробил границы виртуальности: бумбоксы на пикетах сайентологов, флешмоб на бейсбольном стадионе «Шей» и сам Рик Астли, лично подставивший зрителей праздничного парада Macy’s.',
      ],
      events: [
        {
          id: 'chanology',
          date: '10 фев 2008',
          eventTitle: 'Акции протеста «Чанология»',
          location: 'Города по всей планете',
          participants: 'Тысячи анонимных пикетчиков',
          whatHappened:
            'Толпы людей врубали «Never Gonna Give You Up» на всю катушку из кассетных магнитофонов у офисов сайентологии.',
          culturalMeaning:
            'Первый знаковый случай в истории, когда цифровой мем стал боевым знаменем реального уличного протеста.',
        },
        {
          id: 'mets',
          date: 'Апрель 2008',
          eventTitle: 'Опрос стадиона New York Mets',
          location: 'Стадион «Шей», Нью-Йорк',
          participants: 'Более 5 млн проголосовавших',
          whatHappened:
            'Пять миллионов сетевых активистов накрутили голоса в опросе о гимне 8-го иннинга, вынудив руководство стадиона крутить трек.',
          culturalMeaning:
            'Сетевое братство наглядно продемонстрировало, как играючи можно сломать чопорный корпоративный опрос.',
        },
        {
          id: 'macys',
          date: '27 ноя 2008',
          eventTitle: 'Засада на параде Macy’s',
          location: 'Прямой эфир NBC-TV',
          participants: '50+ миллионов телезрителей',
          whatHappened:
            'Рик Астли собственной персоной выпрыгнул из декораций мультяшной платформы Cartoon Network в День благодарения.',
          culturalMeaning:
            'Исполнитель самолично и без предупреждения зарикроллил многомиллионную национальную аудиторию в прямом эфире.',
        },
        {
          id: 'mtv',
          date: '6 ноя 2008',
          eventTitle: 'Премия MTV Europe Music Awards',
          location: 'Ливерпуль, Великобритания',
          participants: 'Миллионы голосующих со всего мира',
          whatHappened:
            'Фанаты в сети массово проголосовали за Астли, оставив позади мастодонтов вроде U2 и Бритни Спирс.',
          culturalMeaning:
            'Интернет-голосование легко перевернуло консервативную музыкальную индустрию вверх дном.',
        },
      ],
    },

    section6WhyItWorks: {
      kicker: 'МЕХАНИКА',
      title: 'ПОЧЕМУ ЭТОТ МЕМ НЕ УМИРАЕТ',
      lead: 'Четыре простые причины, по которым песня из 1987-го пережила все сетевые тренды.',
      paragraphs: [
        'Добродушный тон, прилипчивый припев и элементарные гиперссылки позволили этой шутке без проблем перешагнуть через целые поколения.',
      ],
      pillars: [
        {
          pillarNumber: '01',
          name: 'Чистый позитив',
          explanation: 'Никаких вирусов, никакого шантажа — лишь задорный эстрадный шлягер.',
        },
        {
          pillarNumber: '02',
          name: 'Контраст ожиданий',
          explanation: 'Чем громче и солиднее обещание на обложке ссылки, тем смешнее внезапный Рик.',
        },
        {
          pillarNumber: '03',
          name: 'Универсальность ссылок',
          explanation: 'Работает абсолютно везде, где есть текст, адресная строка или банальный QR-код.',
        },
        {
          pillarNumber: '04',
          name: 'Общий пароль',
          explanation: 'Негласный обряд боевого крещения, который ветераны форумов бережно передают новичкам.',
        },
      ],
    },

    section7Afterlife: {
      kicker: 'ПОСЛЕСЛОВИЕ · С 1987-ГО ДО СЕГОДНЯ',
      title: 'СЛУЧАЙНОЕ БЕССМЕРТИЕ',
      lead: 'Как заурядный клип из восьмидесятых превратился в нерушимый сетевой фольклор.',
      paragraphs: [
        'Вовремя подыграв розыгрышу и искренне посмеявшись над собой, Рик Астли помог старой песне собрать более полутора миллиардов просмотров и обрести вечную жизнь.',
      ],
      quote:
        '«Если люди до сих пор смеются и отплясывают под эту запись спустя тридцать с лишним лет — о чем вообще артист еще может мечтать?»',
      quoteAuthor: '— Рик Астли',
      cardHeading: 'История рикроллинга подошла к финалу',
      cardSubtext: 'От студийной сессии в Кэмдене за пару фунтов до полутора миллиардов просмотров и вечного места в веб-культуре.',
      proceedButton: 'Смотреть источники и колофон',
    },
  },

  colophon: {
    closingQuote:
      '«Медиаобъект перерастает своих создателей в тот самый миг, когда зрители решают, что отныне он принадлежит всем».',
    sourcesTitle: 'Проверенные источники и архивы',
    sourcesSubtitle: 'Цифровая история',
    citations: [
      {
        id: 'astley-bbc',
        title: 'Как рикроллинг перевернул мою жизнь',
        authorOrSource: 'Рик Астли / BBC News и Rolling Stone',
        year: '2016–2021',
        annotation:
          'Откровения Астли о том, как он впервые узнал о меме от калифорнийских приятелей, посмеялся над шуткой и вышел на живое выступление на параде Macy’s в 2008 году.',
      },
      {
        id: 'pwl-history',
        title: 'Фабрика хитов: Невыдуманная хроника Stock Aitken Waterman',
        authorOrSource: 'Пит Уотермен / Архивы PWL, Лондон',
        year: '1987 / 2005',
        annotation:
          'Студийные производственные отчеты о сессии Астли на 24-дорожечный магнитофон в 1987 году и съемках недорогого клипа в лондонском Кэмдене.',
      },
      {
        id: 'fourchan-gta',
        title: 'История прародителя Duckroll и хроника розыгрыша с трейлером GTA IV',
        authorOrSource: 'Архивы истории интернет-мемов',
        year: '2007',
        annotation:
          'Первичная документация, отслеживающая появление деревянной утки на колесах и первую зафиксированную ссылку рикролла от 29 марта 2007 года.',
      },
      {
        id: 'macys-broadcast',
        title: 'Запись прямого эфира парада Macy’s ко Дню благодарения',
        authorOrSource: 'Архивы новостной службы NBC',
        year: '2008',
        annotation:
          'Исторические видеоматериалы внезапного живого выступления Астли под фонограмму на праздничной платформе мультсериала «Фостер: Дом для друзей».',
      },
    ],
    devNoteTypographyTitle: 'честно-честно',
    devNoteTypographyText:
      'текст писал сам процентов на 70-80%',
    devNoteTypographyFile: 'src/dima/slovapravdy.md',
    devNoteMediaTitle: 'Конфигурация медиаресурсов',
    devNoteMediaText:
      'но кодить я прям не умею',
    devNoteMediaFile: '',
    creditsTag: 'Визуальная медиановелла',
    creditsProject: 'Случайное бессмертие',
    creditsYear: '2026',
    creditsFairUse: 'Добросовестное использование и культурологический разбор',
    creditsAudioSynth: 'Звуковые фрагменты синтезируются прямо на стороне браузера через Web Audio API',
  },

  mediaComponents: {
    loadingMedia: 'Загрузка медиа...',
    loadingAnimation: 'Подгрузка анимации...',
    connectingDrive: 'Подключение к Google Drive...',
    fallbackImageTitle: 'Архивный кадр',
    fallbackImageNotice: 'Адрес источника недоступен · Разметка сохранена',
    fallbackGifTitle: 'Анимированный GIF',
    fallbackGifNotice: 'GIF по указанной ссылке недоступен',
    gifBadge: 'GIF',
    embedInfoButton: 'О файле',
    openInDriveTitle: 'Открыть на Google Диске',
    driveNoticeTitle: 'Особенности показа видео с Google Drive:',
    driveNoticeDescription:
      'Ролик проигрывается через официальный эндпоинт встраивания /preview от Google Drive. Для надежного воспроизведения у всех читателей:',
    driveNoticeBullets: [
      'Убедитесь, что для файла на Google Диске выставлен доступ «Все, у кого есть ссылка, могут просматривать».',
      'Проверьте правильность адреса в файле src/config/media.ts.',
      'Прямые ссылки на скачивание или приватные файлы вызовут ошибку доступа внутри стандартного плеера Google.',
    ],
  },
};
