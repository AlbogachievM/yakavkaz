type Props = {
    city: string;
    excursions: string;
    img: string
}
export const CityCard = ({city, excursions, img}: Props) => {
    return (
        <div className={'cursor-pointer hover:opacity-80 relative bg-cover bg-center rounded w-[281px] h-64 flex items-end justify-start text-white'}
             style={{backgroundImage: `url(${img})`}}>
            <div className={'p-2'}>
                <h1>{city}</h1>
                <span>{excursions}</span>
            </div>
        </div>
    );
};

