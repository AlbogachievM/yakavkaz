import {Container} from "@/components/container/container.tsx";
import svg from "@/assets/img/search.svg";
import {menuItems} from "@/db/menuItems.ts";

type Props = {
    isOpen?: boolean
    className?: string
}
export const Menu = ({isOpen = true, className = ''}: Props) => {
    return (
        <>
            {isOpen && <menu className={`bg-black w-full shadow-lg ${className}`}>
                <Container>
                    <div className={'flex items-center gap-2 w-full mb-5'}>
                        <input placeholder={'Поиск по сайту...'} type="text" className={'w-full h-[40px] p-2 rounded text-black'}/>
                        <button>
                            <img src={svg} alt="search" className={'w-7 h-7'}/>
                        </button>
                    </div>
                    <div className={'flex text-left gap-5 items-start flex-wrap'}>
                        {menuItems.map((menuItem, subIndex) => {
                            return (
                                <div key={subIndex} className={'w-[240px] p-3'}>
                                    <h2 className={'font-bold text-[17px] mb-1'}>{menuItem.title}</h2>
                                    {menuItem.submenu && <ul>
                                        {menuItem.submenu.map((submenuItem, subIndex) => {
                                            return (
                                                <li key={subIndex}><a href={submenuItem.link}>{submenuItem.title}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>}
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </menu>}
        </>
    );
};

