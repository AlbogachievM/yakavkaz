import {Menu} from "../menu/menu";
import logo from '/src/assets/img/logo.png'
import {Container} from "@/components/container/container.tsx";

export const Footer = () => {
    return (
        <footer className={'text-white mt-20 bg-black w-full'}>
            <Container>
                <div className={'flex items-start gap-10'}>
                    <div className={'flex flex-col items-center pt-4'}>
                        <img src={logo} alt=""/>
                        <span className={'text-red-600 font-bold text-[20px] uppercase'}>ЯКАВКАЗ</span>
                    </div>
                    <Menu/>
                </div>
            </Container>
        </footer>
    );
};

