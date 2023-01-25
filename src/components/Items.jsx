import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { LazyImage } from './LazyImage'


export default function Items({items, bg='bg-gray-100'}) {

  return (
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
      {items.map(item => <ItemCard item={item} id={item._id} bg={bg} />)}
    </div>
  )
}

function ItemCard({item, id, bg}){

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return(
    <div className={`${bg} rounded cursor-pointer`} key={id} to={`/product/detail/${item._id}`} onClick={toggleOpen}>
      {open && <ItemDetail item={item} toggleOpen={toggleOpen} /> }
        <div className="md:h-[11rem] h-[8rem]">
          <LazyImage src={item.thumbnail} alt='' />
          {/* <LazyImage src={process.env.PUBLIC_URL+'/images/laptop.jpg'} alt='' /> */}
        </div>
        <div className="p-2 pb-3">
          <h5 className='text-base md:font-semibold'>{item.title}</h5>
          <div className="flex items-center justify-between mt-2">
          <h4 className="text-xl md:font-bold font-semibold">{item.price}$</h4>
          <span className="bg-red-800 text-white md:text-base text-[.78rem] rounded px-3 py-1">
            Detail
          </span>
        </div>
      </div>
    </div>
  )
}


function ItemDetail({item, toggleOpen}){
  return(
    <div className="popup-modal cursor-default h-[100vh] w-full flex items-center justify-center fixed inset-0 bg-blac backdrop-blur-sm z-index-10 p-3" onClick={toggleOpen}>
      <div className="md:w-[55%] w-full md:flex bg-white rounded relative p-4" onClick={e => e.stopPropagation()}>
        <div 
          className="h-8 w-8 flex items-center justify-center absolute top-0 right-0 rounded-full border popup-modal cursor-pointer" 
          onClick={toggleOpen}
        >
          <FaTimes className="text-lg md:text-xl" />
        </div>
        <div className="md:h-[20rem] h-[13rem] flex-1">
          <img src={item.thumbnail} alt='' />
          {/* <LazyImage src={process.env.PUBLIC_URL+'/images/laptop.jpg'} alt='' /> */}
        </div>
        <div className="md:px-4 flex-1 mt-3 md:mt-0">
          <h2 className="text-2xl mb-2">{item.title}</h2>
          <p className="text-base mb-2">
            Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
            those designations appear in this book, and the publisher was aware of
          </p>
          <h1 className="tex">Price: <span className="text-3xl">{item.price}</span> $</h1>
          <div className="mt-3">
            <button className="px-3 py-1 bg-red-800 text-white rounded">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}