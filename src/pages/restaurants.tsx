import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {SyntheticEvent, useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {cafes, restaurants, shops} from "@/db/foodData.ts";
import {CheckboxList} from "@/components/checkboxList/checkboxList.tsx";
import {reviewRatingItems, starRatingItems, typeInstitution} from "@/components/hotelsCard/data.ts";

export const Restaurants = () => {
    const [value, setValue] = useState('Поиск ресторанов и кафе')
    const handleChange = (_: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div>
            <div>
                <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
                    <Tab value="Поиск ресторанов и кафе" label="Поиск ресторанов и кафе"/>
                    <Tab value="Поиск магазинов" label="Поиск магазинов"/>
                </Tabs>
            </div>
            <div className={'mt-5 mb-5'}>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder={value}
                        inputProps={{'aria-label': 'search google maps'}}
                    />
                    <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </div>
            <div className={'flex items-start gap-2'}>
                <div>
                    <div className={'flex flex-col p-2 gap-2 rounded-lg border '}>
                        <h2 className={'font-bold text-[20px]'}>Все фильтры</h2>
                        <hr/>
                        <div>
                            <h3 className={'font-bold text-[16px]'}>Количество звезд</h3>
                            <CheckboxList items={starRatingItems}/>
                        </div>
                        <div>
                            <h3 className={'font-bold text-[16px]'}>Оценка по отзывам</h3>
                            <CheckboxList items={reviewRatingItems}/>
                        </div>
                        <div>
                            <h3 className={'font-bold text-[16px]'}>Оценка по отзывам</h3>
                            <CheckboxList items={typeInstitution}/>
                        </div>
                    </div>
                </div>
                <div>
                    {value === 'Поиск магазинов' && <>
                        {shops.map((el, i) => {
                            return (
                                <div key={i} className={'flex gap-5 border rounded-lg overflow-hidden mb-5 w-[1200px]'}>
                                    <img width={350} src={el.img} alt=""/>
                                    <div className={'p-2'}>
                                        <h1 className={'text-[20px] font-bold'}>{el.name}</h1>
                                        <div className={'flex items-center gap-2 mt-2 mb-2'}>
                                            <span>{el.reviews} отзывов</span>
                                            <span className={`${el.status ? 'text-green-500' : 'text-red-600'}`}>
                                                {el.status ? 'Сейчас открыто' : 'Сейчас закрыто'}
                                            </span>
                                        </div>
                                        <div key={i} className={'flex items-center gap-2'}>
                                            {el.times.map((el, i) => {
                                                return (
                                                    <span key={i}>{el}</span>
                                                )
                                            })}
                                        </div>
                                        <hr/>
                                        <div className={'mt-2'}>"{el.description}"</div>
                                    </div>
                                </div>
                            )
                        })}

                    </>}
                    {value !== 'Поиск магазинов' && <>
                        {cafes.map((el, i) => {
                            return (
                                <div key={i} className={'flex gap-5 border rounded-lg overflow-hidden mb-5 w-[1200px]'}>
                                    <img width={350} src={el.img} alt=""/>
                                    <div className={'p-2'}>
                                        <h1 className={'text-[20px] font-bold'}>{el.name}</h1>
                                        <div className={'flex items-center gap-2 mt-2 mb-2'}>
                                            <span>{el.reviews} отзывов</span>
                                            <span
                                                className={`${el.status ? 'text-green-500' : 'text-red-600'}`}>{el.status ? 'Сейчас открыто' : 'Сейчас закрыто'}</span>
                                        </div>
                                        <div key={i} className={'flex items-center gap-2'}>
                                            {el.times.map((el, i) => {
                                                return (
                                                    <span key={i}>{el}</span>
                                                )
                                            })},3
                                            +9
                                        </div>
                                        <hr/>
                                        <div className={'mt-2'}>"{el.description}"</div>
                                    </div>
                                </div>
                            )
                        })}
                        {restaurants.map((el, i) => {
                            return (
                                <div key={i} className={'flex gap-5 border rounded-lg overflow-hidden mb-5 w-[1200px]'}>
                                    <img width={350} src={el.img} alt=""/>
                                    <div className={'p-2'}>
                                        <h1 className={'text-[20px] font-bold'}>{el.name}</h1>
                                        <div className={'flex items-center gap-2 mt-2 mb-2'}>
                                            <span>{el.reviews} отзывов</span>
                                            <span
                                                className={`${el.status ? 'text-green-500' : 'text-red-600'}`}>{el.status ? 'Сейчас открыто' : 'Сейчас закрыто'}</span>
                                        </div>
                                        <div key={i} className={'flex items-center gap-2'}>
                                            {el.times.map((el, i) => {
                                                return (
                                                    <span key={i}>{el}</span>
                                                )
                                            })}
                                        </div>
                                        <hr/>
                                        <div className={'mt-2'}>"{el.description}"</div>
                                    </div>
                                </div>
                            )
                        })}
                    </>}
                </div>
            </div>
        </div>
    );
};

