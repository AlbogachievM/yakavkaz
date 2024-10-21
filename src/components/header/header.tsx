import logo from '/src/assets/img/logo.png'
import {Container} from "@/components/container/container.tsx";
import svg from '/src/assets/img/search.svg'
import {Nav} from "@/components/nav/nav.tsx";
import {MenuBurger} from "@/components/menuBurger/menuBurger.tsx";
import {useState} from "react";
import {Menu} from "@/components/menu/menu.tsx";

type Props = {
    className?: string
}
export const Header = ({className}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`text-end text-white bg-black relative ${className}`}>
            <Container>
                <div className={'flex items-center gap-4 pb-4'}>
                    <img src={logo} width={'50px'} alt={'logo'}/>
                    <div className={'flex flex-col gap-1 w-full'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex items-center gap-2'}>
                                <span className={'text-red-600 font-bold text-[20px] uppercase'}>ЯКАВКАЗ</span>
                                <span className={'text-white font-bold text-[20px] uppercase'}>Новости</span>
                            </div>
                            <button
                                className={'w-[150px] text-[14px]'}>Республика
                                Дагестан
                            </button>
                        </div>
                        <div className={'flex items-center justify-between gap-4'}>
                            <div className={'flex items-center gap-4'}>
                                <MenuBurger callback={setIsOpen} isOpen={isOpen}/>
                                <Nav/>
                            </div>
                            <div className={'flex items-center gap-4'}>
                                <button onClick={()=> setIsOpen(state=> !state)}>
                                    <img src={svg} alt="search" className={'w-5 h-5'}/>
                                </button>
                                <button className={'border-solid border-white border-b-[1px] '}>Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
               <Menu className={'left-0 absolute  z-[1000]  pt-4 pb-8'} isOpen={isOpen}/>
            </Container>
        </header>
    );
};

