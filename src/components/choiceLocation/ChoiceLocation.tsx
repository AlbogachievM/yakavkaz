import dag from '/src/assets/location/dagestan.jpg';
import chech from '/src/assets/location/chech.jpg';
import kb from '/src/assets/location/kb.jpg';
import kr from '/src/assets/location/kr.jpg';
import ing from '/src/assets/location/ingush.jpg';
import oset from '/src/assets/location/osetia.png';
import logo from '/src/assets/img/logo.png';
import close from '/src/assets/img/close.svg'
import {Container} from "@/components/container/container.tsx";

export type Region =
    | ' Ингушетия'
    | ' Чечня'
    | ' Дагестан'
    | ' Кабардино-Балкария'
    | ' Карачаева-Черкессия'
    | ' Северная-Осетия';

export type Props = {
    isShow?: boolean;
    callback: () => void;
    hoveredRegion: Region | null;
    setHoveredRegion: (region: Region | null) => void;
    selectedRegion: Region | null;
    setSelectedRegion: (region: Region | null) => void;
};

export const regions: Region[] = [
    ' Ингушетия',
    ' Чечня',
    ' Дагестан',
    ' Кабардино-Балкария',
    ' Карачаева-Черкессия',
    ' Северная-Осетия',
];

export const backgroundImages: Record<Region, string> = {
    ' Ингушетия': ing,
    ' Чечня': chech,
    ' Дагестан': dag,
    ' Кабардино-Балкария': kb,
    ' Карачаева-Черкессия': kr,
    ' Северная-Осетия': oset,
};

export const ChoiceLocation = ({ isShow = true, callback, hoveredRegion, setHoveredRegion, selectedRegion, setSelectedRegion }: Props) => {
    const activeRegion = selectedRegion || hoveredRegion;

    const handleHover = (region: Region) => {
        if (!selectedRegion) {
            setHoveredRegion(region);
        }
    };

    const handleSelect = (region: Region) => {
        setSelectedRegion(region);
        callback()
    };

    const handleMouseLeave = () => {
        if (!selectedRegion) {
            setHoveredRegion(null);
        }
    };

    if (isShow) return (
        <div
            className={'w-full h-[100vh] relative'}
            style={{
                backgroundImage: `url(${backgroundImages[activeRegion || ' Дагестан']})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <button
                onClick={callback}
                className={'absolute top-[2%] right-[2%]'}
            >
                <img src={close} alt="close" className={'w-[50px] h-[50px]'} />
            </button>

            <Container>
                <div className={'relative flex items-center justify-between'}>
                    <div className={'pt-5 h-[100vh] w-[390px] bg-[#00000063] text-white flex items-center gap-[50px] flex-col'}>
                        <div className={'flex flex-col gap-1 items-center'}>
                            <img src={logo} alt="logo" width={'100'} />
                            <span className={'text-red-600 text-[25px] font-bold'}>
                                <span className={'text-white'}>ЯК</span>АВКАЗ
                            </span>
                        </div>
                        <nav>
                            {regions.map((region) => (
                                <div
                                    key={region}
                                    className={`relative group transition-all duration-300 text-[20px] cursor-pointer`}
                                    onMouseEnter={() => handleHover(region)}
                                    onClick={() => handleSelect(region)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        className={`p-5 transition-all duration-300 group-hover:scale-125 mt-5 group-hover:bg-[#00000063] ${
                                            selectedRegion === region ? 'bg-[#00000063] scale-125' : ''
                                        }`}
                                    >
                                        <span className={'relative inline-block transition-transform duration-500'}>
                                            {region}
                                            <span
                                                className="absolute left-0 bottom-0 w-full border-b-2 transition-all duration-300"
                                                style={{ borderColor: '#ffffff78' }}
                                            ></span>
                                            <span
                                                className={`absolute left-0 bottom-0 w-0 border-b-2 border-red-500 transition-all duration-500 group-hover:w-full z-40`}
                                            ></span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className={'w-full flex justify-end'}>
                        <div className={'flex items-end flex-col relative'}>
                            <h1 className={'text-white font-bold text-[100px]'}>{activeRegion || 'Дагестан'}</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
