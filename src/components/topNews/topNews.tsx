import {Container} from "@/components/container/container.tsx";

const arrList = [
    {id: 0, title: 'Массированный финансовый кризис Boeing'},
    {id: 1, title: 'Скандал в шахматах'},
    {id: 2, title: 'Украинские дроны'},
    {id: 3, title: 'Штраф Lufthansa'},
    {id: 4, title: 'Джерри Сейнфелд'},
    {id: 5, title: 'Марракеш'},
    {id: 6, title: 'Санузел номер один в Америке'},
    {id: 7, title: 'Лионель Месси'}
];

export const TopNews = () => {
    return (
        <Container>
            <ul className={'flex items-center justify-between'}>
                {arrList.map((item) => (
                    <li key={item.id}
                        className={`relative ${item.id !== arrList.length - 1 ? 'before:content-[""] before:absolute before:right-[-8px] before:top-1/2 before:h-4 before:w-[1px] before:bg-black before:transform before:-translate-y-1/2' : ''}`}
                    ><a href={'#'} className={'underline'}>{item.title}</a></li>
                ))}
            </ul>
        </Container>
    );
};








