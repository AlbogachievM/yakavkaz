import {Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {countries} from "@/pages/aviationAndRailway.tsx";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {useState} from "react";
import {HotelsCard} from "@/components/hotelsCard/hotelsCard.tsx";
import {homesData} from "@/db/homesData.ts";
import {CheckboxList} from "@/components/checkboxList/checkboxList.tsx";
import {priceHome, reviewRatingItems} from "@/components/hotelsCard/data.ts";

export const VacationHomes = () => {
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string);
    };
    return (
        <section className={'flex justify-between'}>
            <div className={'border rounded-lg items-center flex flex-col gap-2 p-2 w-[300px]'}>
                <div className={'flex flex-col gap-2'}>
                    <Autocomplete
                        disablePortal
                        options={countries}
                        sx={{width: 260}}
                        renderInput={(params) => <TextField {...params} label="Куда вы хотите поехать?"/>}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Дата заезда - Дата отъезда"/>
                        </DemoContainer>
                    </LocalizationProvider>

                    <div className={'mt-2'}>
                        <span>Количество гостей</span>
                        <div className={'flex justify-between items-center'}>
                            <FormControl sx={{width: 120}}>
                                <InputLabel id="demo-simple-select-label">Взрослый</InputLabel>
                                <Select
                                    variant={'standard'}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Взрослый"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                    <MenuItem value={30}>4</MenuItem>
                                    <MenuItem value={30}>5</MenuItem>
                                    <MenuItem value={30}>6</MenuItem>
                                    <MenuItem value={30}>7</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{width: 120}}>
                                <InputLabel id="demo-simple-select-label">Ребенок</InputLabel>
                                <Select
                                    variant={'standard'}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age2}
                                    label="Взрослый"
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                    <MenuItem value={30}>4</MenuItem>
                                    <MenuItem value={30}>5</MenuItem>
                                    <MenuItem value={30}>6</MenuItem>
                                    <MenuItem value={30}>7</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <button className={'bg-red-600 text-white p-2 rounded-[2px] w-[260px] mt-5'}>
                        Найти
                    </button>

                </div>
                <div className={'flex flex-col gap-2 mt-2'}>
                    <h3 className={'font-bold text-[16px]'}>Цена за номер</h3>
                    <CheckboxList items={priceHome}/>
                </div>
                <div className={'flex flex-col gap-2 mt-2'}>
                    <h3 className={'font-bold text-[16px]'}>Оценка по отзывам</h3>
                    <CheckboxList items={reviewRatingItems}/>
                </div>
            </div>

            <div>
                <h1 className={'text-[20px] font-bold'}>Дома для отдыха Дагестан</h1>
                {homesData.map((el, i) => {
                    return (
                        <HotelsCard {...el} key={i}/>
                    )
                })}
            </div>
        </section>
    );
};

