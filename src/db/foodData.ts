import imgCodfe1 from '../assets/food/cofe/dodin-biarritz.jpg'
import imgCodfe2 from '../assets/food/cofe/no4-coffee-station.jpg'
import imgCodfe3 from '../assets/food/cofe/la-maison-miremont-fonde.jpg'
import imgCodfe4 from '../assets/food/cofe/photo0jpg.jpg'
import imgCodfe5 from '../assets/food/cofe/ouverture-prochaine-au.jpg'

import imgRes1 from '../assets/food/res/photo0jpg.jpg'
import imgRes2 from '../assets/food/res/la-rotonde.jpg'
import imgRes3 from '../assets/food/res/le-o2-verdun.jpg'
import imgRes4 from '../assets/food/res/sunset.jpg'
import imgRes5 from '../assets/food/res/salle-de-restaurant-avec.jpg'


import imgMag from '../assets/food/mgaz/images.jpg'
import imgMag2 from '../assets/food/mgaz/images2.jpg'
import imgMag3 from '../assets/food/mgaz/images1.jpg'
import imgMag4 from '../assets/food/mgaz/img3.jpg'
import imgMag5 from '../assets/food/mgaz/img5.jpg'
export const cafes = [
    {
        name: "Кофейная станция №4",
        reviews: 61,
        status: false,
        cuisine: "Европейская",
        price: 500,
        description: "Лучший завтрак в городе. Лучшие блины в моей жизни",
        times: ["08:00", "09:00", "10:00"],
        img: imgCodfe1
    },
    {
        name: "Бульон Гортензия",
        reviews: 90,
        status: true,
        cuisine: "Европейская",
        price: 800,
        description: "Отлично во всех отношениях. Очень хороший семейный стол",
        times: ["12:00", "13:30", "14:30"],
        img: imgCodfe2
    },
    {
        name: "Альберта Кафе",
        reviews: 1059,
        status: false,
        cuisine: "Европейская",
        price: 1000,
        description: "Шумно, тесно, но вкусно",
        times: ["16:00", "17:00", "18:00"],
        img: imgCodfe3
    },
    {
        name: "Кафе Латте",
        reviews: 230,
        status: true,
        cuisine: "Европейская",
        price: 600,
        description: "Отличное место для утреннего кофе",
        times: ["07:00", "08:30", "09:30"],
        img: imgCodfe4
    },
    {
        name: "Чайная улица",
        reviews: 47,
        status: true,
        cuisine: "Европейская",
        price: 700,
        description: "Тихое место с лучшими десертами в городе",
        times: ["10:00", "11:30", "12:30"],
        img: imgCodfe5
    }
];

export const restaurants = [
    {
        name: "Ротонда",
        reviews: 308,
        status: false,
        cuisine: "Европейская",
        price: 2500,
        description: "Великолепный ресторан, оглушительный",
        times: ["19:00", "19:30", "20:30"],
        img: imgRes1
    },
    {
        name: "Волна Биарриц",
        reviews: 188,
        status: false,
        cuisine: "Европейская",
        price: 1500,
        description: "Идеальное место для заката напитков и еды. Место отдыха",
        times: ["18:00", "18:30", "19:30"],
        img: imgRes2
    },
    {
        name: "О2 Верден",
        reviews: 778,
        status: false,
        cuisine: "Европейская",
        price: 1800,
        description: "Милейшее место, Отличное место",
        times: ["17:00", "17:30", "18:00"],
        img: imgRes3
    },
    {
        name: "Chez Eugenie",
        reviews: 304,
        status: false,
        cuisine: "Европейская",
        price: 2000,
        description: "Очень посредственный ужин. Хорошая кухня",
        times: ["20:00", "20:30", "21:00"],
        img: imgRes4
    },
    {
        name: "мясо",
        reviews: 611,
        status: true,
        cuisine: "Европейская",
        price: 3000,
        description: "Отличное место для ценителей мяса и веселой необычной атмосферы",
        times: ["19:30", "20:00", "21:30"],
        img: imgRes5
    }
];

export const shops = [
    {
        name: "Магазин Сувениров",
        reviews: 120,
        status: true,
        cuisine: "Торговля",
        price: 150,
        description: "Отличный выбор сувениров",
        times: ["10:00", "19:00"],
        img: imgMag
    },
    {
        name: "Фермерский рынок",
        reviews: 85,
        status: true,
        cuisine: "Торговля",
        price: 300,
        description: "Свежие продукты от местных фермеров",
        times: ["08:00", "15:00"],
        img: imgMag2
    },
    {
        name: "Магазин Одежды",
        reviews: 240,
        status: false,
        cuisine: "Торговля",
        price: 2000,
        description: "Стильная одежда для всех",
        times: ["09:00", "20:00"],
        img: imgMag3
    },
    {
        name: "Электроника Сити",
        reviews: 512,
        status: true,
        cuisine: "Торговля",
        price: 5000,
        description: "Большой выбор электроники",
        times: ["10:00", "21:00"],
        img: imgMag4
    },
    {
        name: "Книжный Мир",
        reviews: 150,
        status: true,
        cuisine: "Торговля",
        price: 300,
        description: "Лучшая подборка книг",
        times: ["10:00", "18:00"],
        img: imgMag5
    }
];
