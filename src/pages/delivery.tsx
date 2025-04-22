import {Autocomplete, TextField} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {cities, establishments, foodCategories} from "@/db/deliveryData.ts";
import img from '../assets/img/delivery.png'
export const Delivery = () => {
    return (
        <section>
            <h1 className={'text-[20px] font-bold mb-5'}>Доставка еды по Республики Ингушетия </h1>
            <Autocomplete
                disablePortal
                options={cities}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Выберите город"/>}
            />
            <div className={'mt-5 flex items-start gap-5'}>
                <TableContainer component={Paper} sx={{maxWidth: 500}}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><span className={'font-bold text-[18px]'}>Еда</span></TableCell>
                                <TableCell align={'center'}><span className={'font-bold text-[18px]'}>Количество</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {foodCategories.map((d) => (
                                <TableRow
                                    key={d}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="d">
                                        <span className={'underline text-red-600 text-[18px] cursor-pointer'}>{d}</span>
                                    </TableCell>
                                    <TableCell align="center">{2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={'w-full'}>
                    <h1 className={'text-center text-[20px] font-bold mb-5'}>Бесплатная круглосуточная доставка Суши
                        и Роллы в
                        Верхних Ачалуках на дом</h1>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={'left'}><span
                                        className={'font-bold text-[18px]'}>Название</span></TableCell>
                                    <TableCell align={'center'}><span
                                        className={'font-bold text-[18px]'}>Адрес</span></TableCell>
                                    <TableCell align={'center'}><span
                                        className={'font-bold text-[18px]'}>График работы</span></TableCell>
                                    <TableCell align={'right'}><span
                                        className={'font-bold text-[18px]'}>Рейтинг</span>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {establishments.map((es) => (
                                    <TableRow
                                        key={es.name}
                                    >
                                        <TableCell component="th" scope="d">
                                        <span
                                            className={'underline text-red-600 text-[18px] cursor-pointer'}>{es.name}</span>
                                        </TableCell>
                                        <TableCell align="center">{es.address}</TableCell>
                                        <TableCell align="center">{es.schedule}</TableCell>
                                        <TableCell align="right">{es.rating}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={'mt-5 '}>
                        <img className={'w-full'} src={img} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};
