import { useState } from 'react'
import { categories } from '../../assets/data'
import { FaRegImages } from 'react-icons/fa'
import { useItems } from '../../contexts/ItemsContextProvider'
import axiosInstance from '../../helpers/axiosInstance'
import './css/forms.css'



export default function Upload(){

    const { setItems } = useItems()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0)


    const handleSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(ev.target)
            const result = await axiosInstance.post('/items/upload', formData, postOptions).then(res => res)
            setItems(prevItems => {
                return [...prevItems, result.data]
            })
        } catch (error) {
            setMessage(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }
    
    //AXIOS HEADER OPTIONS
  const postOptions = {
    widthCredentials:true, 
    withCredentials:'include',
    onUploadProgress:percentageLoaded => {
      const {total, loaded} = percentageLoaded
      const percent = Math.floor((loaded / total) * 100)
      percent <= 100 && setUploadPercentage(percent)
    }
  }


  //RESET UPLOAD PERCENTAGE
  uploadPercentage === 100 && setTimeout(() => setUploadPercentage(0), 4000)


    const handleCategory = category => {
        setSelectedCategory(category)
    }

    const subcategories = categories.find(c => c.url === selectedCategory)

    return(
        <div className="upload-form">
            {loading && <UploadLoader percentage={uploadPercentage} />}
            <div className="text-center mb-3">
                <h4>Upload you product</h4>
                {message && <div className='p-1 bg-danger mt-2'>{message}</div>}
                {uploadPercentage === 0 && <div className='upload-complete d-flex align-items-center justify-content-center rounded-circle'></div>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className='input-container col-md-8'>
                        <label htmlFor="title">Title</label>
                        <input name='title' type="text" placeholder='Title/Name/Model/' />
                    </div>
                    <div className='input-container col-md-4'>
                        <label>Select category</label>
                        <select name='category' onChange={e => handleCategory(e.target.value)}>
                            {categories?.map(category => (
                                <option value={category.url} key={category.url}>
                                    {category.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* subcategry */}
                    <div className='input-container col-md-4'>
                        <label>Sub category</label>
                        <select name='sub_category'>
                            {(subcategories && subcategories.subcategory) ? subcategories.subcategory.map(opt => (
                                <option value={opt} key={opt}>{opt}</option>
                            )):
                                <option value='N/A'>N/A</option>
                            }
                        </select>
                    </div>
                    {/* Set price */}
                    <div className='input-container col-md-4'>
                        <label htmlFor="price">Set Price</label>
                        <input name='price' type="text" placeholder='Price' />
                    </div>
                    {/* Currency */}
                    <div className='input-container col-md-4'>
                        <label htmlFor="currency">Currency</label>
                        <select name='currency'>
                            <option value='USD'>USD</option>
                            <option value='SSP'>SSP</option>
                            <option value='UGX'>UGX</option>
                        </select>
                    </div>
                    {/*  description */}
                    <div className='input-container'>
                        <label htmlFor="description">Description</label>
                        <textarea name='description' placeholder='Description...' ></textarea>
                    </div>
                    <div className='input-container file-input- text-white'>
                        <label className='file-button btn' htmlFor="image" >
                        <FaRegImages className='image-icon' /> Choose
                        </label>
                        <input id='image' type='file' name='image' />
                    </div>
                </div>
                <div className="">
                    <button className="btn my-button" type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}


function UploadLoader({percentage}){
    return(
        <div className='upload-loader-wraper'>
            <div className='upload-loader-content text-center'>
                <span className='text'>Loading...</span>
                <div className="loader">
                    <div className="fil" style={{width:`${percentage}%`}}></div>
                </div>
                <span className='count'>{percentage}%</span>
            </div>
        </div>
    )
}