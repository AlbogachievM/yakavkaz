import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Club {
    id: number;
    name: string;
    category: string;
    ageGroup: string;
    city: string;
    description: string;
    schedule: string;
    location: [number, number];
}

const clubsData:Club[] = [
    { id: 1, name: 'Футбольная секция', category: 'Спорт', ageGroup: '6-8 лет', city: 'Москва', description: 'Тренировки по футболу для детей.', schedule: 'Пн-Пт: 16:00-18:00', location: [55.751244, 37.618423] },
    { id: 2, name: 'Рисование', category: 'Искусство', ageGroup: '3-5 лет', city: 'Санкт-Петербург', description: 'Кружок по рисованию для самых маленьких.', schedule: 'Сб-Вс: 10:00-12:00', location: [59.93428, 30.335099] },
    { id: 3, name: 'Программирование для детей', category: 'Наука', ageGroup: '9-12 лет', city: 'Казань', description: 'Основы программирования для детей.', schedule: 'Пн-Ср-Пт: 14:00-16:00', location: [55.796391, 49.108891] },
    { id: 4, name: 'Театральная студия', category: 'Искусство', ageGroup: '7-10 лет', city: 'Москва', description: 'Развитие актёрских навыков и публичных выступлений.', schedule: 'Вт-Чт: 17:00-19:00', location: [55.751244, 37.618423] },
    { id: 5, name: 'Шахматный клуб', category: 'Наука', ageGroup: '10-15 лет', city: 'Екатеринбург', description: 'Изучение основ шахмат и стратегии игры.', schedule: 'Пн-Пт: 15:00-17:00', location: [56.83893, 60.6057] },
    { id: 6, name: 'Карате', category: 'Спорт', ageGroup: '6-12 лет', city: 'Новосибирск', description: 'Тренировки по основам карате для детей.', schedule: 'Сб-Вс: 13:00-15:00', location: [55.008353, 82.935733] },
    { id: 7, name: 'Английский язык', category: 'Языки', ageGroup: '5-8 лет', city: 'Москва', description: 'Изучение английского языка через игры и упражнения.', schedule: 'Пн-Ср-Пт: 10:00-11:30', location: [55.751244, 37.618423] }
];

export const ChildrenClasses = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
    const [selectedClub, setSelectedClub] = useState<null | Club>(null);

    const filteredClubs = clubsData.filter(club =>
        club.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory ? club.category === selectedCategory : true) &&
        (selectedAgeGroup ? club.ageGroup === selectedAgeGroup : true)
    );

    const openModal = (club: null | Club) => {
        setSelectedClub(club);
    };

    const closeModal = () => {
        setSelectedClub(null);
    };
    return (
        <div className="p-6 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Кружки и секции для детей</h1>

            {/* Поисковая строка */}
            <input
                type="text"
                placeholder="Поиск кружков..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            {/* Фильтры */}
            <div className="flex gap-4 mb-4">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                    <option value="">Категория</option>
                    <option value="Спорт">Спорт</option>
                    <option value="Искусство">Искусство</option>
                    <option value="Наука">Наука</option>
                    <option value="Языки">Языки</option>
                </select>

                <select
                    value={selectedAgeGroup}
                    onChange={(e) => setSelectedAgeGroup(e.target.value)}
                    className="p-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                    <option value="">Возрастная группа</option>
                    <option value="3-5 лет">3-5 лет</option>
                    <option value="6-8 лет">6-8 лет</option>
                    <option value="9-12 лет">9-12 лет</option>
                    <option value="10-15 лет">10-15 лет</option>
                </select>
            </div>

            {/* Список кружков */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredClubs.map(club => (
                    <div key={club.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{club.name}</h2>
                        <p className="text-gray-600">{club.category} • {club.ageGroup} • {club.city}</p>
                        <p className="mt-2 text-gray-800">{club.description}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                            onClick={() => openModal(club)}
                        >
                            Подробнее
                        </button>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {selectedClub && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{selectedClub.name}</h2>
                        <p className="mb-2"><strong>Категория:</strong> {selectedClub.category}</p>
                        <p className="mb-2"><strong>Возрастная группа:</strong> {selectedClub.ageGroup}</p>
                        <p className="mb-2"><strong>Город:</strong> {selectedClub.city}</p>
                        <p className="mb-2"><strong>Описание:</strong> {selectedClub.description}</p>
                        <p className="mb-4"><strong>График работы:</strong> {selectedClub.schedule}</p>

                        {/* Карта */}
                        <MapContainer center={selectedClub.location} zoom={13} className="h-64 rounded-lg mb-4">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; OpenStreetMap contributors"
                            />
                            <Marker position={selectedClub.location}>
                                <Popup>{selectedClub.name}</Popup>
                            </Marker>
                        </MapContainer>

                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg"
                            onClick={closeModal}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

