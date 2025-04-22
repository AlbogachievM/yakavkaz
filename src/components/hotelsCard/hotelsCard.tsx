import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {Button} from "@chakra-ui/react";
import {HotelsCardType} from "@/components/hotelsCard/cardHotelsData.ts";
const labels: { [index: string]: string } = {
    0.5: 'Низкая',
    1: 'Низкая+',
    1.5: 'Бедно',
    2: 'Бедно+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Хорошо',
    4: 'Хорошо+',
    4.5: 'Отлично',
    5: 'Отлично+',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

type Props = {
    width?: number
    variant?: 'default' | 'sanatorium'
} & HotelsCardType
export const HotelsCard = ({title, price, subtitle, description, img, variant ='default', width=1100}:Props) => {

    const [value, setValue] = React.useState<number | null>(4);

    return (
        <div className={`text-black flex justify-between border rounded-lg p-2 mt-5 w-[${width}px]`}>
            <div className={'flex gap-9'}>
                <div>
                    <img className={'rounded-lg '} src={img} alt="" width={400}/>
                </div>
                <div className={'flex flex-col gap-1'}>
                    <span className={'text-blue-600 text-[20px] font-bold'}>{title}</span>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(_, newValue) => {
                            setValue(newValue);
                        }}
                        emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                    />
                    <span className={'text-[14px]'}>{subtitle}</span>
                    {description && <p className={'text-[14px] mt-2 w-[300px]'}>{description}</p>}
                    <span className={'text-[14px] text-blue-600 underline'}>Развернуть</span>
                </div>
            </div>
            <div className={'flex flex-col gap-9'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'leading-[1.3]'}>
                        <h2 className={'text-[18px] font-bold'}>Очень хорошо</h2>
                        <span className={'text-[12px]'}>24 379 отзывов</span>
                    </div>
                    <div className={'bg-red-600 p-2 w-[39px] rounded-lg text-white font-bold'}>8.3</div>
                </div>
                <div>
                    {
                        variant === 'default' ?
                        <>
                            <span className={'text-[14px] text-slate-500'}>Цена от</span>
                            <h3 className={'font-bold text-[20px]'}>{price}р</h3>
                            <span className={'text-[14px] text-slate-500'}>за ночь</span>
                        </>:
                            <>
                                <h3 className={'font-bold text-[20px]'}>{price}р</h3>
                            </>
                    }


                </div>
                <Button className={'bg-red-600 text-white p-2'}>Найти</Button>
            </div>
        </div>
    );
};
