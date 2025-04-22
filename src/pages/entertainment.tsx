import * as React from "react";
import {useState} from "react";
import {Autocomplete, IconButton, Paper, TextField, ToggleButton} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {adultEntertainment, entertainmentPlaces, kidsEntertainment} from "@/db/entertainment.ts";

export const Entertainment = () => {

    const [alignment, setAlignment] = useState('детей');
    const handleChangeAlignment = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
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
            <h1 className={'text-[30px] font-bold mb-5'}>Развлечения</h1>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChangeAlignment}
                aria-label="Platform"
            >
                <ToggleButton value="детей">Для детей</ToggleButton>
                <ToggleButton value="взрослых">Для взрослых</ToggleButton>
            </ToggleButtonGroup>
            <div className={'mt-5 mb-5 flex gap-5'}>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder={`Поиск развлечений для ${alignment}`}
                        inputProps={{'aria-label': 'search google maps'}}
                    />
                    <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
                <Autocomplete
                    disablePortal
                    options={alignment === 'детей' ? kidsEntertainment : adultEntertainment}
                    sx={{width: '100%'}}
                    renderInput={(params) => <TextField {...params} label="Все развлечения"/>}
                />
            </div>
            <div className={'flex flex-wrap gap-5 justify-between'}>
                {entertainmentPlaces.map(el => {
                    return (
                        <div key={el.id} className={'border w-[300px] cursor-pointer group'}>
                            <img src={el.img} alt=""/>
                            <div className={'p-2 border-t-[1px]'}>
                                <h1 className={'font-bold text-[18px] group-hover:text-blue-600'}>{el.name}</h1>
                                <h2 className={'text-[14px]'}>{el.category}</h2>
                            </div>
                            <div className={'flex items-center justify-between border-t-[1px] p-2'}>
                                <button className={'hover:text-blue-600'}>Показать на схеме ТРК</button>
                                <span>&#10095;</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

