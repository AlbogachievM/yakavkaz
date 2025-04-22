import {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import L from 'leaflet';
import img from '../assets/qw/2.png'
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
        category: "Госучреждения",
        locations: [
            {
                name: "Местное отделение администрации",
                lat: 55.751244,
                lng: 37.618423,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Администрация района для решения гражданских вопросов.",
                imageUrl: img
            },
            {
                name: "Центр обслуживания граждан",
                lat: 55.757144,
                lng: 37.617423,
                workingHours: "Пн-Пт 08:00 - 17:00",
                description: "Центр, где предоставляются государственные услуги.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Почта",
        locations: [
            {
                name: "Главпочтамт",
                lat: 55.752121,
                lng: 37.621302,
                workingHours: "Пн-Сб 08:00 - 20:00",
                description: "Главный почтовый офис с широким спектром услуг.",
                imageUrl: img
            },
            {
                name: "Отделение Почты России",
                lat: 55.755833,
                lng: 37.629722,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Отделение для получения и отправки почты.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Банки",
        locations: [
            {
                name: "Банк №1",
                lat: 55.760144,
                lng: 37.630423,
                workingHours: "Пн-Пт 09:00 - 19:00",
                description: "Основной офис банка с полным спектром банковских услуг.",
                imageUrl: img
            },
            {
                name: "Банк №2",
                lat: 55.748733,
                lng: 37.614905,
                workingHours: "Пн-Пт 09:00 - 17:00",
                description: "Филиал банка с услугами для физических и юридических лиц.",
                imageUrl: img
            },
            {
                name: "Отделение Банка №3",
                lat: 55.753222,
                lng: 37.620589,
                workingHours: "Пн-Пт 10:00 - 18:00",
                description: "Отделение банка для корпоративных клиентов.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Экстренные службы",
        locations: [
            {
                name: "Отделение полиции",
                lat: 55.751897,
                lng: 37.616886,
                workingHours: "Круглосуточно",
                description: "Полиция для обеспечения общественного порядка.",
                imageUrl: img
            },
            {
                name: "Пожарная часть №4",
                lat: 55.762348,
                lng: 37.625885,
                workingHours: "Круглосуточно",
                description: "Пожарная часть для быстрого реагирования на чрезвычайные ситуации.",
                imageUrl: img
            },
            {
                name: "Станция скорой помощи",
                lat: 55.758123,
                lng: 37.622134,
                workingHours: "Круглосуточно",
                description: "Станция скорой помощи, доступная в любое время.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Пункты полиции и охранные службы",
        locations: [
            {
                name: "Пост полиции №1",
                lat: 55.754244,
                lng: 37.627423,
                workingHours: "Круглосуточно",
                description: "Пост для обеспечения общественного порядка.",
                imageUrl: img
            },
            {
                name: "Охранная служба 'Безопасность'",
                lat: 55.759533,
                lng: 37.629392,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Охранная служба для защиты собственности.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Пункты ЖКХ",
        locations: [
            {
                name: "Управляющая компания №1",
                lat: 55.756789,
                lng: 37.631256,
                workingHours: "Пн-Пт 08:00 - 17:00",
                description: "Компания, обслуживающая жилые и коммерческие здания.",
                imageUrl: img
            },
            {
                name: "Пункт ЖКХ Центрального района",
                lat: 55.753954,
                lng: 37.617145,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Пункт для решения вопросов по коммунальным услугам.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Налоговые службы",
        locations: [
            {
                name: "Налоговая служба №5",
                lat: 55.749144,
                lng: 37.628293,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Отделение налоговой службы для подачи налоговых деклараций.",
                imageUrl: img
            },
            {
                name: "Центр налогового обслуживания",
                lat: 55.752991,
                lng: 37.623578,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Центр для получения консультаций по налоговым вопросам.",
                imageUrl: img
            },
        ],
    },
    {
        category: "Нотариусы и адвокаты",
        locations: [
            {
                name: "Нотариус Иванов И.И.",
                lat: 55.750732,
                lng: 37.629837,
                workingHours: "Пн-Пт 10:00 - 18:00",
                description: "Нотариус, предоставляющий услуги по удостоверению документов.",
                imageUrl: img
            },
            {
                name: "Адвокатское бюро 'Юстиция'",
                lat: 55.752124,
                lng: 37.619905,
                workingHours: "Пн-Пт 09:00 - 18:00",
                description: "Адвокатское бюро, предоставляющее юридическую помощь.",
                imageUrl: img
            },
        ],
    },
];

export const PublicServices = () => {
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
                    service.category.toLowerCase().includes(query);
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
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Государственные Учреждения</h1>
                <p className="text-lg mt-10 text-gray-600 max-w-[1100px] mx-auto">
                    Здесь вы можете найти важнейшие государственные учреждения и службы, которые помогут вам решать
                    различные вопросы. Узнайте местоположение и контактную информацию государственных услуг, таких как
                    почтовые отделения, банки, экстренные службы, пункты полиции, охранные службы, ЖКХ, налоговые
                    службы, а также нотариусы и адвокаты. Всё, что нужно для вашего удобства и безопасности, находится в
                    одном месте.
                </p>
            </div>
            <section className="max-w-6xl mx-auto mb-20">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Карта учреждений</h2>
                <MapContainer
                    center={[55.751244, 37.618423]}
                    zoom={15}
                    className="h-96 w-full rounded-lg shadow-lg overflow-hidden"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                        <ul className="space-y-4">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
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
    useEffect(() => {
        map.setView([location.lat, location.lng], 13);
    }, [location, map]);

    return null;
};