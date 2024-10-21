import {useState} from "react";

export const menuItems = [
    {
        title: "Транспорт",
        submenu: [
            "Авиа и ЖД билеты и расписание",
            "Расписание городского транспорта",
            "Прокат самокатов",
            "Дорожная обстановка и пробки",
        ],
    },
    {
        title: "Проживание",
        submenu: [
            "Гостиницы",
            "Дома для отдыха",
            "Санатории",
            "Коворкинг-центры",
        ],
    },
    {
        title: "Еда",
        submenu: [
            "Доставка еды",
            "Доставка продуктов",
            "Рестораны и кафе",
            "Магазины",
        ],
    },
    {
        title: "Туризм",
        submenu: [
            "Туристические маршруты",
            "Гиды и экскурсии",
            "Природные заповедники и парки",
            "Виртуальный музей",
            "Панорамы 360",
            "Афиша культурных мероприятий",
            "Куда пойти?",
            "Развлечения для детей и семей",
        ],
    },
    {
        title: "Госуслуги",
        submenu: [
            "Госучреждения",
            "Почта",
            "Банки",
            "Экстренные службы",
            "Пункты полиции и охранные службы",
            "Пункты ЖКХ",
            "Налоговые службы",
            "Нотариусы и адвокаты",
        ],
    },
    {
        title: "Здоровье",
        submenu: [
            "Ближайшие аптеки",
            "Больницы и клиники",
            "Спортивные залы и секции",
            "Спортивные мероприятия",
        ],
    },
    {
        title: "Образование",
        submenu: [
            "Учебные заведения",
            "Кружки и секции для детей",
            "Курсы и тренинги для взрослых",
        ],
    },
    {
        title: "Бытовые услуги",
        submenu: [
            "Чистка и ремонт одежды",
            "Ремонт техники",
            "Пункты переработки отходов",
            "Доставка воды и газа",
            "Доска объявлений и услуг",
        ],
    },
    {
        title: "Мобильные сервисы",
        submenu: [
            "Приложение для скачивания",
            "Wi-Fi точки доступа",
            "Мобильные операторы и точки пополнения счета",
        ],
    },
];

export const Nav = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleMouseEnter = (index:number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <nav className="flex items-center justify-between gap-4 text-[14px]">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    className="relative"

                >
                    {/* Основной элемент меню */}
                    <a href="#" className={`${activeIndex === index && "border-b-[1px]"} uppercase`}>
                        {item.title}
                    </a>
                    {/* Подменю */}
                    {activeIndex === index && ( // Если текущий элемент активен, показать подменю
                        <div className="absolute top-6 left-[50%] translate-x-[-50%] p-2 flex flex-col bg-black z-40 min-w-max"
                             onMouseLeave={handleMouseLeave}>
                            {item.submenu.map((submenuItem, subIndex) => (
                                <a key={subIndex} href="#" className="block w-full p-1 text-white text-center hover:opacity-80">
                                    {submenuItem}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};



