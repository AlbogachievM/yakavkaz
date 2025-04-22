type WeekDay ={
    day: string;
    include: boolean;
}

export type TransportSchedule= {
    transport: string;
    way: number;
    name: string;
    week: WeekDay[];
    description: {
        time: string;
        route: string;
    }[];
}


export const schedule: TransportSchedule[] = [
    {
        transport: "Автобус",
        way: 42,
        name: "Маршрут A",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: false },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '9:00 - 18:00', route: 'Ул. Свободы, пр-т Ленина, ул. Героев Танкограда, ул. Комарова' },
            { time: '9:00 - 18:00', route: 'Ул. Герасимова, ул. Линейная, пр-т Ленина, ул. Бажова' }
        ]
    },
    {
        transport: "Автобус",
        way: 43,
        name: "Маршрут B",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '8:00 - 17:00', route: 'Ул. Строителей, ул. Победы, ул. Гагарина, пр-т Ленина' },
            { time: '8:00 - 17:00', route: 'Ул. Северная, пр-т Мира, ул. Труда, ул. Пушкина' }
        ]
    },
    {
        transport: "Автобус",
        way: 44,
        name: "Маршрут C",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: true },
            { day: "СР", include: false },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '7:00 - 16:00', route: 'Ул. Розы Люксембург, ул. Кирова, ул. Труда, ул. Советская' },
            { time: '7:00 - 16:00', route: 'Ул. Молодежная, ул. Лесная, пр-т Ленина, ул. Гоголя' }
        ]
    },
    {
        transport: "Автобус",
        way: 45,
        name: "Маршрут D",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '10:00 - 19:00', route: 'Ул. Ленина, ул. Героев, ул. Воровского, ул. Шоссейная' },
            { time: '10:00 - 19:00', route: 'Ул. Первомайская, ул. Комсомольская, ул. Октябрьская' }
        ]
    },
    {
        transport: "Автобус",
        way: 46,
        name: "Маршрут E",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: false },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '6:30 - 15:30', route: 'Ул. Южная, ул. Солнечная, ул. Центральная, ул. Горького' },
            { time: '6:30 - 15:30', route: 'Ул. Заводская, ул. Северная, пр-т Строителей, ул. Жукова' }
        ]
    },
    {
        transport: "Автобус",
        way: 47,
        name: "Маршрут F",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '9:00 - 18:00', route: 'Ул. Пушкина, ул. Тургенева, ул. Лермонтова' },
            { time: '9:00 - 18:00', route: 'Ул. Маяковского, ул. Чехова, ул. Жукова' }
        ]
    },
    {
        transport: "Автобус",
        way: 48,
        name: "Маршрут G",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: false },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '8:00 - 17:00', route: 'Ул. Северная, ул. Восточная, ул. Южная' },
            { time: '8:00 - 17:00', route: 'Ул. Лесная, ул. Садовая, ул. Цветочная' }
        ]
    },
    {
        transport: "Автобус",
        way: 49,
        name: "Маршрут H",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: false },
            { day: "СБ", include: true },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '7:00 - 16:00', route: 'Ул. Гоголя, ул. Пушкина, ул. Лермонтова' },
            { time: '7:00 - 16:00', route: 'Ул. Горького, ул. Шевченко, ул. Некрасова' }
        ]
    },
    {
        transport: "Автобус",
        way: 50,
        name: "Маршрут I",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '6:00 - 14:00', route: 'Ул. Советская, ул. Пролетарская, ул. Ленина' },
            { time: '6:00 - 14:00', route: 'Ул. Труда, ул. Победы, ул. Мира' }
        ]
    },
    {
        transport: "Автобус",
        way: 51,
        name: "Маршрут J",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: true },
            { day: "СР", include: false },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: false },
            { day: "СБ", include: true },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '10:00 - 19:00', route: 'Ул. Прямая, ул. Короткая, ул. Ленина' },
            { time: '10:00 - 19:00', route: 'Ул. Длинная, ул. Большая, ул. Центральная' }
        ]
    },
    {
        transport: "Трамвай",
        way: 42,
        name: "Маршрут A",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: false },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '9:00 - 18:00', route: 'Улицы маршрута: ул. Механическая, ул. Горького, пр-т Победы, ул. Кирова, ул. Труда, Свердловский пр-т, ул. Блюхера' },
            { time: '9:00 - 18:00', route: 'Улицы маршрута: ул. Степана Разина, ул. Цвиллинга, ул. Труда, ул. Кирова, ул. Каслинская' }
        ]
    },
    {
        transport: "Трамвай",
        way: 43,
        name: "Маршрут B",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '8:00 - 17:00', route: 'Улицы маршрута: ул. Свободы, пр-т Мира, ул. Сталеваров, ул. Комсомольская, ул. Дружбы' },
            { time: '8:00 - 17:00', route: 'Улицы маршрута: ул. Свердлова, ул. Гагарина, пр-т Ленина, ул. Победы' }
        ]
    },
    {
        transport: "Трамвай",
        way: 44,
        name: "Маршрут C",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: true },
            { day: "СР", include: false },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '7:00 - 16:00', route: 'Улицы маршрута: ул. Гоголя, ул. Солнечная, ул. Пролетарская, ул. Комарова' },
            { time: '7:00 - 16:00', route: 'Улицы маршрута: ул. Пушкина, ул. Чапаева, ул. Блюхера, ул. Волгоградская' }
        ]
    },
    {
        transport: "Трамвай",
        way: 45,
        name: "Маршрут D",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '10:00 - 19:00', route: 'Улицы маршрута: ул. Маяковского, ул. Толстого, пр-т Мира, ул. Свердлова' },
            { time: '10:00 - 19:00', route: 'Улицы маршрута: ул. Южная, ул. Дальняя, ул. Центральная' }
        ]
    },
    {
        transport: "Трамвай",
        way: 46,
        name: "Маршрут E",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: false },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '6:30 - 15:30', route: 'Улицы маршрута: ул. Зелёная, ул. Новая, ул. Садовая, ул. Заречная' },
            { time: '6:30 - 15:30', route: 'Улицы маршрута: ул. Восточная, ул. Мира, пр-т Ленина' }
        ]
    },
    {
        transport: "Трамвай",
        way: 47,
        name: "Маршрут F",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '9:00 - 18:00', route: 'Улицы маршрута: ул. Молодёжная, ул. Победы, ул. Космонавтов' },
            { time: '9:00 - 18:00', route: 'Улицы маршрута: ул. Ломоносова, ул. Пушкина, ул. Каслинская' }
        ]
    },
    {
        transport: "Трамвай",
        way: 48,
        name: "Маршрут G",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: true },
            { day: "СР", include: false },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: true },
            { day: "ВС", include: false }
        ],
        description: [
            { time: '8:00 - 17:00', route: 'Улицы маршрута: ул. Победы, ул. Школьная, ул. Гагарина, ул. Комсомольская' },
            { time: '8:00 - 17:00', route: 'Улицы маршрута: ул. Северная, ул. Сталеваров' }
        ]
    },
    {
        transport: "Трамвай",
        way: 49,
        name: "Маршрут H",
        week: [
            { day: "ПН", include: true },
            { day: "ВТ", include: true },
            { day: "СР", include: true },
            { day: "ЧТ", include: false },
            { day: "ПТ", include: false },
            { day: "СБ", include: true },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '7:00 - 16:00', route: 'Улицы маршрута: ул. Чайковского, ул. Бахметьева, ул. Гоголя' },
            { time: '7:00 - 16:00', route: 'Улицы маршрута: ул. Кирова, ул. Дружбы' }
        ]
    },
    {
        transport: "Трамвай",
        way: 50,
        name: "Маршрут I",
        week: [
            { day: "ПН", include: false },
            { day: "ВТ", include: false },
            { day: "СР", include: true },
            { day: "ЧТ", include: true },
            { day: "ПТ", include: true },
            { day: "СБ", include: false },
            { day: "ВС", include: true }
        ],
        description: [
            { time: '6:00 - 14:00', route: 'Улицы маршрута: ул. Труда, ул. Советская, ул. Достоевского' },
            { time: '6:00 - 14:00', route: 'Улицы маршрута: ул. Воровского, ул. Победы' }
        ]
    },
];
