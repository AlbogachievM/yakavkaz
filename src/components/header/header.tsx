import logo from '/src/assets/img/yaing-logo.png'
import {Container} from "@/components/container/container.tsx";
import svg from '/src/assets/img/search.svg'
import {Nav} from "@/components/nav/nav.tsx";
import {MenuBurger} from "@/components/menuBurger/menuBurger.tsx";
import {useState} from "react";
import {Menu} from "@/components/menu/menu.tsx";
import {Region} from "@/components/choiceLocation/ChoiceLocation.tsx";

type Props = {
    className?: string
    callback:()=> void
    name: Region | null
}
export const Header = ({className, callback, name}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`text-end text-white bg-black relative ${className}`}>
            <Container>
                <div className={'flex items-center gap-4 pb-4'}>
                    <img src={logo} width={'50px'} alt={'logo'}/>
                    <div className={'flex flex-col gap-2 w-full'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex items-center gap-2'}>
                                <span className={'text-red-600 font-bold text-[20px] uppercase'}><span className={'text-white'}>YA</span>ИНГ</span>
                                <span className={'text-white font-bold text-[20px] uppercase'}>Новости</span>
                            </div>
                            <button
                                onClick={callback}
                                className={'text-[14px] border-b'}>Республика
                                {name}
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

