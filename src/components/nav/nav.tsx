import {useState} from "react";
import {routes} from "@/rout/routes.ts";

export const menuItems = [
    {
        title: "Регион",
    },
    {
        title: "Транспорт",
        submenu: [
            { title: "Авиа и ЖД билеты и расписание", link: routes.transport.aviationAndRailway },
            { title: "Расписание городского транспорта", link: routes.transport.citySchedule },
            { title: "Прокат траспорта", link: routes.transport.scooterRental },
            { title: "Дорожная обстановка и пробки", link: routes.transport.trafficConditions },
        ],
    },
    {
        title: "Проживание",
        submenu: [
            { title: "Гостиницы", link: routes.accommodation.hotels },
            { title: "Дома для отдыха", link: routes.accommodation.vacationHomes },
            { title: "Санатории", link: routes.accommodation.sanatoriums },
            { title: "Коворкинг-центры", link: routes.accommodation.coworkingCenters },
        ],
    },
    {
        title: "Еда",
        submenu: [
            { title: "Доставка еды", link: routes.food.delivery },
            { title: "Доставка продуктов", link: routes.food.groceryDelivery },
            { title: "Рестораны и кафе", link: routes.food.restaurants },
            { title: "Магазины", link: routes.food.stores },
        ],
    },
    {
        title: "Туризм",
        submenu: [
            { title: "Туристические маршруты", link: routes.tourism.routes },
            { title: "Гиды и экскурсии", link: routes.tourism.guides },
            { title: "Природные заповедники и парки", link: routes.tourism.natureReserves },
            { title: "Виртуальный музей и панорамы 360", link: routes.tourism.virtualMuseum },
        ],
    },
    {
        title: "Куда пойти?",
        link: routes.tourism.placesToGo,
    },
    {
        title: "Госуслуги",
        link: routes.government.institutions,
    },
    {
        title: "Здоровье",
        submenu: [
            { title: "Ближайшие аптеки", link: routes.health.pharmacies },
            { title: "Больницы и клиники", link: routes.health.hospitals },
            { title: "Спортивные залы и секции", link: routes.health.sports },
            { title: "Спортивные мероприятия", link: routes.health.events },
        ],
    },
    {
        title: "Образование",
        submenu: [
            { title: "Учебные заведения", link: routes.education.institutions },
            { title: "Кружки и секции для детей", link: routes.education.childrenClasses },
            { title: "Курсы и тренинги для взрослых", link: routes.education.adultCourses },
        ],
    },
    {
        title: "Бытовые услуги",
        submenu: [
            { title: "Чистка и ремонт одежды", link: routes.services.clothingRepair },
            { title: "Ремонт техники", link: routes.services.deviceRepair },
            { title: "Пункты переработки отходов", link: routes.services.recycling },
            { title: "Доставка воды", link: routes.services.waterAndGas },
            { title: "Доска объявлений и услуг", link: routes.services.classifieds },
        ],
    },
    {
        title: "Мобильные сервисы",
        submenu: [
            { title: "Приложение для скачивания", link: routes.mobile.appDownload },
            { title: "Wi-Fi точки доступа", link: routes.mobile.wifiAccess },
            { title: "Мобильные операторы и точки пополнения счета", link: routes.mobile.operators },
        ],
    },
];


export const Nav = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleMouseEnter = (index: number) => {
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

                    {item.link ?
                        <a href={`#/${item.link}`} className={`${activeIndex === index && "border-b-[1px]"} uppercase`}>
                            {item.title}
                        </a> :
                        <a href={`#/${item.link}}`} className={`${activeIndex === index && "border-b-[1px]"} uppercase`}>
                            {item.title}
                        </a>
                    }


                    {activeIndex === index && (
                        <div
                            className="absolute top-6 left-[50%] translate-x-[-50%] p-2 flex flex-col bg-black z-40 min-w-max shadow-lg"
                            onMouseLeave={handleMouseLeave}>
                            {item.submenu && item.submenu.map((submenuItem, subIndex) => (
                                <a key={subIndex} href={`#${submenuItem.link}`}
                                   className="block w-full p-1 text-white text-center hover:opacity-80">
                                    {submenuItem.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};



