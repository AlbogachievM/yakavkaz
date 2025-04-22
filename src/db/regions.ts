export type Landmark = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export type Region = {
    name: string;
    landmarks: Landmark[];
}

export const regions: Region[] = [
    {
        name: 'Дагестан',
        landmarks: [
            {id: 1, name: 'Дагестанский природный парк', latitude: 42.9896, longitude: 47.5113},
            {id: 2, name: 'Сулакский каньон', latitude: 42.7921, longitude: 47.3528},
            {id: 3, name: 'Хунзахский водопад', latitude: 42.9900, longitude: 47.4186},
            {id: 4, name: 'Дербент', latitude: 42.0666, longitude: 48.2914},
            {id: 5, name: 'Каспийское море', latitude: 42.8166, longitude: 47.3700},
            {id: 6, name: 'Гуниб', latitude: 42.7715, longitude: 46.7118},
        ],
    },
    {
        name: 'Чечня',
        landmarks: [
            {id: 7, name: 'Грозный', latitude: 43.3178, longitude: 45.6983},
            {id: 8, name: 'Гора Эльбрус', latitude: 43.3491, longitude: 42.4391},
            {id: 9, name: 'Чеченский государственный музей', latitude: 43.3136, longitude: 45.6947},
            {id: 10, name: 'Гора Чегет', latitude: 43.3615, longitude: 42.4315},
            {id: 11, name: 'Ведучи', latitude: 43.1091, longitude: 45.7345},
            {id: 12, name: 'Грозненский мост', latitude: 43.3167, longitude: 45.6927},
        ],
    },
    {
        name: 'Северная Осетия',
        landmarks: [
            {id: 13, name: 'Кавказский биосферный заповедник', latitude: 43.7486, longitude: 41.7242},
            {id: 14, name: 'Водопад Азау', latitude: 43.3058, longitude: 42.9398},
            {id: 15, name: 'Алания', latitude: 43.3289, longitude: 42.7712},
            {id: 16, name: 'Канатная дорога на Эльбрус', latitude: 43.3491, longitude: 42.4391},
            {id: 17, name: 'Грозный', latitude: 43.3178, longitude: 45.6983},
            {id: 18, name: 'Армянский храм', latitude: 43.3119, longitude: 42.7718},
        ],
    },
    {
        name: 'Кабардино-Балкария',
        landmarks: [
            {id: 19, name: 'Казбеги', latitude: 43.3253, longitude: 42.6046},
            {id: 20, name: 'Терсколь', latitude: 43.2980, longitude: 42.4436},
            {id: 21, name: 'Сельджукская крепость', latitude: 43.3646, longitude: 42.4581},
            {id: 22, name: 'Баксан', latitude: 43.2071, longitude: 42.6247},
            {id: 23, name: 'Чегемские водопады', latitude: 43.2949, longitude: 42.5733},
        ],
    },
    {
        name: 'Ставропольский край',
        landmarks: [
            {id: 24, name: 'Пятигорск', latitude: 44.0415, longitude: 43.0694},
            {id: 25, name: 'Ессентуки', latitude: 44.0275, longitude: 42.8615},
            {id: 26, name: 'Кисловодск', latitude: 42.7111, longitude: 42.7158},
            {id: 27, name: 'Лермонтов', latitude: 44.0403, longitude: 42.7842},
            {id: 28, name: 'Гора Машук', latitude: 44.0400, longitude: 43.0369},
            {id: 29, name: 'Бештау', latitude: 44.1417, longitude: 42.8856},
        ],
    },
    {
        name: 'Карачаево-Черкесия',
        landmarks: [
            {id: 30, name: 'Гора Эльбрус', latitude: 43.3491, longitude: 42.4391},
            {id: 31, name: 'Долина нарзанов', latitude: 43.6250, longitude: 42.3931},
            {id: 32, name: 'Шале на Эльбрусе', latitude: 43.3167, longitude: 42.4386},
            {id: 33, name: 'Водопад Ирикчат', latitude: 43.4483, longitude: 42.5131},
            {id: 34, name: 'Карачаевск', latitude: 43.7102, longitude: 42.4795},
        ],
    },
    {
        name: 'Ингушетия',
        landmarks: [
            {id: 35, name: 'Троицкая церковь', latitude: 43.4173, longitude: 44.7639},
            {id: 36, name: 'Джинал', latitude: 43.3842, longitude: 44.7098},
            {id: 37, name: 'Вежи', latitude: 43.3391, longitude: 44.7332},
            {id: 38, name: 'Тарский Каньон', latitude: 43.3767, longitude: 44.7479},
            {id: 39, name: 'Меклез', latitude: 43.4674, longitude: 44.8431},
        ],
    },
];
