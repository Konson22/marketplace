import { Link } from 'react-router-dom'
// import { FaArrowRight } from 'react-icons/fa'
import { LazyImage } from '../helpers/LazyImage'

export default function Items({items, col=''}){

    return(
        <div className={`items-wraper ${col}`}>
            {items.length >= 1 ? items.map(item => (
                <div className='item-card border' key={item._id}>
                    <div className="item-card__image">
                        <LazyImage src={item.thumbnail} alt='' />
                        {/* <LazyImage src={process.env.PUBLIC_URL+'/images/cars.jpg'} alt='' /> */}
                    </div>
                    <div className="item-card__text">
                        <h5 className='elips-text'>{item.title}</h5>
                        <h3>{item.price}$</h3>
                        <div className="item-card-footer d-flex align-items-center justify-content-between">
                            <Link className="btn item-card-btn rounded-0" to={`/product/detail/${item._id}`}>
                                detail <span className="sm-hid"> & contacts</span>
                                {/* <FaArrowRight className='mx-2' /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            )) : 
            <div className="p-2 alert-danger">
                no items found
            </div>
            }
        </div>
    )
}