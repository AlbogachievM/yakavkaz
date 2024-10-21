import './App.css'
import {Header} from "@/components/header/header.tsx";
import {TopNews} from "@/components/topNews/topNews.tsx";
import {Container} from "@/components/container/container.tsx";
import NewsCard from './components/newsCard/NewsCard';
import {NewsList} from "@/components/newsList/NewsList.tsx";
import {NewsSlider} from "@/components/newsSlider/NewsSlider.tsx";
import { Footer } from './components/footer/footer';

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
                                        <NewsSlider />
                                    </div>
                                </section>
                                <section className={'mt-10 w-full'}>
                                    <div className="flex items-center font-bold text-2xl mb-4">
                                        <h1 className="mr-2">Дагестан</h1>
                                    </div>
                                    <div className={'flex items-center gap-4 flex-wrap'}>
                                        <NewsCard/>
                                        <NewsCard/>
                                        <NewsCard/>
                                    </div>
                                </section>
                            </div>
                            <NewsList/>
                        </div>
                        <section className={'mt-10 w-full'}>
                            <div className="flex items-center font-bold text-2xl mb-4">
                                <h1 className="mr-2">Другие регионы</h1>
                            </div>
                            <div className={'flex items-center gap-4 flex-wrap'}>
                                <NewsCard/>
                                <NewsCard/>
                                <NewsCard/>
                            </div>
                        </section>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App
