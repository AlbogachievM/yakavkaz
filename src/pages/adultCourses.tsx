import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
interface Course {
    id: number;
    name: string;
    category: string;
    duration: string;
    price: string;
    description: string;
    schedule: string;
    location: {
        city: string;
        coordinates: [number, number];
    };
}
const coursesData:Course[] = [
    {
        id: 1,
        name: 'Курс по веб-разработке',
        category: 'Технологии',
        duration: '3 месяца',
        price: '5000 руб.',
        description: 'Основы веб-разработки: HTML, CSS, JavaScript.',
        schedule: 'Вт-Чт: 19:00-21:00',
        location: { city: 'Москва', coordinates: [55.7558, 37.6176] }
    },
    {
        id: 2,
        name: 'Тренинг по управлению временем',
        category: 'Личностный рост',
        duration: '1 месяц',
        price: '3000 руб.',
        description: 'Эффективное управление временем и продуктивностью.',
        schedule: 'Сб-Вс: 14:00-16:00',
        location: { city: 'Санкт-Петербург', coordinates: [59.9311, 30.3609] }
    },
    {
        id: 3,
        name: 'Курс по английскому языку',
        category: 'Языки',
        duration: '6 месяцев',
        price: '8000 руб.',
        description: 'Изучение английского языка с нуля.',
        schedule: 'Пн-Ср-Пт: 18:00-20:00',
        location: { city: 'Казань', coordinates: [55.7887, 49.1221] }
    },
    {
        id: 4,
        name: 'Основы фотографии',
        category: 'Искусство',
        duration: '2 месяца',
        price: '4000 руб.',
        description: 'Изучение основ композиции и техники фотографии.',
        schedule: 'Ср-Пт: 17:00-19:00',
        location: { city: 'Екатеринбург', coordinates: [56.8389, 60.6057] }
    },
    {
        id: 5,
        name: 'Курс по маркетингу',
        category: 'Бизнес',
        duration: '4 месяца',
        price: '7000 руб.',
        description: 'Основы маркетинга и продвижения товаров и услуг.',
        schedule: 'Пн-Чт: 18:00-20:00',
        location: { city: 'Новосибирск', coordinates: [55.0084, 82.9357] }
    },
    {
        id: 6,
        name: 'Основы программирования на Python',
        category: 'Технологии',
        duration: '3 месяца',
        price: '6000 руб.',
        description: 'Программирование для начинающих на языке Python.',
        schedule: 'Вт-Сб: 17:00-19:00',
        location: { city: 'Красноярск', coordinates: [56.0153, 92.8932] }
    },
    {
        id: 7,
        name: 'Курс по бухгалтерскому учету',
        category: 'Бизнес',
        duration: '5 месяцев',
        price: '8500 руб.',
        description: 'Изучение бухгалтерского учета и финансовой отчетности.',
        schedule: 'Пн-Ср: 18:00-20:00',
        location: { city: 'Воронеж', coordinates: [51.6755, 39.2089] }
    },
    {
        id: 8,
        name: 'Тренинг по ораторскому мастерству',
        category: 'Личностный рост',
        duration: '2 месяца',
        price: '4500 руб.',
        description: 'Навыки публичных выступлений и уверенности в себе.',
        schedule: 'Сб-Вс: 15:00-17:00',
        location: { city: 'Самара', coordinates: [53.1959, 50.1002] }
    },
    {
        id: 9,
        name: 'Курс по финансам для начинающих',
        category: 'Бизнес',
        duration: '3 месяца',
        price: '6500 руб.',
        description: 'Основы финансовой грамотности и управления деньгами.',
        schedule: 'Пн-Ср: 17:00-19:00',
        location: { city: 'Ростов-на-Дону', coordinates: [47.2357, 39.7015] }
    },
    {
        id: 10,
        name: 'Курс по дизайну интерьера',
        category: 'Искусство',
        duration: '4 месяца',
        price: '7500 руб.',
        description: 'Основы дизайна интерьера и декорирования.',
        schedule: 'Вт-Пт: 18:00-20:00',
        location: { city: 'Уфа', coordinates: [54.7388, 55.9721] }
    },
];

export const AdultCourses = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCourse, setSelectedCourse] = useState<null | Course>(null);

    const filteredCourses = coursesData.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory ? course.category === selectedCategory : true)
    );

    const openModal = (course:null | Course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Курсы и тренинги для взрослых</h1>

            {/* Поисковая строка */}
            <input
                type="text"
                placeholder="Поиск курсов..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 bg-white mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            {/* Фильтр по категории */}
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 mb-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
                <option value="">Категория</option>
                <option value="Технологии">Технологии</option>
                <option value="Личностный рост">Личностный рост</option>
                <option value="Языки">Языки</option>
            </select>

            {/* Список курсов */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map(course => (
                    <div key={course.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{course.name}</h2>
                        <p className="text-gray-600">{course.category} • {course.duration} • {course.price}</p>
                        <p className="mt-2 text-gray-800">{course.description}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                            onClick={() => openModal(course)}
                        >
                            Подробнее
                        </button>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {selectedCourse && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{selectedCourse.name}</h2>
                        <p className="mb-2"><strong>Категория:</strong> {selectedCourse.category}</p>
                        <p className="mb-2"><strong>Длительность:</strong> {selectedCourse.duration}</p>
                        <p className="mb-2"><strong>Цена:</strong> {selectedCourse.price}</p>
                        <p className="mb-2"><strong>Описание:</strong> {selectedCourse.description}</p>
                        <p className="mb-4"><strong>График занятий:</strong> {selectedCourse.schedule}</p>
                        <p className="mb-4"><strong>Местоположение:</strong> {selectedCourse.location.city}</p>

                        {/* Карта */}
                        <div className="h-64 mb-4">
                            <MapContainer
                                center={selectedCourse.location.coordinates}
                                zoom={13}
                                scrollWheelZoom={false}
                                className="h-full w-full rounded-lg"
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={selectedCourse.location.coordinates}>
                                    <Popup>{selectedCourse.name}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div className="flex gap-4">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                onClick={() => alert(`Вы заказали курс: ${selectedCourse.name}`)}
                            >
                                Заказать
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                onClick={() => alert(`Вы купили курс: ${selectedCourse.name}`)}
                            >
                                Купить
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                                onClick={closeModal}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


