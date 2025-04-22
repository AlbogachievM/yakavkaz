import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";

export default function ScrollableTabsButtonPrevent() {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const foodTypes = ['Все', 'Самовывоз', 'Бургеры', 'Суши', 'Пицца', 'Вок', 'Паста', 'Завтраки', 'Обеды', 'Салаты', 'Комбо наборы', 'Десерты', 'Напитки'];
    return (
        <Box sx={{ maxWidth: 1000 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="scrollable prevent tabs example"
            >
                {foodTypes.map((el,i)=>{
                    return(
                        <Tab key={i} label={el} />
                    )
                })}
            </Tabs>
        </Box>
    );
}