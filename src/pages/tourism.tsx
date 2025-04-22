import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
import img from '../assets/turism/img.png'
import img2 from '../assets/turism/img2.png'
import {excursions, routesTurism} from "@/db/turismWayData.ts";
import {countries} from "@/pages/aviationAndRailway.tsx";
import {CityCard} from "@/components/cityCard/cityCard.tsx";
import AlignItemsList from "@/components/alignItemsList/alignItemsList.tsx";

export const Tourism = () => {
    // const [value, setValue] = useState('Туристические маршруты')
    const [isShow, setIsShow] = useState(false)
    console.log(isShow)
    // const handleChange = (_: SyntheticEvent, newValue: string) => {
    //     setValue(newValue);
    // };
    return (
        <div className={'relative'}>
            {/*<div className={'mb-10'}>*/}
            {/*    <Tabs value={value} onChange={handleChange} textColor="primary" variant={'scrollable'}*/}
            {/*          indicatorColor="primary">*/}
            {/*        <Tab value="Туристические маршруты" label="Туристические маршруты"/>*/}
            {/*        <Tab value="Гиды и экскурсии" label="Гиды и экскурсии"/>*/}
            {/*        <Tab value="Природные заповедники и парки" label="Природные заповедники и парки"/>*/}
            {/*        <Tab value="Виртуальный музей" label="Виртуальный музей"/>*/}
            {/*        <Tab value="Панорамы 360" label="Панорамы 360"/>*/}
            {/*        <Tab value="Афиша культурных мероприятий" label="Афиша культурных мероприятий"/>*/}
            {/*        <Tab value="Куда пойти?" label="Куда пойти?"/>*/}
            {/*        <Tab value="Развлечения для детей и семей" label="Развлечения для детей и семей"/>*/}
            {/*    </Tabs>*/}
            {/*</div>*/}
            <div className={'flex items-center gap-2 '}>
                <Autocomplete
                    disablePortal
                    options={countries}
                    sx={{width: '100%'}}
                    renderInput={(params) => <TextField {...params} label="Куда вы собираетесь?"/>}
                />
                <button className={'bg-red-600 hover:bg-red-500 w-[100px] text-white p-2 rounded-[5px] h-[55px]'}>
                    Найти
                </button>
            </div>
            <div>
                <h1 className={'text-[20px] font-bold mb-5 mt-5'}>Маркированные маршруты</h1>
                <img src={img} alt=""/>
                <h1 className={'text-[20px] font-bold mt-5 mb-5'}>Список маршрутов</h1>
                {routesTurism.map((el, i) => {
                    return (
                        <div key={i} onClick={() => setIsShow(prevState => !prevState)}
                             className={'flex mb-2 gap-2 border rounded-[5px] cursor-pointer'}>
                            <img src={el.img} alt="img"/>
                            <div>
                                <h1 className={'font-bold'}>{el.name}</h1>
                                <h2>{el.location}</h2>
                                <h3>{el.type}</h3>
                                <h3>{el.duration}</h3>
                                <h3>{el.difficulty}</h3>
                            </div>
                        </div>
                    )
                })}
                {isShow && <div
                    className={'min-h-[80vh] w-[1400px] bg-white border-[2px] rounded-[5px] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'}>
                    <div className={'text-center flex flex-col items-center'}>
                        <div className={'flex gap-5'}>
                            <span>Пеший</span>
                            <span>Сложный маршрут</span>
                        </div>
                        <h2 className={'mt-5 mb-5'}>Линейный или кольцевой маршрут к озеру Сейдьявр и водопаду Девичьи
                            косы.</h2>

                        <div className={'flex gap-5'}>
                            <div className={'flex flex-col items-center justify-center'}>
                                <span>Протяженность</span>
                                <span className={'font-bold'}>1–3 дня</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center'}>
                                <span>Расстояние</span>
                                <span className={'font-bold'}>27.9 км</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center'}>
                                <span>Набор высоты</span>
                                <span className={'font-bold'}>1026 м</span>
                            </div>
                        </div>
                        <h2 className={'mt-5 mb-5'}>(Основной маршрут 22.3 км, +1.8 км с выходом к оз. Сейдъявр, –3.1 км
                            с возвращением к роднику)</h2>
                        <h2 className={'mb-5'}>Ключевые точки маршрута: Родн. Габбрский — оз. Сейдьявр — вдп. Девичьи
                            косы — оз. 540 — Ю. съезд в Мончегорск или родн. Габбрский.</h2>

                        <img src={img2} alt=""/>
                        <button className={'bg-red-600 hover:bg-red-500 text-white p-2 rounded-[2px] mt-5'}
                                onClick={() => setIsShow((prevState) => !prevState)}>Закрыть
                        </button>
                    </div>
                </div>}
                <div className={'mt-5 '}>
                    <h1 className={'font-bold text-[30px] mb-5'}>Гиды и экскурсии по Кавказу</h1>
                    <div className={'flex gap-2 flex-wrap'}>
                        {excursions.map((el, i) => {
                            return (
                                <CityCard {...el} key={i}/>
                            )
                        })}
                    </div>
                    <div className={'flex justify-center'}>
                        <button className={'bg-red-600 hover:bg-red-500 text-white text-center p-2 rounded-[5px] mt-2'}>
                            Посмотреть еще
                        </button>
                    </div>
                </div>
                <div className={'mt-5 mb-5'}>
                    <h1 className={'font-bold text-[30px] mb-5'}>Природные заповедники и парки</h1>
                    <AlignItemsList/>
                </div>

            </div>
        </div>

    );
};

