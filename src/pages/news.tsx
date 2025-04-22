import {TopNews} from "@/components/topNews/topNews.tsx";
import {NewsSlider} from "@/components/newsSlider/NewsSlider.tsx";
import {NewsCard} from "@/components/newsCard/NewsCard.tsx";
import {newsCardArray} from "@/components/newsCard/newsCardArray.ts";
import {NewsList} from "@/components/newsList/NewsList.tsx";
import {newsCardArray2} from "@/components/newsCard/newsCardArray2.ts";
import {NewsLine} from "@/components/newsLine/NewsLine.tsx";
import {FreshNews} from "@/components/freshNews/FreshNews.tsx";
import {array} from "@/components/freshNews/array.ts";

export const News = () => {
    return (
        <>
            <TopNews/>
            <div className={'flex items-start justify-between mt-10'}>
                <div>
                    <section className={' w-full'}>
                        <div className="flex items-center font-bold text-2xl mb-4">
                            <h1 className="mr-2">Актуально</h1>
                        </div>
                        <div className={'flex items-center gap-4 flex-wrap'}>
                            <NewsSlider/>
                        </div>
                    </section>
                    <section className={'mt-10 w-full'}>
                        <div className="flex items-center font-bold text-2xl mb-4">
                            <h1 className="mr-2">Дагестан</h1>
                        </div>
                        <div className={'flex items-center gap-4 flex-wrap'}>
                            <NewsCard newsArray={newsCardArray}/>
                        </div>
                    </section>
                </div>
                <NewsList/>
            </div>
            <div className={'flex items-start'}>
                <section className={'mt-10 w-full'}>
                    <div className="flex items-center font-bold text-2xl mb-4">
                        <h1 className="mr-2">Другие регионы</h1>
                    </div>
                    <div className={'flex items-center gap-4 flex-wrap'}>
                        <NewsCard newsArray={newsCardArray2}/>
                    </div>
                </section>
                <NewsLine/>
            </div>
            <section className={'flex items-start gap-4 flex-wrap mt-10 h-[70vh]'}>
                <FreshNews array={array}/>
            </section>
        </>
    );
};

