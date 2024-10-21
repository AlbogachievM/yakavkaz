import './App.css'
import {Header} from "@/components/header/header.tsx";
import {TopNews} from "@/components/topNews/topNews.tsx";
import {Container} from "@/components/container/container.tsx";
import NewsCard from './components/newsCard/NewsCard';
import {NewsList} from "@/components/newsList/NewsList.tsx";
import {NewsSlider} from "@/components/newsSlider/NewsSlider.tsx";
import {Footer} from './components/footer/footer';
import img1 from '/src/assets/news/11.jpg'
import img2 from '/src/assets/news/12.jpg'
import img3 from '/src/assets/news/13.jpg'
import img4 from '/src/assets/news/14.jpg'
import img5 from '/src/assets/news/15.jpg'
import img6 from '/src/assets/news/16.jpg'
import {NewsLine} from "@/components/newsLine/NewsLine.tsx";
import {FreshNews} from "@/components/freshNews/FreshNews.tsx";
import {array} from "@/components/freshNews/array.ts";

function App() {

    return (
        <div>
            <Header className={'pt-4'}/>
            <main className={'pt-4'}>
                <TopNews/>
                <Container>
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
                                    <NewsCard img={img1}/>
                                    <NewsCard img={img2}/>
                                    <NewsCard img={img3}/>
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
                                <NewsCard img={img4}/>
                                <NewsCard img={img5}/>
                                <NewsCard img={img6}/>
                            </div>
                        </section>
                        <NewsLine/>
                    </div>
                    <section className={'flex items-start gap-4 flex-wrap mt-10 h-[65vh]'}>
                        <FreshNews array={array}/>
                    </section>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default App
