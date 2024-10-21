import {useState} from "react";
import img1 from '/src/assets/news/1.jpeg'
import img2 from '/src/assets/news/2.jpg'
import img3 from '/src/assets/news/3.jpg'

const slides = [
    {
        imageUrl: img1,
        title: "«Война машин уже началась» Российские добровольцы уничтожают позиции ВСУ в Курской области. Как они меняют ход СВО? ",
        text: 'Бои в Курской области, частично занятой ВСУ, не утихают почти полтора месяца. Но если в первые дни украинского вторжения они отличались стремительностью и интенсивностью, то теперь война на этом участке, похоже, окончательно приняла позиционный характер. Украинские войска спешно окапываются, пытаясь выстроить долговременную оборону. Российская армия изо всех сил ищет в ней уязвимые...'
    },
    {
        imageUrl: img2,
        title: "Большинство жителей Молдавии проголосовали за вступление страны в ЕС. Чем грозит России потеря еще одного союзника?",
        text: 'Президентские выборы в Молдавии и референдум о принятии курса на интеграцию страны в Европейский союз (ЕС) завершились расколом республики на два лагеря. После обработки 99 процентов голосов сторонники евроинтеграции неожиданно вырвались вперед с перевесом всего в несколько тысяч голосов. Избежать полного разгрома президенту Майе Санду помогла диаспора, проживающая в западных странах. '
    },
    {
        imageUrl: img3,
        title: "«Тишина тоже звучит» Как россиянка бросила стабильную работу, стала записывать звуки леса и получать за это деньги",
        text: 'Дарья проработала в журналистике восемь лет, но однажды решила оставить стабильную работу и погрузиться в мир звука. Ночные рабочие смены, вечерние пары и большое желание научиться новой профессии — такой была ее жизнь. В беседе с «Лентой.ру» она рассказала, как пришла в малоизвестную нишу, о чем спорят на съемочной площадке и как можно зарабатывать на жизнь, записывая звуки леса и города.'
    },
];

export const NewsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Функция для перехода к выбранному слайду
    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex items-start justify-center gap-4 w-[1100px]">
            <div className="w-1/2">
                <img
                    src={slides[currentSlide].imageUrl}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-[700px] h-auto"
                />
            </div>

            <div className="w-1/2 flex flex-col justify-between items-center h-[350px]">
                <div>
                    <h2 className={'text-[20px] mb-2'}>{slides[currentSlide].title}</h2>
                    <p className="text-[16px]">{slides[currentSlide].text}</p>
                </div>

                <div className={'flex flex-col  gap-2 items-center'}>
                    <a href="#" className={'text-center uppercase font-bold border-b-[1px] border-black border-solid'}>Перейти</a>
                    <div className="mt-4 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`p-1 border rounded-full ${
                                    currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
