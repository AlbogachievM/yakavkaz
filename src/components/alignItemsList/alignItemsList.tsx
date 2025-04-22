import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import {reserves} from "@/db/turismWayData.ts";

export default function AlignItemsList() {
    return (
        <List className={'flex flex-wrap gap-2'} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {reserves.map((reserve, index) => (
                <div key={index} >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <img alt={reserve.name} className={'w-[350px] mr-2'} src={reserve.img}/>
                        </ListItemAvatar>
                        <ListItemText
                            secondary={
                                <>
                                    <Typography
                                        component="span"
                                        variant="h6"
                                        sx={{color: 'text.primary', display: 'inline'}}
                                    >
                                        {reserve.name}
                                    </Typography>
                                    <h2>
                                        {`${reserve.description}`}
                                    </h2>
                                    <button
                                        className={'bg-red-600 hover:bg-red-500 text-white  p-2 rounded-[5px] mt-2'}>
                                        Посмотреть
                                    </button>
                                </>
                            }
                        />

                    </ListItem>

                </div>
            ))}
        </List>
    );
}
