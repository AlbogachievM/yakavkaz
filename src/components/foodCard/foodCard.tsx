import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import img from "@/assets/food/1.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
    name: string
    price: number
}

export const FoodCard = ({name, price}:Props) => {
    return (
        <div>
            <Card sx={{ maxWidth: 235, height:400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2, textAlign: 'center' }}>

                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <h2 className={'text-black text-center text-[18px] font-bold'}>{name}</h2>
                    <Typography variant={"body1"}>{price}р</Typography>
                </CardContent>
                <button className={'text-white bg-red-600 border w-full rounded-[5px] p-2 uppercase'}>в корзину</button>
            </Card>

        </div>
    );
};

