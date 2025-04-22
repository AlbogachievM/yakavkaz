import {Menu} from "../menu/menu";
import logo from '/src/assets/img/yaing-logo.png'
import {Container} from "@/components/container/container.tsx";

export const Footer = () => {
    return (
        <footer className={'text-white mt-20 pt-10 pb-10 bg-black w-full'}>
            <Container>
                <div className={'flex items-start gap-5'}>
                    <Menu/>
                    <div className={'flex flex-col items-center relative'}>
                        <img src={logo} alt="" className={'w-[100px]'}/>
                        <span className={'text-red-600 font-bold text-[70px] uppercase rotate-[90deg] absolute top-[100%] translate-y-[100%] right-50 translate-x-[2%] flex'}><span className={'text-white'}>YA</span>ИНГ</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

