import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { Landmark, regions } from '@/db/regions';
import {hotelData, placeToFood} from "@/db/myPath.ts";
import {HotelsCard} from "@/components/hotelsCard/hotelsCard.tsx";

export const MyPathModule: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('Ингушетия');
    const [selectedLandmarks, setSelectedLandmarks] = useState<Landmark[]>([]);
    const [hotel, setHotel] = useState<string | null>(null);
    const [mealPlace, setMealPlace] = useState<string | null>(null);
    const [hotelLocation, setHotelLocation] = useState<{ lat: number, lng: number } | null>(null);
    const [mealPlaceLocation, setMealPlaceLocation] = useState<{ lat: number, lng: number } | null>(null);
    const [ticketType, setTicketType] = useState<string>('');
    const [departureCity, setDepartureCity] = useState<string>('');
    const [arrivalCity, setArrivalCity] = useState<string>('');
    const [selectedCarRental, setSelectedCarRental] = useState<string | null>(null);
    const [availableCars, setAvailableCars] = useState<{ model: string, price: string }[]>([]);



    const carRentals = [
        {
            name: 'Компания 1',
            location: { lat: 43.23, lng: 44.74 },
            cars: [
                { model: 'Toyota Corolla', price: '500 руб/день' },
                { model: 'Honda Civic', price: '600 руб/день' },
            ]
        },
        {
            name: 'Компания 2',
            location: { lat: 43.25, lng: 44.75 },
            cars: [
                { model: 'BMW X5', price: '1200 руб/день' },
                { model: 'Audi Q7', price: '1400 руб/день' },
            ]
        },
        // Добавьте другие компании по прокату автомобилей
    ];
    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
        setSelectedLandmarks([]); // Сбросить выбранные достопримечательности при смене региона
    };

    const handleSelectLandmark = (landmark: Landmark) => {
        if (selectedLandmarks.some((item) => item.id === landmark.id)) {
            setSelectedLandmarks(selectedLandmarks.filter((item) => item.id !== landmark.id));
        } else {
            setSelectedLandmarks([...selectedLandmarks, landmark]);
        }
    };

    const handleSelectOption = (type: string, value: string, location: { lat: number, lng: number }) => {
        if (type === 'hotel') {
            setHotel(value);
            setHotelLocation(location);
        }
        if (type === 'meal') {
            setMealPlace(value);
            setMealPlaceLocation(location);
        }

    };
    const handleSelectCarRental = (companyName: string) => {
        setSelectedCarRental(companyName);
        const selectedCompany = carRentals.find((company) => company.name === companyName);
        setAvailableCars(selectedCompany?.cars || []);
    };

    const currentRegion = regions.find((region) => region.name === selectedRegion);

    return (
        <div className="container mx-auto p-8 space-y-10  rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-center text-red-400">Мой путь</h1>

            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Карта</h2>
                <MapContainer
                    center={[regions[6].landmarks[0].latitude, regions[6].landmarks[0].longitude]}
                    zoom={10}
                    style={{ height: '500px', width: '100%' }}
                    className="rounded-lg overflow-hidden shadow-md"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {selectedLandmarks.map((landmark) => (
                        <Marker
                            key={landmark.id}
                            position={[landmark.latitude, landmark.longitude]}
                        >
                            <Popup>{landmark.name}</Popup>
                        </Marker>
                    ))}
                    {hotelLocation && (
                        <Marker position={hotelLocation}>
                            <Popup>{hotel}</Popup>
                        </Marker>
                    )}
                    {mealPlaceLocation && (
                        <Marker position={mealPlaceLocation}>
                            <Popup>{mealPlace}</Popup>
                        </Marker>
                    )}
                    {carRentals.map((company) => (
                        <Marker key={company.name} position={company.location}>
                            <Popup>
                                <div>
                                    <h4>{company.name}</h4>
                                    <button
                                        onClick={() => handleSelectCarRental(company.name)}
                                        className="bg-blue-500 text-white p-2 rounded"
                                    >
                                        Посмотреть автомобили
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Выберите регион</h2>
                <select
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    className="p-4 w-full border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {regions.map((region) => (
                        <option key={region.name} value={region.name}>
                            {region.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800">Билеты</h2>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700">Тип билета</h3>
                    <select
                        onChange={(e) => setTicketType(e.target.value)}
                        className="p-4 w-full border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Выберите тип</option>
                        <option value="Авиабилет">Авиабилет</option>
                        <option value="ЖД билет">ЖД билет</option>
                    </select>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700">Город отправления</h3>
                    <input
                        type="text"
                        placeholder="Введите город"
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        className="p-4 w-full bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700">Город прибытия</h3>
                    <input
                        type="text"
                        placeholder="Введите город"
                        value={arrivalCity}
                        onChange={(e) => setArrivalCity(e.target.value)}
                        className="p-4 w-full bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {ticketType && departureCity && arrivalCity && (
                <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
                    <p className="text-xl font-semibold text-gray-700">Тип билета: {ticketType}</p>
                    <p className="text-xl font-semibold text-gray-700">Отправление: {departureCity}</p>
                    <p className="text-xl font-semibold text-gray-700">Прибытие: {arrivalCity}</p>
                </div>
            )}

            <div>
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-10">Выберите достопримечательности</h2>
                    <ul className="space-y-4">
                        {currentRegion?.landmarks.map((landmark) => (
                            <li
                                key={landmark.id}
                                className={`p-4 cursor-pointer rounded-lg shadow-md transition-all ${
                                    selectedLandmarks.some((item) => item.id === landmark.id)
                                        ? 'bg-green-200 text-green-800'
                                        : 'hover:bg-gray-100'
                                }`}
                                onClick={() => handleSelectLandmark(landmark)}
                            >
                                {landmark.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-5">Выберите компанию по прокату автомобилей</h3>
                    <ul className="space-y-4">
                        {carRentals.map((company) => (
                            <li
                                key={company.name}
                                className={`p-4 cursor-pointer rounded-lg shadow-md transition-all ${
                                    selectedCarRental === company.name ? 'bg-blue-200 text-blue-800' : 'hover:bg-gray-100'
                                }`}
                                onClick={() => handleSelectCarRental(company.name)}
                            >
                                {company.name}
                            </li>
                        ))}
                    </ul>

                    {selectedCarRental && (
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold text-gray-700 mb-5">Доступные автомобили:</h4>
                            <ul className="space-y-4">
                                {availableCars.map((car, index) => (
                                    <li key={index} className="p-4 border rounded-lg">
                                        <p className="text-lg font-semibold">{car.model}</p>
                                        <p>{car.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="mt-10">
                    <div className="flex gap-2">
                        <div className={'w-[450px]'}>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-5">Выберите отель</h3>
                            <ul className="space-y-4">
                                {hotelData.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`p-4 cursor-pointer rounded-lg shadow-md transition-all ${
                                            hotel === item.name ? 'bg-blue-200 text-blue-800' : 'hover:bg-gray-100'
                                        }`}
                                        onClick={() => handleSelectOption('hotel', item.name, item.location)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" p-4">
                            {hotel && hotelLocation ? (
                                <div className="border p-4 rounded-lg shadow-md bg-gray-50">
                                    {hotelData
                                        .filter((item) => item.name === hotel)
                                        .map((selectedHotel) => (
                                            <HotelsCard
                                                key={selectedHotel.name}
                                                img={selectedHotel.img}
                                                title={selectedHotel.name}
                                                subtitle={`Расположение: ${selectedHotel.location.lat}, ${selectedHotel.location.lng}`}
                                                description={selectedHotel.description}
                                                price={selectedHotel.price}
                                            />
                                        ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">Пожалуйста, выберите отель, чтобы увидеть информацию.</p>
                            )}
                        </div>

                    </div>

                    <div className={'mt-10'}>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-5">Выберите место для еды</h3>
                        <ul className="space-y-4">
                            {placeToFood.map((item, i) => (
                                <li
                                    key={item.name}
                                    className={`p-4 cursor-pointer rounded-lg shadow-md transition-all ${
                                        mealPlace === item.name ? 'bg-red-200 text-red-800' : 'hover:bg-gray-100'
                                    }`}
                                    onClick={() => handleSelectOption('meal', item.name, item.location)}
                                >
                                    <div key={i}
                                         className={'flex gap-5 overflow-hidden mb-5 w-[1200px]'}>
                                        <img width={200} src={item.img} alt={item.name}/>
                                        <div className={'p-2'}>
                                            <h1 className={'text-[20px] font-bold'}>{item.name}</h1>
                                            <div className={'flex items-center gap-2 mt-2 mb-2'}>
                                                <span>{item.reviews} отзывов</span>
                                                <span
                                                    className={`${item.status ? 'text-green-500' : 'text-red-600'}`}
                                                >
                                {item.status ? 'Сейчас открыто' : 'Сейчас закрыто'}
                            </span>
                                            </div>
                                            <div className={'flex items-center gap-2'}>
                                                {item.times.map((time, index) => (
                                                    <span key={index}>{time}</span>
                                                ))}
                                            </div>
                                            <hr/>
                                            <div className={'mt-2'}>"{item.description}"</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};
