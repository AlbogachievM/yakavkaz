import {menuItems} from "@/components/nav/nav.tsx";
import {Container} from "@/components/container/container.tsx";

type Props = {
    isOpen: boolean
}
export const Menu = ({isOpen}: Props) => {
    return (
        <>
            {isOpen && <menu className={'bg-black left-0 absolute w-full  z-[10000] pt-4 pb-8 shadow-lg'}>
                <Container>
                    <div className={'flex text-left gap-5 items-start flex-wrap'}>
                        {menuItems.map((menuItem, subIndex) => {
                            return (
                                <div key={subIndex} className={'w-[250px] p-3'}>
                                    <h2 className={'font-bold text-[17px] mb-1'}>{menuItem.title}</h2>
                                    <ul>
                                        {menuItem.submenu.map((submenuItem, subIndex) => {
                                            return (
                                                <li key={subIndex}>{submenuItem}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </menu>}
        </>
    );
};

