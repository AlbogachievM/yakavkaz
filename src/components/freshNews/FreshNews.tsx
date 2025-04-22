import {useState} from "react";

export type ArrayProps = {
    title: string
    text: string
    author: string
}
type Props = {
    array: ArrayProps[]
}
export const FreshNews = ({array}: Props) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <>
            {array.map((el, i) => (
                <div
                    key={i}
                    className="w-[468px] p-4 transition-all duration-300 cursor-pointer shadow"
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="text-[12px] font-bold text-red-600">{el.author}</span>
                    <h3 className="text-[20px] font-bold">{el.title}</h3>
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            activeIndex === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="mt-2">{el.text}</p>
                        <a href="#" className="border border-solid mt-4 inline-block p-2 rounded-md text-sm font-bold">
                            Перейти
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};
