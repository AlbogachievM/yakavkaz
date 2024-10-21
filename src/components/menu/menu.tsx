import {menuItems} from "@/components/nav/nav.tsx";
import {Container} from "@/components/container/container.tsx";

type Props = {
    isOpen: boolean
}
export const Menu = ({isOpen}: Props) => {
    return (
        <>
            {isOpen && <menu className={'bg-black h-[100vh] left-0 overflow-hidden absolute w-full  z-[10000]'}>
                <Container>
                    <div className={'flex text-left gap-12 items-start justify-around flex-wrap'}>
                        {menuItems.map((menuItem, subIndex) => {
                            return (
                                <div key={subIndex}>
                                    <h2 className={'font-bold'}>{menuItem.title}</h2>
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

