import img1 from "@/assets/homes/1782795_preview.png";
import img2 from "@/assets/homes/4806714_preview.png";
import img3 from "@/assets/homes/5052909_preview.png";

export type HotelsCardType = {
    img: string;
    title: string
    subtitle: string
    price: string
}

export const homesData: HotelsCardType[] = [
    {
        img: img1,
        title: "Гостевой дом Царский двор",
        subtitle: "Махачкала, пр-т Насрутдинова, д. 252",
        price: '3 000'
    },
    {
        img: img2,
        title: "Гостевой дом Edem",
        subtitle: "Махачкала, ул. Сулеймана Стальского, д. 53",
        price: '3 510'
    },
    {
        img: img3,
        title: "Гостевой дом Горячий песок",
        subtitle: "Избербаш, ул. Морская, д. 31",
        price: '7000'
    },
];
