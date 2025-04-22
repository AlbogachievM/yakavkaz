import img from '../assets/family/1.jpg'
import img2 from '../assets/family/2.jpg'
import img3 from '../assets/family/3.jpg'
export const FamilyRest = () => {
    return (
        <div className="min-h-screen ">
            <div className={'mb-5'}>
                <nav className={'flex items-center justify-center gap-2'}>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/food/stores">Рестораны</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/tourism/childrens-entertainment">Развлечения</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/familyRest">Семейный отдых</a>
                    <a className={' hover:bg-red-500 text-black hover:text-white underline hover:no-underline p-1 rounded-[2px]'}
                       href="/tourism/places-to-go">Афиша</a>
                </nav>
            </div>
            {/* Заголовок и вступительное описание */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Семейный отдых</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Откройте для себя идеальные направления для семейного отдыха, где каждый член семьи найдет что-то по
                    душе.
                </p>
            </header>

            {/* Популярные направления */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Популярные направления</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Карточка направления */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={img}
                            alt="Пляжный отдых"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Пляжный отдых</h3>
                            <p className="text-gray-600 mt-2">
                                Расслабляйтесь на песчаных пляжах и наслаждайтесь морем с близкими.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={img2}
                            alt="Горные приключения"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Горные приключения</h3>
                            <p className="text-gray-600 mt-2">
                                Исследуйте живописные горные маршруты и наслаждайтесь природой.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={img3}
                            alt="Прогулки по лесу"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Прогулки по лесу</h3>
                            <p className="text-gray-600 mt-2">
                                Откройте для себя природу и свежий воздух на лесных тропах.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Раздел активностей */}
            <section className="max-w-6xl mx-auto px-4 mt-16">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Семейные активности</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Пикники на природе</h3>
                            <p className="text-gray-600 mt-2">
                                Организуйте пикник и наслаждайтесь природой вместе с семьей.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Спортивные мероприятия</h3>
                            <p className="text-gray-600 mt-2">
                                Участвуйте в спортивных мероприятиях, от футбола до велопоходов.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">Посещение парков аттракционов</h3>
                            <p className="text-gray-600 mt-2">
                                Веселитесь в парках аттракционов и создайте незабываемые моменты.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
