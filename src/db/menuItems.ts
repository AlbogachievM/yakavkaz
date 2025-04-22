export const menuItems = [
    {
        title: "Мой путь ИИ",
        link: "/my-way",
    },
    {
        title: "Транспорт",
        submenu: [
            {title: "Авиа и ЖД билеты и расписание", link: "/transport/aviation-and-railway"},
            {title: "Расписание городского транспорта", link: "/transport/city-schedule"},
            {title: "Прокат траспорта", link: "/transport/scooter-rental"},
            {title: "Дорожная обстановка и пробки", link: "/transport/traffic-conditions"},
        ],
    },
    {
        title: "Проживание",
        submenu: [
            {title: "Гостиницы", link: "/accommodation/hotels"},
            {title: "Дома для отдыха", link: "/accommodation/vacation-homes"},
            {title: "Санатории", link: "/accommodation/sanatoriums"},
            {title: "Коворкинг-центры", link: "/accommodation/coworking-centers"},
        ],
    },
    {
        title: "Еда",
        submenu: [
            {title: "Доставка еды", link: "/food/delivery"},
            {title: "Доставка продуктов", link: "/food/grocery-delivery"},
            {title: "Рестораны и кафе", link: "/food/restaurants"},
            {title: "Магазины", link: "/food/stores"},
        ],
    },
    {
        title: "Туризм",
        submenu: [
            {title: "Туристические маршруты", link: "/tourism/routes"},
            {title: "Гиды и экскурсии", link: "/tourism/guides"},
            {title: "Природные заповедники и парки", link: "/tourism/nature-reserves"},
            {title: "Виртуальный музей и панорамы 360", link: "/tourism/virtual-museum"},
        ],
    },
    {
        title: 'Куда пойти?',
        link: '/tourism/places-to-go'
    },
    {
        title: "Госуслуги",
        link: '/government/publicServices',
        // submenu: [
        //     {title: "Госучреждения", link: "/government/institutions"},
        //     {title: "Почта", link: "/government/post"},
        //     {title: "Банки", link: "/government/banks"},
        //     {title: "Экстренные службы", link: "/government/emergency-services"},
        //     {title: "Пункты полиции и охранные службы", link: "/government/police"},
        //     {title: "Пункты ЖКХ", link: "/government/utilities"},
        //     {title: "Налоговые службы", link: "/government/tax-services"},
        //     {title: "Нотариусы и адвокаты", link: "/government/notaries-and-lawyers"},
        // ],
    },
    {
        title: "Здоровье",
        submenu: [
            {title: "Ближайшие аптеки", link: "/health/pharmacies"},
            {title: "Больницы и клиники", link: "/health/hospitals"},
            {title: "Спортивные залы и секции", link: "/health/sports"},
            {title: "Спортивные мероприятия", link: "/health/events"},
        ],
    },
    {
        title: "Образование",
        submenu: [
            {title: "Учебные заведения", link: "/education/institutions"},
            {title: "Кружки и секции для детей", link: "/education/children-classes"},
            {title: "Курсы и тренинги для взрослых", link: "/education/adult-courses"},
        ],
    },
    {
        title: "Бытовые услуги",
        submenu: [
            {title: "Чистка и ремонт одежды", link: "/services/clothing-repair"},
            {title: "Ремонт техники", link: "/services/device-repair"},
            {title: "Пункты переработки отходов", link: "/services/recycling"},
            {title: "Доставка воды", link: "/services/water-and-gas"},
            {title: "Доска объявлений и услуг", link: "/services/classifieds"},
        ],
    },
    {
        title: "Мобильные сервисы",
        submenu: [
            {title: "Приложение для скачивания", link: "/mobile/app-download"},
            {title: "Wi-Fi точки доступа", link: "/mobile/wifi-access"},
            {title: "Мобильные операторы и точки пополнения счета", link: "/mobile/operators"},
        ],
    },
];