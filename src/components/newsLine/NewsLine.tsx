import img1 from '/src/assets/news/111.jpg'
import img2 from '/src/assets/news/112.jpg'
import img3 from '/src/assets/news/113.jpg'
import img4 from '/src/assets/news/114.jpg'

const newsArray = [
    {
        id: 1,
        title: "Cuban power grid collapses for fourth time as hurricane arrives",
        img: img1
    },
    {
        id: 2,
        title: "Surveillance camera captures moment helicopter crashes into communications tower",
        img: img2
    },
    {
        id: 3,
        title: "AI and robots take center stage at ‘world’s largest tech event’",
        img: img3
    }, {
        id: 6,
        title: "AI and robots take center stage at ‘world’s largest tech event’",
        img: img3
    },
    {
        id: 4,
        title: "Psychologist behind ‘Stanford Prison Experiment’ dies",
        img: img4
    }
];


export const NewsLine = () => {
    return (
        <div className={'flex flex-col gap-2 w-[400px]'}>
            {newsArray.map((el, index)=>{
                return (<div key={el.id} className={`flex items-start gap-2 pb-2 ${index !== newsArray.length - 1 ? 'border-b' : ''}`}>
                        <img src={el.img} alt={el.title} className={'w-[150px] border rounded-lg'}/>
                        <div >
                            <a href={'#'} className={'hover:underline'}>{el.title}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};


