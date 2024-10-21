import {useEffect} from 'react';

const CurrencyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://s.fx-w.io/widgets/exchange-rates/latest.js?ru";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: `<fxwidget-er  inverse="false" amount="100" decimals="2" large="false" shadow="true" symbol="true" flag="true" changes="true" grouping="true" border="false" main-curr="USD" sel-curr="BTC,EUR,USD,RUB" background-color="#ffffff" border-radius="0.25" lang="ru"></fxwidget-er>`,
                }}
            />
        </div>
    );
};

export default CurrencyWidget;
