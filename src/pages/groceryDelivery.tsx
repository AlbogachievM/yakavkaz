import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import ScrollableTabsButtonPrevent from "@/components/tabs/tabs.tsx";
import {FoodCard} from "@/components/foodCard/foodCard.tsx";
import {products} from "@/db/productsData.ts";

export const GroceryDelivery = () => {
    return (
        <>
            <div className={'flex gap-2'}>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="Найти ресторан, блюдо или товар"
                        inputProps={{'aria-label': 'Найти ресторан, блюдо или товар'}}
                    />
                    <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
                <button className={'border rounded-[5px] text-white w-[100px] bg-red-600 p-2'}>Найти</button>
            </div>
            <div className={'flex justify-center mt-5 mb-5'}>
                <ScrollableTabsButtonPrevent/>
            </div>
            <div className={'flex flex-wrap justify-between gap-4'}>
                {products.map((el,i)=>{
                    return(
                        <FoodCard {...el} key={i} />
                    )
                })}


            </div>
        </>
    );
};

