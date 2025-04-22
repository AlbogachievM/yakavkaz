import * as React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {
    Autocomplete,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, Switch,
    TextField,
    ToggleButton
} from "@mui/material";
import {useState} from "react";
import {Button} from "@chakra-ui/react";

export const countries = [
    {label: "Соединенные Штаты", value: "us"},
    {label: "Канада", value: "ca"},
    {label: "Великобритания", value: "uk"},
    {label: "Германия", value: "de"},
    {label: "Франция", value: "fr"},
    {label: "Италия", value: "it"},
    {label: "Испания", value: "es"},
    {label: "Австралия", value: "au"},
    {label: "Индия", value: "in"},
    {label: "Китай", value: "cn"},
    {label: "Япония", value: "jp"},
    {label: "Россия", value: "ru"},
    {label: "Бразилия", value: "br"},
    {label: "Южная Африка", value: "za"},
    {label: "Мексика", value: "mx"},
]
export const AviationAndRailway = () => {
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');
    const [alignment, setAlignment] = useState('1');

    const handleChangeAlignment = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string);
    };
    return (
        <div className={'text-black'}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChangeAlignment}
                aria-label="Platform"
            >
                <ToggleButton value="1">Авиабилеты</ToggleButton>
                <ToggleButton value="2">Ж/д билеты</ToggleButton>
            </ToggleButtonGroup>

            <div className={'flex items-end gap-[50px] border p-[20px] rounded-lg'}>
                <Autocomplete
                    disablePortal
                    options={countries}
                    sx={alignment === '1' ? {width: 200} : {width: 400}}
                    renderInput={(params) => <TextField {...params} label="Откуда"/>}
                />
                <Autocomplete
                    disablePortal
                    options={countries}
                    sx={alignment === '1' ? {width: 200} : {width: 400}}

                    renderInput={(params) => <TextField {...params} label="Куда"/>}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Когда"/>
                    </DemoContainer>
                </LocalizationProvider>
                {alignment === '1' &&
                    <>
                        <div className={'w-[200px]'}>
                            <FormControl fullWidth>
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
                        </div>
                        <div className={'w-[200px]'}>
                            <FormControl fullWidth>
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
                        </div>
                    </>
                }


                <Button className={'bg-red-600 w-[150px] h-[55px] text-white'}>Найти</Button>
            </div>
            {alignment === '1' && <div className={'relative flex flex-col gap-[50px]'}>
                <div className={' flex items-center justify-between gap-[50px] mt-[50px]'}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div>
                            <h2 className={'text-[38px] font-bold'}>3 928p</h2>
                            <p>Без багажа, за одного</p>
                            <span>Багаж 20 кг</span>
                            <span>+ 1535р </span>
                            <Switch {...{inputProps: {'aria-label': 'Switch demo'}}} />
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white'}>
                            Выбрать билет
                        </Button>
                    </div>
                </div>
                <hr/>
                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div>
                            <h2 className={'text-[38px] font-bold'}>3 928p</h2>
                            <p>Без багажа, за одного</p>
                            <span>Багаж 20 кг</span>
                            <span>+ 1535р </span>
                            <Switch {...{inputProps: {'aria-label': 'Switch demo'}}} />
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white'}>
                            Выбрать билет
                        </Button>
                    </div>
                </div>
                <hr/>
                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div>
                            <h2 className={'text-[38px] font-bold'}>3 928p</h2>
                            <p>Без багажа, за одного</p>
                            <span>Багаж 20 кг</span>
                            <span>+ 1535р </span>
                            <Switch {...{inputProps: {'aria-label': 'Switch demo'}}} />
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white'}>
                            Выбрать билет
                        </Button>
                    </div>
                </div>
                <hr/>
                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div>
                            <h2 className={'text-[38px] font-bold'}>3 928p</h2>
                            <p>Без багажа, за одного</p>
                            <span>Багаж 20 кг</span>
                            <span>+ 1535р </span>
                            <Switch {...{inputProps: {'aria-label': 'Switch demo'}}} />
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white'}>
                            Выбрать билет
                        </Button>
                    </div>
                </div>
            </div>}
            {alignment === '2' && <div className={'flex flex-col gap-[50px]'}>
            <div className={' flex items-center justify-between gap-[50px] mt-[50px]'}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
                <hr/>

                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
                <hr/>

                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
                <hr/>

                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
                <hr/>

                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
                <hr/>
                <div className={' flex items-center justify-between gap-[50px] '}>
                    <div className={'relative flex items-center justify-between w-full'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>19:10</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Внукова</span>
                            <span className={'text-slate-500'}>Москва</span>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-[38px] font-bold mb-[20px]'}>20:30</h2>
                            <span className={'text-slate-500'}>16, ноя, сб</span>
                            <span>Пулково</span>
                            <span className={'text-slate-500'}>Санкт-Петербург</span>
                        </div>
                        <div className={'absolute left-[50%] text-center'}>
                            <p className={'mb-[20px] text-slate-500'}>1ч 20м в пути</p>
                            <div className={'absolute top-[50%] left-[-500%] bg-slate-500 h-[1px] w-[1000px]'}></div>
                            <p className={'text-slate-500'}>Прямой</p>
                        </div>
                    </div>
                    <div className={'border-l-2 pl-[50px] w-[400px]'}>
                        <div className={'flex flex-col gap-[10px]'}>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>Купе</h2>
                                <span className={'text-slate-500'}>64 ниж, 90 верх</span>
                                <span className={'text-[18px] font-bold'}> от 4 730р</span>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <h2 className={'text-[18px] font-bold'}>СВ</h2>
                                <span className={'text-slate-500'}>21 ниж</span>
                                <span className={'text-[18px] font-bold'}> от 9 960р</span>
                            </div>
                        </div>
                        <Button className={'w-[150px] bg-red-600 text-white mt-[20px]'}>
                            Выбрать места
                        </Button>
                    </div>
                </div>
            </div>}

        </div>
    );
};

