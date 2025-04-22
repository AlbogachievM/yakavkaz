import {Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {Button} from "@chakra-ui/react";
import {countries} from "@/pages/aviationAndRailway.tsx";
import {useState} from "react";
import {HotelsCard} from "@/components/hotelsCard/hotelsCard.tsx";
import {sanatoriumData} from "@/db/sanatoriumData.ts";

export const Sanatoriums = () => {
    const [dat, setDay] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as string);
    };
    return (
        <section>
            <div className={'flex items-end gap-[50px] border p-[20px] rounded-lg'}>
                <Autocomplete
                    disablePortal
                    options={countries}
                    sx={{width: 500}}
                    renderInput={(params) => <TextField {...params} label="Введите название санатория или региона"/>}
                />
                <div className={'w-[200px]'}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Сколько дней</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dat}
                            label="Сколько дней"
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Когда"/>
                    </DemoContainer>
                </LocalizationProvider>

                <Button className={'bg-red-600 w-[150px] h-[55px] text-white'}>Найти</Button>
            </div>
            <div>
                {sanatoriumData.map((el, i)=>{
                    return(
                        <HotelsCard width={1200} variant={'sanatorium'} {...el} key={i} />
                    )
                })}
            </div>
        </section>
    );
};

