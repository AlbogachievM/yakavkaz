import img1 from '@/assets/hotels/magas.jpg'
import img2 from '@/assets/hotels/plaza.jpg'
import img3 from '@/assets/hotels/329065860.png'

export type HotelsCardType = {
    img: string;
    title: string
    subtitle: string
    description?: string
    price: string
}

export const hotelsData: HotelsCardType[] = [
    {
        img: img1,
        title: "Отель Магас",
        subtitle: "Роскошный отдых в центре города",
        description: "Насладитесь просторными номерами, изысканным питанием и отличным сервисом.",
        price: '5 000'
    },
    {
        img: img2,
        title: "Артис Плаза",
        subtitle: "Отдохните в очаровательном отеле бизнес класса",
        description: "Расположенный в центре столицы Республики Ингушетии...",
        price: '3 000'
    },
    {
        img: img3,
        title: "Отель Арамхи",
        subtitle: "Потрясающие виды на горы",
        description: "Расположенный в горах, этот уютный отель предлагает живописные виды, пешие маршруты и спокойную атмосферу",
        price: '6000'
    },
];
