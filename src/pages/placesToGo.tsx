import {useEffect, useState} from "react";
import img from '../assets/afisha/1.jpg'
import img2 from '../assets/afisha/2.png'
import img3 from '../assets/afisha/3.png'

const places = [
    {type: "Магазинов", count: 200, link: ''},
    {type: "Развлечений", count: 15, link: ''},
    {type: "Кафе", count: 25, link: ''},
    {type: "Детских развлечений", count: 27, link: ''}
];

const slides = [
    {image: img, title: 'Все крутые события в одном месте', text: ''},
    {image: img2, title: 'Авто в подарок за покупки!', text: 'Акция в честь юбилея ТРК ЛОТОС PLAZA и гипермаркета СИГМА'},
    {image: img3, title: 'Экопарк «Зоолесье»', text: 'Знакомство с миром диких животных для всей семьи!', subtext: 'Экопарк открыт для гостей ежедневно с 10:00 и до 20:00 без перерывов и выходных.'},
];

export const PlacesToGo = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 100000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };
    return (
        <div>
            <div className={'mb-5'}>
                <nav className={'flex items-center justify-center gap-2'}>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/food/stores">Рестораны</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/tourism/childrens-entertainment">Развлечения</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/familyRest">Семейный отдых</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/tourism/places-to-go">Афиша</a>
                </nav>
            </div>
            <div>
                <div className="relative w-full h-[500px] overflow-hidden mb-5">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div
                                className="flex flex-col justify-between absolute top-0 left-[5%] w-[300px] h-full p-2 pb-5 pt-5 bg-white">
                                    <div className={'flex flex-col gap-5 items-start justify-center'}>
                                        <h2 className="text-2xl font-bold text-black">{slide.title}</h2>
                                        {slide.text && <p className={'text-black'}>{slide.text}</p>}
                                        {slide.subtext && <p className={'text-black'}>{slide.subtext}</p>}
                                        <button className={'bg-red-600 text-white p-2 rounded'}>Подробнее</button>
                                    </div>
                                    <div className={'flex justify-between w-full'}>
                                        <button
                                            onClick={prevSlide}
                                            className="text-black p-2"
                                        >
                                        &#10094;
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className=" text-black p-2"
                                        >
                                            &#10095;
                                        </button>
                                    </div>
                                </div>
                            </div>

                    ))}


                </div>
            </div>
            <div className={'flex items-center justify-between gap-2'}>
                {places.map((el, i) => {
                    return (
                        <div key={i}
                             className={'cursor-pointer flex flex-col justify-center w-[200px] shadow-lg h-[150px] text-red-600 border border-red-600 p-2 rounded text-center'}>
                            <h2 className={'font-bold text-[30px] '}>{el.count}</h2>
                            <span className={'text-[25px] '}>{el.type}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

