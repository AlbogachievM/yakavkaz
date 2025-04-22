import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {CheckboxListProps} from "@/components/hotelsCard/data.ts";


export const CheckboxList = ({items}:CheckboxListProps) => {
    const [checked, setChecked] = React.useState<number[]>([]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items.map((item) => {
                const labelId = `checkbox-list-label-${item.id}`;

                return (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(item.id)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}