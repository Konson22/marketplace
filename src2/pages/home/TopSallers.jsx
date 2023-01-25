import { FaChevronLeft, FaChevronRight, FaTag } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
    {
      width:0,
      itemsToShow:2,
      itemsToScroll:1
    },
    {
      width:500,
      itemsToShow:4,
      itemsToScroll:1
    },
]


export default function TopSallers(){

    return(
        <div className="top-saler-content">
            <div className="section-title d-flex align-items-center justify-content-between">
                <h1>Top Sallers</h1>
                <div className="d-flex align-items-center">
                    <FaChevronLeft className='chevron-icon' />
                    <FaChevronRight className='chevron-icon' />
                </div>
            </div>
            <div className="section-body">
                <Carousel 
                    breakPoints={breakPoints} 
                    initialFirstItem={0}
                    className='carousel-wraper'
                >
                    {topSallersData.map(saler => (
                        <div className='saler-card' key={saler._id}>
                            <div className="logo rounded-circl">
                                <img className="logo rounded-circl" src={saler.logo} alt='' />
                            </div>
                            <div className="">
                                <h5 className='m-0'>{saler.name}</h5>
                                <p className='elips-text m-0'>{saler.about}</p>
                                <span className='d-flex align-items-center'><FaTag /> {saler.categories[0]}</span>
                                <span>Stock 210+</span>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}


const topSallersData = [
    {
        _id:'1',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/cars.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'2',
        name:'Marlin Salon',
        logo:process.env.PUBLIC_URL+'/images/fashion.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Beauty'
        ]
    },
    {
        _id:'1e3',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/jewelary.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'24d',
        name:'Amjad Store',
        logo:process.env.PUBLIC_URL+'/images/laptop.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Auto & spare'
        ]
    },
    {
        _id:'1',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/cars.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'2',
        name:'Marlin Salon',
        logo:process.env.PUBLIC_URL+'/images/fashion.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Beauty'
        ]
    },
    {
        _id:'1e3',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/jewelary.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'24d',
        name:'Amjad Store',
        logo:process.env.PUBLIC_URL+'/images/laptop.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Auto & spare'
        ]
    },
]