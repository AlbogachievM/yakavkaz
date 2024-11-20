import React, {useState, ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L, { LatLngExpression, Icon,  } from 'leaflet';
import 'leaflet-routing-machine';
type TaxiData = {
    type: 'standard' | 'comfort' | 'business';
    position: [number, number];
};

interface RegionTaxiData {
    [key: string]: TaxiData[];
}

const regionTaxiData: RegionTaxiData = {
    "Москва": [
        { type: 'standard', position: [55.7558, 37.6173] },
        { type: 'comfort', position: [55.7500, 37.6200] },
        { type: 'business', position: [55.7600, 37.6300] },
    ],
    "Санкт-Петербург": [
        { type: 'standard', position: [59.9343, 30.3351] },
        { type: 'comfort', position: [59.9300, 30.3400] },
        { type: 'business', position: [59.9400, 30.3500] },
    ],
    "Новосибирск": [
        { type: 'standard', position: [55.0084, 82.9357] },
        { type: 'comfort', position: [55.0100, 82.9400] },
        { type: 'business', position: [55.0200, 82.9500] },
    ],
    "Екатеринбург": [
        { type: 'standard', position: [56.8389, 60.6057] },
        { type: 'comfort', position: [56.8400, 60.6100] },
        { type: 'business', position: [56.8500, 60.6200] },
    ],
    "Казань": [
        { type: 'standard', position: [55.8304, 49.0661] },
        { type: 'comfort', position: [55.8300, 49.0700] },
        { type: 'business', position: [55.8400, 49.0800] },
    ],
    "Нижний Новгород": [
        { type: 'standard', position: [56.2965, 43.9361] },
        { type: 'comfort', position: [56.2900, 43.9400] },
        { type: 'business', position: [56.2800, 43.9500] },
    ],
    "Самара": [
        { type: 'standard', position: [53.1951, 50.1000] },
        { type: 'comfort', position: [53.2000, 50.1100] },
        { type: 'business', position: [53.2100, 50.1200] },
    ],
    "Омск": [
        { type: 'standard', position: [54.9924, 73.3676] },
        { type: 'comfort', position: [54.9900, 73.3700] },
        { type: 'business', position: [54.9800, 73.3800] },
    ],
    "Челябинск": [
        { type: 'standard', position: [55.1644, 61.4368] },
        { type: 'comfort', position: [55.1600, 61.4400] },
        { type: 'business', position: [55.1500, 61.4500] },
    ],
    "Красноярск": [
        { type: 'standard', position: [56.0153, 92.8932] },
        { type: 'comfort', position: [56.0200, 92.9000] },
        { type: 'business', position: [56.0300, 92.9100] },
    ],
};

interface FormData {
    name: string;
    phone: string;
    carType: 'standard' | 'comfort' | 'business';
}

export const TaxiOrderPage: React.FC = () => {
    const [pickupLocation, setPickupLocation] = useState<[number, number] | null>(null);
    const [destinationLocation, setDestinationLocation] = useState<[number, number] | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        carType: 'standard',
    });
    const [region, setRegion] = useState<string>('Москва');
    const [availableTaxis, setAvailableTaxis] = useState<TaxiData[]>([]);
    const [nearbyTaxis, setNearbyTaxis] = useState<TaxiData[]>([]);

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                if (!pickupLocation) {
                    setPickupLocation([e.latlng.lat, e.latlng.lng]);
                } else {
                    setDestinationLocation([e.latlng.lat, e.latlng.lng]);
                }
            },
        });
        return null
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Заказ оформлен');
    };

    const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.target.value);
        updateAvailableTaxis(e.target.value);
    };

    const getTaxiIcon = (carType: 'standard' | 'comfort' | 'business') => {
        switch (carType) {
            case 'comfort':
                return new Icon({
                    iconUrl: '/comfort-taxi-icon.png',
                    iconSize: [32, 32],
                });
            case 'business':
                return new Icon({
                    iconUrl: '/business-taxi-icon.png',
                    iconSize: [32, 32],
                });
            default:
                return new Icon({
                    iconUrl: '/standard-taxi-icon.png',
                    iconSize: [32, 32],
                });
        }
    };

    const updateAvailableTaxis = (selectedRegion: string) => {
        setAvailableTaxis(regionTaxiData[selectedRegion] || []);
    };

    const findNearbyTaxis = (location: LatLngExpression | null) => {
        if (location) {
            const nearby = availableTaxis.filter(taxi => {
                const loc = location as [number, number];
                const distance = Math.sqrt(
                    Math.pow(taxi.position[0] - loc[0], 2) +
                    Math.pow(taxi.position[1] - loc[1], 2)
                );
                return distance < 0.05;
            });
            setNearbyTaxis(nearby);
        }
    };

   useEffect(() => {
        findNearbyTaxis(pickupLocation);
    }, [pickupLocation]);
    const mapRef = useRef<L.Map | null>(null);
    useEffect(() => {
        if (pickupLocation && destinationLocation && mapRef.current) {
            const map = mapRef.current;

            L.Routing.control({
                waypoints: [
                    L.latLng(pickupLocation[0], pickupLocation[1]),
                    L.latLng(destinationLocation[0], destinationLocation[1]),
                ],
                routeWhileDragging: true,
            }).addTo(map);
        }
    }, [pickupLocation, destinationLocation]); // Обновление маршрута при изменении локаций


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Заказ такси</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full">
                    <MapContainer
                        id="map"
                        center={[55.7558, 37.6173]}
                        zoom={12}
                        style={{ height: '500px' }}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <MapClickHandler />
                        {pickupLocation && (
                            <Marker position={pickupLocation}>
                                <Popup>Место подачи</Popup>
                            </Marker>
                        )}
                        {destinationLocation && (
                            <Marker position={destinationLocation}>
                                <Popup>Место назначения</Popup>
                            </Marker>
                        )}
                        {availableTaxis.map((taxi, index) => (
                            <Marker
                                key={index}
                                position={taxi.position}
                                icon={getTaxiIcon(taxi.type)}
                            >
                                <Popup>{taxi.type} такси</Popup>
                            </Marker>
                        ))}
                        {nearbyTaxis.map((taxi, index) => (
                            <Marker
                                key={`nearby-${index}`}
                                position={taxi.position}
                                icon={getTaxiIcon(taxi.type)}
                            >
                                <Popup>{taxi.type} такси (поблизости)</Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {pickupLocation && destinationLocation && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Информация о маршруте</h3>
                            <p>Откуда: {pickupLocation[0].toFixed(4)}, {pickupLocation[1].toFixed(4)}</p>
                            <p>Куда: {destinationLocation[0].toFixed(4)}, {destinationLocation[1].toFixed(4)}</p>
                            <p>Доступные машины: {availableTaxis.length}</p>
                            <p>Ближайшие машины: {nearbyTaxis.length}</p>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Ваше имя</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-white w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Ваш номер телефона</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-white w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Тип машины</label>
                            <select
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="bg-white w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="standard">Стандарт</option>
                                <option value="comfort">Комфорт</option>
                                <option value="business">Бизнес</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Регион</label>
                            <select
                                value={region}
                                onChange={handleRegionChange}
                                className="bg-white w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="Москва">Москва</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                                <option value="Новосибирск">Новосибирск</option>
                                <option value="Екатеринбург">Екатеринбург</option>
                                <option value="Казань">Казань</option>
                                <option value="Нижний Новгород">Нижний Новгород</option>
                                <option value="Самара">Самара</option>
                                <option value="Омск">Омск</option>
                                <option value="Челябинск">Челябинск</option>
                                <option value="Красноярск">Красноярск</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">
                            Оформить заказ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
