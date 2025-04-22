
type NewsProps = {
    img: string;
    date: string;
    title: string;
    text: string;
};

type Props = {
    newsArray: NewsProps[];
};

export const NewsCard = ({ newsArray }: Props) => {
    return (
        <div className="flex flex-wrap gap-4">
            {newsArray.map((news, index) => (
                <div key={index} className="max-w-[350px] rounded shadow-lg relative">
                    <img
                        className="w-full h-48 object-cover"
                        src={news.img}
                        alt="News"
                    />

                    <div className="px-6 py-4">
                        <p className="text-gray-600 text-sm">
                            <span className="font-bold">{news.date}</span>
                        </p>
                        <h3 className="font-bold text-xl mb-2">
                            {news.title}
                        </h3>

                        <p className="text-gray-700 text-base">
                            {news.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
