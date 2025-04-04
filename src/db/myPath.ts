import img from '../assets/hotels/329065860.png'
import img1 from '../assets/hotels/magas.jpg'
import img2 from '../assets/hotels/plaza.jpg'
import img3 from '../assets/region/photo1jpg.jpg'
import img4 from '../assets/region/salle-de-restaurant.jpg'
import img5 from '../assets/region/confit-cod-chorizo-red.jpg'
export const hotelData = [
    {
        name: 'Артис Плаза',
        location: { lat: 43.23, lng: 44.74 },
        img: img2,
        description: 'Прекрасный отель с видом на горы и уютными номерами.',
        price: '3000',
    },
    {
        name: 'Магас Отель',
        location: { lat: 43.25, lng: 44.75 },
        img: img1,
        description: 'Комфортный отель с высоким уровнем сервиса.',
        price: '4000',
    },
    {
        name: 'Эрзий',
        location: { lat: 43.22, lng: 44.76 },
        img: img,
        description: 'Отель с современным дизайном и лучшим расположением.',
        price: '3500',
    },
];


export const placeToFood = [
    {
        name: 'Мартин Берасатеги',
        img: img3,
        reviews: 120,
        status: true, // открыто
        times: ['10:00 - 22:00'],
        description: 'Прекрасное место с традиционной кухней.',
        location: { lat: 43.23, lng: 44.74 }, // Добавлено местоположение
    },
    {
        name: 'Дом Ламеолоаз',
        img: img4,
        reviews: 80,
        status: false, // закрыто
        times: ['09:00 - 20:00'],
        description: 'Уютное кафе с авторской кухней.',
        location: { lat: 43.25, lng: 44.75 }, // Добавлено местоположение
    },
    {
        name: 'Ресторан Норткот',
        img: img5,
        reviews: 150,
        status: true, // открыто
        times: ['11:00 - 23:00'],
        description: 'Ресторан с панорамным видом на город.',
        location: { lat: 43.22, lng: 44.76 }, // Добавлено местоположение
    },
    // Добавьте другие рестораны по аналогии
];
