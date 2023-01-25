import { Link } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import Carousel from 'react-elastic-carousel'
import { LazyImage } from '../../helpers/LazyImage'


const breakPoints = [
    {
      width:0,
      itemsToShow:2,
      itemsToScroll:2
    },
    {
      width:500,
      itemsToShow:3,
      itemsToScroll:1
    },
]


export default function FeaturedProducts() {

    const { loading, errors, items } = useItems()

    return (
        <div className='featured-products home-section'>
            <div className="section-title d-flex align-items-center justify-content-between">
                <h1 className='p-0 m-0'>Featured Items</h1>
                <div>view all</div>
            </div>
            <div className="section-body">
                <div className="content-body item-slider-content lg-hide">
                    {loading && 'Loading...'}
                    {(!loading && errors) && 'error occures!'}
                    {(!loading && items.length >= 1 ) && 
                        <Carousel 
                            breakPoints={breakPoints} 
                            initialFirstItem={0}
                            className='carousel-wraper d-flex'
                        >
                            {items.map(item => (
                                <div className='item-slider-card' key={item._id}>
                                    <div className="image">
                                         <LazyImage src={item.thumbnail} alt='' />
                                       {/* <LazyImage src={process.env.PUBLIC_URL+'/images/cars.jpg'} alt='' /> */}
                                    </div>
                                    <div className="item-card__text p-2 pb-4">
                                        <h5 className='elips-text'>{item.title}</h5>
                                        <h3>{item.price}$</h3>
                                        <div className="item-card-footer d-flex align-items-center justify-content-between">
                                            <Link className="btn item-card-btn rounded-0" to={`/product/detail/${item._id}`}>
                                                detail <span className="sm-hid"> & contacts</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    }
                </div>
                <div className="content-body sm-hide">
                    {loading && 'Loading...'}
                    {(!loading && errors) && 'error occures!'}
                    {(!loading && items.length >= 1 ) && <Items items={items.slice(0, 8)} col='col4' /> }
                </div>
                <div className="text-center mt-4">
                    <Link className='btn item-card-btn' to='/products/all'>Explore More</Link>
                </div>
            </div>
        </div>
    )
}
