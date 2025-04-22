import { useEffect } from 'react';

const WeatherWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://app3.weatherwidget.org/js/?id=ww_b7a86ad9404e1"; // Заменен ID на новый
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <article className={'w-full'}>  {/* Можно изменить ширину виджета при необходимости */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `
          <div id="ww_b7a86ad9404e1" v="1.3" loc="id" a='{"t":"responsive","lang":"ru","ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#000000","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"5","el_nme":3,"cl_odd":"#FFFFFF17"}'>
            <a href="https://weatherwidget.org/" id="ww_b7a86ad9404e1_u" target="_blank">Free weather widget</a>
          </div>
        `,
                }}
            />
        </article>
    );
};

export default WeatherWidget;
