
export const Education = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Заголовок страницы */}
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">Образование</h1>

            {/* Описание страницы */}
            <p className="text-lg text-gray-600 max-w-[1100px] mx-auto mb-12 text-center">
                Здесь вы найдете различные образовательные возможности для детей и взрослых. Узнайте о ближайших учебных
                заведениях, секциях и кружках для детей, а также о курсах и тренингах для повышения квалификации
                взрослых. Образование и развитие – важная часть жизни, и здесь собрано всё, что поможет вам в этом пути.
            </p>

            {/* Категории */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Учебные заведения */}
                <div
                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Учебные заведения</h2>
                    <p className="text-gray-600 mb-6">
                        Здесь вы найдете ближайшие школы, университеты и другие образовательные учреждения.
                    </p>
                    <button className="text-blue-600 font-semibold hover:underline">Подробнее</button>
                </div>

                {/* Кружки и секции для детей */}
                <div
                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Кружки и секции для детей</h2>
                    <p className="text-gray-600 mb-6">
                        Узнайте о доступных секциях и кружках для детей, которые помогут им развивать свои таланты и
                        интересы.
                    </p>
                    <button className="text-blue-600 font-semibold hover:underline">Подробнее</button>
                </div>

                {/* Курсы и тренинги для взрослых */}
                <div
                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Курсы и тренинги для взрослых</h2>
                    <p className="text-gray-600 mb-6">
                        Различные курсы и тренинги, чтобы повысить квалификацию и улучшить навыки для взрослой
                        аудитории.
                    </p>
                    <button className="text-blue-600 font-semibold hover:underline">Подробнее</button>
                </div>

                {/* Дополнительный блок - Например, Поддержка и вопросы */}
                <div
                    className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Поддержка и вопросы</h2>
                    <p className="text-gray-600 mb-6">
                        Если у вас есть вопросы или нужна помощь, свяжитесь с нами для дополнительной информации.
                    </p>
                    <button className="text-blue-600 font-semibold hover:underline">Подробнее</button>
                </div>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-16 text-center">
                <p className="text-gray-700 text-lg">
                    Наши образовательные ресурсы помогут вам найти возможности для роста и развития.
                </p>
            </div>
        </div>
    );
};

