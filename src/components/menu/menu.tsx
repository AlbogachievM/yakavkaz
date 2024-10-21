import {menuItems} from "@/components/nav/nav.tsx";
import {Container} from "@/components/container/container.tsx";

type Props = {
    isOpen?: boolean
    className?: string
}
export const Menu = ({isOpen = true, className = ''}: Props) => {
    return (
        <>
            {isOpen && <menu className={`bg-black w-full shadow-lg ${className}`}>
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

