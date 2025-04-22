import mapTraffic from '@/assets/img/mapTraffic.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export const TrafficConditions = () => {
    return (
        <div className="min-h-[85vh] bg-cover bg-center">
            <img src={mapTraffic} alt="" className={'absolute top-[95px] left-0 w-[] '}/>
            <div className={'bg-white border rounded-lg absolute left-5 z-[20] text-black p-5'}>
                <div className={'flex items-center gap-[100px]'}>
                    <IconButton sx={{p: '10px'}} aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <h2>Путевые инструкции</h2>


                </div>
           <div className={'flex flex-col gap-5 mt-[20px]'}>
               <Paper
                   component="form"
                   sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
               >

                   <InputBase
                       sx={{ml: 1, flex: 1}}
                       placeholder="Выбрать пункт отправления"
                       inputProps={{'aria-label': 'search google maps'}}
                   />
                   <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                       <SearchIcon/>
                   </IconButton>
               </Paper>
               <Paper
                   component="form"
                   sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
               >

                   <InputBase
                       sx={{ml: 1, flex: 1}}
                       placeholder="Выбрать пункт назначения"
                       inputProps={{'aria-label': 'search google maps'}}
                   />
                   <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                       <SearchIcon/>
                   </IconButton>
               </Paper>
           </div>
            </div>
        </div>
    );
};
