import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Items from '../../components/Items'
import { useItems } from '../../contexts/ItemsContextProvider'

export default function ProductDetail() {

    const { productId } = useParams()
    const { loading, items } = useItems()

    const selectedItem = items.filter(item => item._id === parseInt(productId))[0]
    

  return (
    <div className="md:px-[6%] px-2 mt-3">
        <div className="bg-white mb-4">
            {loading && 'Loading...'}
            {selectedItem && 
                <div className="md:flex md:p-4 md:mr-[10%]">
                    <div className="md:h-[400px] md:w-[55%]">
                        <img src={selectedItem.thumbnail} alt='' />
                        {/* <img src={process.env.PUBLIC_URL+'/images/laptop.jpg'} alt='' /> */}
                    </div>
                    <div className="flex-1 md:px-6 px-4 md:py-0 py-4">
                        <h2 className="text-2xl md:font-bold mb-2">{selectedItem.title}</h2>
                        <p className='text-base'>{selectedItem.description}</p>
                        <h2 className="flex items-end text-lg mt-4">
                            Price: 
                            <span className="text-2xl md:font-bold ml-3">{selectedItem.price}$</span>
                        </h2>
                        <div className="mt-6">
                            <h3 className="text-xl">Address & Contacts</h3>
                            <ul>
                                <li className="flex items-center mt-3">
                                    <FaMapMarkerAlt className='text-base mr-3' />
                                    <span>Hai Malakal, neat bas petrolium.</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <FaPhoneAlt className='text-base mr-3' />
                                    <span>0920079070</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <FaWhatsapp className='text-base mr-3' />
                                    <span>0920079070</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <FiMail className='text-base mr-3' />
                                    <span>info@connect4business.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
        <div className="md:px-4 py-3">
            <h1 className="text-xl">Related items</h1>
            <div className="">
                {(!loading && items.length >= 1) ? <Items items={items} /> : 'No products found!.' }
            </div>
        </div>
    </div>
  )
}
