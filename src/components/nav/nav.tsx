import {useState} from "react";
import {menuItems} from "@/db/menuItems.ts";




export const Nav = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <nav className="flex items-center justify-between gap-4 text-[14px]">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    className="relative"

                >

                    {item.link ?
                        <a href={item.link} className={`${activeIndex === index && "border-b-[1px]"} cursor-pointer uppercase`}>
                            {item.title}
                        </a> :
                        <span  className={`${activeIndex === index && "border-b-[1px]"} cursor-default uppercase`}>
                            {item.title}
                        </span>
                    }


                    {activeIndex === index && (
                        <div
                            className="absolute top-6 left-[50%] translate-x-[-50%] p-2 flex flex-col bg-black z-40 min-w-max shadow-lg"
                            onMouseLeave={handleMouseLeave}>
                            {item.submenu && item.submenu.map((submenuItem, subIndex) => (
                                <a key={subIndex} href={submenuItem.link}
                                   className="block w-full p-1 text-white text-center hover:opacity-80">
                                    {submenuItem.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};



