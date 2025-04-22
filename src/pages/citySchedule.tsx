import { useState, SyntheticEvent } from 'react';
import {
    Box,
    Collapse,
    IconButton,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {schedule, TransportSchedule} from "@/db/schedule.ts";
import close from "@/assets/img/close.svg";
import map from '@/assets/img/map.png'


export const CitySchedule = () => {
    const [tabValue, setTabValue] = useState('Автобус');
    const handleChange = (_: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const [isOpen, setIsOpen] = useState(false)

    const Row = (props: { row: TransportSchedule }) => {
        const { row } = props;
        const [open, setOpen] = useState(false);
        return (
            <>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {tabValue}
                    </TableCell>
                    <TableCell align="center">{row.way}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">
                        {row.week.map((w, i) => (
                            <span
                                className={`border p-1 ${i !== row.week.length - 1 ? 'mr-2' : ''} ${
                                    w.include ? 'bg-red-600 text-white' : ''
                                }`}
                                key={i}
                            >
                                {w.day}
                            </span>
                        ))}
                    </TableCell>
                    <TableCell align="right" ><button onClick={()=>setIsOpen(true)}>Карта</button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Описание
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Время</TableCell>
                                            <TableCell>Маршрут</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.description.map((descriptionRow) => (
                                            <TableRow key={descriptionRow.time}>
                                                <TableCell component="th" scope="row">
                                                    {descriptionRow.time}
                                                </TableCell>
                                                <TableCell>{descriptionRow.route}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        );
    };

    return (
        <div className="text-black relative">
            <Tabs value={tabValue} onChange={handleChange} textColor="primary" indicatorColor="primary">
                <Tab value="Автобус" label="Автобус" />
                <Tab value="Трамвай" label="Трамвай" />
            </Tabs>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Транспорт</TableCell>
                            <TableCell align="center">Номер маршрута</TableCell>
                            <TableCell align="center">Описание</TableCell>
                            <TableCell align="center">Дни недели</TableCell>
                            <TableCell align="right">На карте</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule
                            .filter((s) => s.transport === tabValue)
                            .map((row) => (
                                <Row key={row.way} row={row} />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {isOpen && <div className={'absolute top-[50%] left-[50%] overflow-hidden transform -translate-x-[50%] -translate-y-[50%] bg-white border rounded-lg w-[1000px] h-[600px] z-50'}>
                <div>
                    <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className={'absolute top-[2%] right-[2%]'}
                    >
                        <img src={close} alt="close" className={'w-[30px] h-[30px]'}/>
                    </button>
                </div>
                <img src={map} alt="map" />
            </div>}
        </div>
    );
};
