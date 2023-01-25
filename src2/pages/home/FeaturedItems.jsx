import { categories } from "../../assets/data";
import { Link } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import Carousel from 'react-elastic-carousel'
// import { LazyImage } from '../../helpers/LazyImage'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


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


export default function FeaturedItems() {

    const { loading, errors, items } = useItems()

    return (
        <div className='featured-tems home-section'>
            <div className='section-title sub-nav-wraper d-flex align-items-center justify-content-between'>
                <h2>Featured Items</h2>
                <nav className="sub-nav d-flex align-items-center sm-hide">
                    {categories.map(category => (
                        <Link className='sun-nav-link' to={`/products/${category.url}`} key={category.url}>{category.text}</Link>
                    ))}
                </nav>
                <div className="lg-hide">
                    <div className="d-flex align-items-center">
                        <FaChevronLeft className='chevron-icon' />
                        <FaChevronRight className='chevron-icon' />
                    </div>
                </div>
            </div>
            <div className='section-body'>
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
                                        <img src={item.thumbnail} alt='' />
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
                    {(!loading && items.length >= 1 ) && <Items items={items.slice(0, 8)} col='col5' /> }
                </div>
                <div className="text-center mt-4">
                    <Link className='btn item-card-btn' to='/products/all'>Explore More</Link>
                </div>
            </div>
        </div>
    )
}
