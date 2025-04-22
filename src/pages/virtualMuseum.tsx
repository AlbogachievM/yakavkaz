import img from '../assets/virtual/vmus.jpg'
import {locations, reserves} from "@/db/reserves.ts";
export const VirtualMuseum = () => {
    return (
        <div>
            <div className={'mt-5 mb-5'}>
                <h1 className={'font-bold text-[30px] mb-5'}>Виртуальный музей</h1>
                <div className={'border rounded-lg overflow-hidden shadow-lg flex items-center justify-between'}>
                    <div className={'w-[500px] p-5 flex flex-col items-start gap-5'}>
                        <h2 className={'text-[20px] font-bold'}>История</h2>
                        <p>Вашему вниманию предлагается виртуальный музей "Истории пожарной охраны и добровольчества".
                            Это собирательный, 100% виртуальный музей. В реальной жизни его не существует! Он
                            рассказывает об исторических вехах пожарной охраны и добровольчества в России без учета
                            региональных особенностей.</p>
                        <button className={'text-white bg-red-600 hover:bg-red-500 rounded-[5px] p-2'}>Открыть</button>
                    </div>
                    <img src={img} alt="img"/>
                </div>
                <div>
                    <div className={'flex flex-wrap gap-2 justify-between mt-5'}>
                        {reserves.map((el, i) => {
                            return (
                                <div key={i}
                                     className={'relative group w-[474px] h-[250px] flex flex-col justify-end p-2 rounded-lg cursor-pointer'}
                                     style={{
                                         backgroundImage: `url(${el.img})`,
                                         backgroundSize: 'cover',
                                         backgroundPosition: 'center',
                                     }}>
                                    <span className={'text-white font-bold'}>{el.name}</span>
                                    <button
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 right-4 bg-red-600 text-white py-2 px-4 rounded z-50">
                                        {'>'}
                                    </button>
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                                </div>
                            )
                        })}
                    </div>
                    <h4 className={'mt-2 text-center underline cursor-pointer'}>Посмотреть все</h4>
                </div>
                <div className={'mt-5'}>
                    <h1 className={'font-bold text-[30px] mb-5'}>Панорамы 360</h1>
                    <div className={'flex flex-wrap items-start justify-between gap-3'}>
                        {locations.map((el, i) => {
                            return (
                                <div key={i}
                                     className={'cursor-pointer flex flex-col group justify-between w-[350px] h-[300px] border rounded-lg overflow-hidden hover:shadow-lg text-center'}>
                                    <img src={el.img} alt="img"/>
                                    <div className={'mt-2'}>
                                        <h1 className={'text-[18px] font-bold'}>{el.name}</h1>
                                        <span className={'mt-2 text-[16px]'}>{el.address}</span>
                                    </div>
                                    <button className={'bg-red-600 text-white group-hover:bg-red-500'}>Посмотреть</button>
                                </div>
                            )
                        })}
                    </div>
                    <h4 className={'mt-2 text-center underline cursor-pointer'}>Посмотреть все</h4>

                </div>

            </div>
        </div>
    );
};

// 'Панорамы 360'
