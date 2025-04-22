import {
    Autocomplete,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    ToggleButton
} from "@mui/material";
import {countries} from "@/pages/aviationAndRailway.tsx";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {useState} from "react";
import {Button} from "@chakra-ui/react";
import * as React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {HotelsCard} from "@/components/hotelsCard/hotelsCard.tsx";
import {CheckboxList} from "@/components/checkboxList/checkboxList.tsx";
import {reviewRatingItems, starRatingItems} from "@/components/hotelsCard/data.ts";
import {hotelsData} from "@/components/hotelsCard/cardHotelsData.ts";

export const Hotels = () => {
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');
    const [alignment, setAlignment] = useState('1');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string);
    };

    const handleChangeAlignment = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    return (
        <div>
            <div className={'flex items-end justify-between border p-[20px] rounded-lg'}>
                <Autocomplete
                    disablePortal
                    options={countries}
                    sx={{width: 240}}
                    renderInput={(params) => <TextField {...params} label="Куда вы хотите поехать?"/>}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Дата заезда - Дата отъезда"/>
                    </DemoContainer>
                </LocalizationProvider>
                <FormControl sx={{width: 200}}>
                    <InputLabel id="demo-simple-select-label">Взрослый</InputLabel>
                    <Select
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
                <FormControl sx={{width: 200}}>
                    <InputLabel id="demo-simple-select-label">Ребенок</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age2}
                        label="Ребенок"
                        onChange={handleChange2}
                    >
                        <MenuItem value={101}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                        <MenuItem value={30}>4</MenuItem>
                        <MenuItem value={30}>5</MenuItem>
                        <MenuItem value={30}>6</MenuItem>
                        <MenuItem value={30}>7</MenuItem>
                    </Select>
                </FormControl>
                <Button className={'bg-red-600 w-[150px] h-[55px] text-white'}>Найти</Button>
            </div>
            <div className={'flex text-black items-start gap-[90px]'}>
                <div className={'flex flex-col p-2 gap-2 rounded-lg border mt-5'}>
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
                </div>
                <div className={'mt-5 flex flex-col gap-[50px'}>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChangeAlignment}
                        aria-label="Platform"
                    >
                        <ToggleButton value="1">Наши рекомендации</ToggleButton>
                        <ToggleButton value="2">Самая низкая цена в начале</ToggleButton>
                        <ToggleButton value="3">Количество звезд и цена</ToggleButton>
                        <ToggleButton value="4">Оценка + кол-во отзывов</ToggleButton>
                    </ToggleButtonGroup>
                    <div>
                        {hotelsData.map((el, i)=>{
                            return(
                                <HotelsCard {...el} key={i} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};