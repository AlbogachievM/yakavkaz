export type ListItemData = {
    id: number;
    label: string;
}

export type CheckboxListProps = {
    items: ListItemData[];
}
export const starRatingItems: ListItemData[] = [
    {id: 5, label: '5 звезд'},
    {id: 4, label: '4 звезды'},
    {id: 3, label: '3 звезды'},
    {id: 2, label: '2 звезды'},
    {id: 1, label: '1 звезда'},
];

export const reviewRatingItems: ListItemData[] = [
    {id: 9, label: 'Превосходно: 9+'},
    {id: 8, label: 'Очень хорошо: 8+'},
    {id: 7, label: 'Хорошо: 7+'},
    {id: 6, label: 'Достаточно хорошо: 6+'},
];

export const priceHome: ListItemData[] = [
    {id: 5, label: '0 - 1000 руб. за ночь'},
    {id: 4, label: '1000 - 2000 руб. за ночь'},
    {id: 3, label: '2000 - 3000 руб. за ночь'},
    {id: 2, label: '3000 - 5000 руб. за ночь'},
    {id: 1, label: 'свыше 5000 руб. за ночь'},
];
export const typeInstitution: ListItemData[] = [
    {id: 1, label: 'Рестораны'},
    {id: 2, label: 'Кафе'},
];