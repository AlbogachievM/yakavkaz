
type Props = {
    variant?: 'news' | 'article'
    img?: string
}

const NewsCard = ({variant, img}:Props) => {
    console.log(variant)
    return (
        <div className="max-w-[350px] rounded shadow-lg relative">
            <img
                className="w-full"
                src={img}
                alt="News"
            />

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
