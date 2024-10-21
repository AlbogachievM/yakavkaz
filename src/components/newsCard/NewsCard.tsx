
type Props = {
    variant?: 'news' | 'article'
}

const NewsCard = ({variant}:Props) => {
    console.log(variant)
    return (
        <div className="max-w-[350px] rounded shadow-lg relative">
            <img
                className="w-full"
                src="https://via.placeholder.com/350x150" // Замените на ваше изображение
                alt="News"
            />
            <p className="text-gray-600 text-sm absolute top-0 bg-black">
                <span className={'text-red-500 font-bold mr-2 p-2'}>L’EXPRESS</span>
            </p>
            <div className="px-6 py-4">
                <p className="text-gray-600 text-sm">
                    <span className="font-bold">15.окт.2024 17:50</span>
                </p>
                <h3 className="font-bold text-xl mb-2">
                    Free Mobile: частная распродажа скоро закончится
                </h3>

                <p className="text-gray-700 text-base">
                    Free Mobile: частная распродажа скоро закончится
                    На прошлой неделе Free Mobile запустила частную распродажу своего крупнейшего плана. Предложение
                    скоро появится...
                </p>
            </div>
        </div>
    );
};

export default NewsCard;
