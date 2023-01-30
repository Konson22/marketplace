import { Link } from 'react-router-dom'
import { LazyImage } from './LazyImage'


export default function Items({items, bg='bg-white'}) {

  return (
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
      {items.map(item => (
        <Link className={`${bg} rounded cursor-pointer`} key={item._id} to={`/product/detail/${item._id}`}>
          <div className="md:h-[11rem] h-[8rem]">
            <LazyImage src={item.thumbnail} alt='' />
            {/* <LazyImage src={process.env.PUBLIC_URL+'/images/laptop.jpg'} alt='' /> */}
          </div>
          <div className="p-2 pb-3">
            <h5 className='text-base md:font-semibold'>{item.title}</h5>
            <h5 className='text-base truncate block'>{item.description}</h5>
            <div className="flex items-center justify-between mt-2">
              <h4 className="text-xl md:font-bold font-semibold">{item.price}$</h4>
              <span className="bg-red-800 text-white md:text-base text-[.78rem] rounded px-3 py-1">
                Detail
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

