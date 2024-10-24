import './App.css'
import {Header} from "@/components/header/header.tsx";
import {TopNews} from "@/components/topNews/topNews.tsx";
import {Container} from "@/components/container/container.tsx";
import {NewsCard} from './components/newsCard/NewsCard';
import {NewsList} from "@/components/newsList/NewsList.tsx";
import {NewsSlider} from "@/components/newsSlider/NewsSlider.tsx";
import {Footer} from './components/footer/footer';
import {NewsLine} from "@/components/newsLine/NewsLine.tsx";
import {FreshNews} from "@/components/freshNews/FreshNews.tsx";
import {array} from "@/components/freshNews/array.ts";
import {newsCardArray} from "@/components/newsCard/newsCardArray.ts";
import {newsCardArray2} from "@/components/newsCard/newsCardArray2.ts";
import {ChoiceLocation, Region} from "@/components/choiceLocation/ChoiceLocation.tsx";
import {useEffect, useState} from "react";

function App() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(' Дагестан');

    const callbackHandler = () =>{
        setIsShow(state=> !state)
    }
    useEffect(() => {
        document.body.style.overflow = isShow ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // Возврат к исходному состоянию при размонтировании
        };
    }, [isShow]);

    return (
        <div>
            {isShow && (
                <div className={'absolute top-0 bottom-0 left-0 right-0 z-[9999] overflow-hidden animate-slide-down'}>
                    <ChoiceLocation
                        isShow={isShow}
                        callback={callbackHandler}
                        hoveredRegion={hoveredRegion}
                        setHoveredRegion={setHoveredRegion}
                        selectedRegion={selectedRegion}
                        setSelectedRegion={setSelectedRegion}
                    />
                </div>
            )}
            <Header callback={callbackHandler} name={selectedRegion} className={'pt-4'}/>
            <main className={'pt-4'}>
                <TopNews/>
                <Container>
                    <div className={'flex items-start justify-between mt-10'}>
                        <div>
                            <section className={' w-full'}>
                                <div className="flex items-center font-bold text-2xl mb-4">
                                    <h1 className="mr-2">Актуально</h1>
                                </div>
                                <div className={'flex items-center gap-4 flex-wrap'}>
                                    <NewsSlider/>
                                </div>
                            </section>
                            <section className={'mt-10 w-full'}>
                                <div className="flex items-center font-bold text-2xl mb-4">
                                    <h1 className="mr-2">{selectedRegion}</h1>
                                </div>
                                <div className={'flex items-center gap-4 flex-wrap'}>
                                    <NewsCard newsArray={newsCardArray}/>
                                </div>
                            </section>
                        </div>
                        <NewsList/>
                    </div>
                    <div className={'flex items-start'}>
                        <section className={'mt-10 w-full'}>
                            <div className="flex items-center font-bold text-2xl mb-4">
                                <h1 className="mr-2">Другие регионы</h1>
                            </div>
                            <div className={'flex items-center gap-4 flex-wrap'}>
                                <NewsCard newsArray={newsCardArray2}/>
                            </div>
                        </section>
                        <NewsLine/>
                    </div>
                    <section className={'flex items-start gap-4 flex-wrap mt-10 h-[70vh]'}>
                        <FreshNews array={array}/>
                    </section>
                </Container>
            </main>
            <Footer/>
        </div>


    )
}

export default App
