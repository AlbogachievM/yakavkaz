import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {coworkingData} from "@/db/coworkingData.ts";
import img from '../assets/img/imgCoworcking.png'
export const CoworkingCenters = () => {
    return (
        <div>
            <h1 className={'text-[30px] mb-5 font-bold'}>Коворкинг центры по городам России</h1>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Город:</TableCell>
                                <TableCell align="right">Население:</TableCell>
                                <TableCell align="right">Коворкинги:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coworkingData.map((cowork) => (
                                <TableRow
                                    key={cowork.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="cowork">
                                        {cowork.name}
                                    </TableCell>
                                    <TableCell align="right">{cowork.population}</TableCell>
                                    <TableCell align="right">{cowork.area}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={'flex justify-center mt-10'}>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

