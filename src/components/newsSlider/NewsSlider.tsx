import {useState} from "react";
import img1 from '/src/assets/news/1.jpeg';
import img2 from '/src/assets/news/2.jpg';
import img3 from '/src/assets/news/3.jpg';
import arrow from '/src/assets/img/arrow.svg'

const slides = [
    {
        imageUrl: img1,
        title: "Нацпроекты увеличили производительность труда. Как это поможет экономике?",
        text: 'Шесть лет назад в России стартовал национальный проект «Производительность труда». Его результатом уже стало увеличение прибыли четырех с лишним тысяч предприятий на 318 миллиардов рублей. Это почти в 10 раз больше, чем бюджет нацпроекта. Рост производительности труда стал основной причиной ускорения темпов роста российской экономики в этом году, отметило Минэкономразвития РФ.'},
    {
        imageUrl: img2,
        title: "Большинство жителей Молдавии проголосовали за вступление страны в ЕС. Чем грозит России потеря еще одного союзника?",
        text: 'Президентские выборы в Молдавии и референдум о принятии курса на интеграцию страны в Европейский союз (ЕС) завершились расколом республики на два лагеря. После обработки 99 процентов голосов сторонники евроинтеграции неожиданно вырвались вперед с...',
    },
    {
        imageUrl: img3,
        title: "«Тишина тоже звучит» Как россиянка бросила стабильную работу, стала записывать звуки леса и получать за это деньги",
        text: 'Дарья проработала в журналистике восемь лет, но однажды решила оставить стабильную работу и погрузиться в мир звука. Ночные рабочие смены, вечерние пары и большое желание научиться новой профессии — такой была ее жизнь...',
    },
];

export const NewsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative flex items-start justify-center gap-4 w-full " style={{ boxShadow: '0px 0px 6px 4px rgba(0, 0, 0, 0.06)' }}>
            <button
                className="absolute left-0 top-[50%] w-[50px] rounded  transform -translate-y-[50%] bg-black opacity-50 hover:opacity-60 z-50"
                onClick={handlePrevSlide}
            >
                <img src={arrow} alt="" className={'w-full rotate-180'}/>
            </button>

            <div className="flex items-center gap-4">
                <div className={`w-[1090px] relative h-[500px]`}>
                    <img
                        src={slides[currentSlide].imageUrl}
                        alt={`Slide ${currentSlide + 1}`}
                        className="object-cover w-full h-full "
                    />
                    <div
                        className="w-[300px] h-full flex flex-col justify-between items-center  p-4 absolute bottom-0 right-[80px] bg-white ">
                        <div>
                            <h2 className="text-[20px] mb-2">{slides[currentSlide].title}</h2>
                            <p className="text-[16px]">{slides[currentSlide].text}</p>
                        </div>

                        <div className="flex flex-col gap-2 items-center">

                            <div className="mt-4 flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`p-1 border rounded-full ${
                                            currentSlide === index ? "bg-red-700" : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Правая стрелка */}
            <button
                className="absolute right-0 top-[50%] w-[50px] rounded  transform -translate-y-[50%] bg-black opacity-50 hover:opacity-60 z-50"
                onClick={handleNextSlide}
            >
                <img src={arrow} alt="" className={'w-full'}/>
            </button>
        </div>
    );
};
