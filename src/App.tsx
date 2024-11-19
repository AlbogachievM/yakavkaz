import './App.css'
import {Header} from "@/components/header/header.tsx";
import {Container} from "@/components/container/container.tsx";
import {Footer} from './components/footer/footer';
import {ChoiceLocation, Region} from "@/components/choiceLocation/ChoiceLocation.tsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

function App() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(' Дагестан');

    const callbackHandler = () => {
        setIsShow(state => !state)
    }
    useEffect(() => {
        document.body.style.overflow = isShow ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
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
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
        </div>


    )
}

export default App
