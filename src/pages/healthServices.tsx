import {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import L from 'leaflet';
import img from '../assets/qw/1.jpg'
import "leaflet/dist/leaflet.css"

interface Location {
    name: string;
    lat: number;
    lng: number;
    workingHours: string;
    description: string;
    imageUrl: string; // URL изображения
}

interface Service {
    category: string;
    locations: Location[];
}

const services: Service[] = [
    {
        category: "Здоровье",
        locations: [
            {
                name: "Аптека №1",
                lat: 55.758644,
                lng: 37.617634,
                workingHours: "Пн-Пт 08:00 - 21:00, Сб-Вс 09:00 - 18:00",
                description: "Аптека с широким ассортиментом лекарств и медицинских товаров.",
                imageUrl: img
            },
            {
                name: "Аптека №2",
                lat: 55.753234,
                lng: 37.623145,
                workingHours: "Пн-Пт 09:00 - 19:00",
                description: "Аптека с обслуживанием по рецептам и без.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Больницы и клиники",
        locations: [
            {
                name: "Городская больница №1",
                lat: 55.755631,
                lng: 37.628423,
                workingHours: "Круглосуточно",
                description: "Основная больница города с широким спектром медицинских услуг.",
                imageUrl: img
            },
            {
                name: "Клиника 'Здоровье'",
                lat: 55.752451,
                lng: 37.616511,
                workingHours: "Пн-Пт 08:00 - 20:00",
                description: "Частная клиника для проведения медицинских обследований и консультаций.",
                imageUrl: img
            },
            {
                name: "Стоматологическая клиника",
                lat: 55.748522,
                lng: 37.617214,
                workingHours: "Пн-Пт 09:00 - 19:00",
                description: "Клиника, специализирующаяся на стоматологических услугах.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Спортивные залы и секции",
        locations: [
            {
                name: "Фитнес-клуб 'Здоровье'",
                lat: 55.758298,
                lng: 37.617412,
                workingHours: "Пн-Пт 07:00 - 23:00, Сб-Вс 08:00 - 22:00",
                description: "Современный фитнес-клуб с тренажерным залом и группами по йоге.",
                imageUrl: img
            },
            {
                name: "Спортивный зал 'Актив'",
                lat: 55.753178,
                lng: 37.618964,
                workingHours: "Пн-Пт 08:00 - 20:00",
                description: "Спортивный зал для занятий фитнесом, боксом и другими видами спорта.",
                imageUrl: img
            },
            {
                name: "Танцевальная студия 'Ритм'",
                lat: 55.750934,
                lng: 37.622056,
                workingHours: "Пн-Пт 10:00 - 20:00",
                description: "Студия для занятий танцами и хореографией.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Спортивные мероприятия",
        locations: [
            {
                name: "Стадион 'Лужники'",
                lat: 55.710383,
                lng: 37.553236,
                workingHours: "Круглосуточно",
                description: "Крупный стадион, на котором проводятся спортивные мероприятия и концерты.",
                imageUrl: img
            },
            {
                name: "Ледовый дворец 'Кристалл'",
                lat: 55.755748,
                lng: 37.617892,
                workingHours: "Пн-Пт 10:00 - 22:00",
                description: "Место проведения хоккейных матчей и катания на коньках.",
                imageUrl: img
            },
            {
                name: "Футбольный стадион 'Спартак'",
                lat: 55.808232,
                lng: 37.518978,
                workingHours: "Время проведения матчей",
                description: "Домашний стадион футбольного клуба 'Спартак'.",
                imageUrl: img
            },
        ],
    },
];


export const HealthServices = () => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const handleLocationClick = (location: Location) => {
        setSelectedLocation(location);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const filteredServices = services
        .map(service => {
            const filteredLocations = service.locations.filter(location => {
                const query = searchQuery.toLowerCase();
                return location.name.toLowerCase().includes(query) ||
                    service.category.toLowerCase().includes(query); // Ищем по названию и категории
            });

            return {
                ...service,
                locations: filteredLocations
            };
        })
        .filter(service => service.locations.length > 0);
    return (
        <div className="min-h-screen py-10 px-4 ">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Здравоохранение и Спорт</h1>
                <p className="text-lg mt-10 text-gray-600 max-w-[1100px] mx-auto">
                    Здесь вы найдете важную информацию о ближайших аптеках, больницах и клиниках, а также спортивных залах,
                    секциях и мероприятиях. Мы собрали для вас данные о местах, где можно получить медицинскую помощь, пройти
                    лечение или заняться спортом. Все нужные услуги для вашего здоровья и активного образа жизни — в одном месте.
                </p>
            </div>


            {/* Карта с метками */}
            <section className="max-w-6xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Карта учреждений</h2>
                <MapContainer
                    center={[55.751244, 37.618423]}
                    zoom={13}
                    className="h-96 w-full rounded-lg shadow-lg overflow-hidden"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredServices.map((service) =>
                        service.locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={[location.lat, location.lng]}
                                eventHandlers={{
                                    click: () => handleLocationClick(location)
                                }}
                                icon={L.icon({
                                    iconUrl: location.imageUrl,
                                    iconSize: [25, 25],
                                    iconAnchor: [25, 50],
                                    popupAnchor: [0, -50],
                                })}
                            >
                                <Popup>{location.name}</Popup>
                            </Marker>
                        ))
                    )}
                    {selectedLocation && (
                        <MoveToLocation location={selectedLocation}/>
                    )}
                </MapContainer>
            </section>
            <div className="max-w-6xl mx-auto mb-12">
                <input
                    type="text"
                    placeholder="Поиск по названию или категории"
                    className="w-full p-3 border border-gray-300 bg-white rounded-lg"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {/* Список учреждений по категориям */}
            <section className="max-w-6xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Список учреждений</h2>
                {filteredServices.map((service, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.category}</h3>
                        <ul className="space-y-4 z-[99999]">
                            {service.locations.map((location, idx) => (
                                <li
                                    key={idx}
                                    className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                                    onClick={() => handleLocationClick(location)}
                                >
                                    <img
                                        src={location.imageUrl}
                                        alt={location.name}
                                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                                    />
                                    <div className="flex-grow">
                                        <h4 className="text-lg font-semibold text-gray-800">{location.name}</h4>
                                        <p className="text-gray-600 text-sm">График работы: {location.workingHours}</p>
                                    </div>
                                    <div className="text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 19l7-7-7-7M5 12h14"></path>
                                        </svg>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Модальное окно с описанием локации */}
            {selectedLocation && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">{selectedLocation.name}</h2>
                        <img
                            src={selectedLocation.imageUrl}
                            alt={selectedLocation.name}
                            className="w-full h-48 object-cover rounded-md shadow-md"
                        />
                        <p className="text-gray-600">{selectedLocation.description}</p>
                        <p className="text-gray-600">График работы: {selectedLocation.workingHours}</p>
                        <div className="text-right">
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
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

const MoveToLocation = ({location}: { location: Location }) => {
    const map = useMap();
    map.flyTo([location.lat, location.lng], 14);

    return null;
};
