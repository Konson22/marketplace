/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { LazyImage } from '../../helpers/LazyImage'
import { useEffect, useState } from 'react'
import TopSallers from '../home/TopSallers'
import { useNavigate } from 'react-router-dom'
import './css/products.css'

export default function ProductDetail(){

    const { itemId } = useParams()
    const { loading, items } = useItems()
    const [ selectedItem, setSelectedItem ] = useState(null)
    const [ relatedItems, setRelatedItems ] = useState([])
    const navigate = useNavigate()
   
    useEffect(() => {
        if(!loading && items.length >= 1){
            const selected = items.filter(item => item._id.toString() === itemId)[0]
            const related = selected ? items.filter(item => item.category === selected.category && item._id.toString() !== itemId) : []
            selected && setSelectedItem(selected)
            related.length >= 1 && setRelatedItems(related)
        }
    }, [itemId])

    return(
        <div className="products-details-wraper d-flex">
            <div className="products-sidebar sm-hide">
                <TopSallers />
            </div>
            <div className="products-content details">
                {selectedItem && 
                    <div className="detail-container">
                        <span className="close-btn d-flex align-items-center justify-content-center rounded-circle" onClick={() => navigate(-1)} >x</span>
                        <div className="detail-image">
                            <LazyImage src={selectedItem.thumbnail} alt='' />
                            {/* <LazyImage src={process.env.PUBLIC_URL+'/images/fashion.jpg'} alt='' /> */}
                        </div>
                        <div className="detail-text">
                            <div className="flex-grow-1">
                                <h2>{selectedItem.title}</h2>
                                <p>{selectedItem.description}</p>
                                <h3>Price: {selectedItem.price}</h3>
                            </div>
                            <div className="">
                                <h5>Contacts & Address</h5>
                                <div className="d-flex align-items-center mb-2">
                                    <FaMapMarkerAlt />
                                    <span className="mx-2">Juba, Hai malakia near test</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaPhoneAlt />
                                    <span className="mx-2">+211920079070</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaWhatsapp />
                                    <span className="mx-2">+211920079070</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FiMail />
                                    <span className="mx-2">konsonak@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="related-items-container mt-5">
                    {relatedItems.length >= 1 && 
                        <div className='related-items-box'>
                            <h3 className='mb-2'>Related Items</h3>
                            <Items items={relatedItems} col='col4' />
                        </div>
                    }
                </div>
            </div>
        </div>
       
    
                            
                            
        //                     <div 
        //                         className="back-btn-sm mt-2"
        //                         onClick={() => navigate(`/products/${selectedItem.category}`)}
        //                     >
        //                         <FaArrowLeft />
        //                         <span className="mx-2">Go Back</span>
        //                     </div>
        //                     <div 
        //                         className="back-btn d-flex align-items-center justify-content-center rounded-circle sm-hide" 
        //                         onClick={() => navigate(`/products/${selectedItem.category}`)}
        //                     >
        //                         <FaTimes />
        //                     </div>
        //                 </div>
        //             </div>
        //         }
                
        //     </div>
        // </div>
    )
}