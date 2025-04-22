
type Props = {
    callback: (value: boolean)=> void
    isOpen: boolean
}
export const MenuBurger = ({callback, isOpen}:Props) => {

    const handleOpen = () => {
        callback(!isOpen)
    }
    return (
        <button
            className={'flex items-center justify-center gap-1 flex-col'}
            onClick={handleOpen}
        >
            <span className={'h-[1px] w-4 bg-white'}></span>
            <span className={'h-[1px] w-4 bg-white'}></span>
            <span className={'h-[1px] w-4 bg-white'}></span>
        </button>
    );
};

