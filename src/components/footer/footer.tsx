import {Menu} from "../menu/menu";
import logo from '/src/assets/img/logo.png'
import {Container} from "@/components/container/container.tsx";

export const Footer = () => {
    return (
        <footer className={'text-white mt-20 pt-10 pb-10 bg-black w-full'}>
            <Container>
                <div className={'flex items-start gap-5'}>
                    <div className={'flex flex-col items-center relative'}>
                        <img src={logo} alt="" className={'w-[100px]'}/>
                        <span className={'text-red-600 font-bold text-[70px] uppercase rotate-[-90deg] absolute top-[100%] translate-y-[150%] flex'}><span className={'text-white'}>Я</span>КАВКАЗ</span>
                    </div>
                    <Menu/>

                </div>
            </Container>
        </footer>
    );
};

