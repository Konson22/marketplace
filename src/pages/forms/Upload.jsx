import { useState } from "react"
import { FaRegImages, FaTimes } from "react-icons/fa"
import { categories2 } from "../../assets/data"
import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import InputField from "./InputField"
import axios from 'axios'
import { useItems } from "../../contexts/ItemsContextProvider"


export default function Upload() {

    const { setOpenModal } = useGlobalContext()

    const { setItems } = useItems()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0)


    const handleSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(ev.target)
            const result = await axios.post('http://localhost:3001/items/upload', formData, postOptions).then(res => res)
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


  return (
    <div className='md:w-[40%] w-full md:p-8 p-4 m-4 rounded bg-white relative' onClick={e => e.stopPropagation()}>
        {loading && <FormLoader uploadPercentage={uploadPercentage} />}
        <div className="absolute right-4 top-4" onClick={() => setOpenModal(null)}>
            <FaTimes className='' />
        </div>
        <div className="myb4">
            <h1 className="text-2xl font-bold">Upload your Item</h1>
            <MessagesCard text='Still under work!' type='bg-red-200' />
            {message && <MessagesCard text={message} type='bg-red-200' onClose={setMessage} />}
            {uploadPercentage === 100 && 
                <MessagesCard text='Uploaded successfully!' type='bg-green-200' onClose={setUploadPercentage} />
            }
        </div>
        <form className='mt-4' onSubmit={handleSubmit}>
            {fields.map(field => (
                <InputField placeholder={field.placeholder} label={field.label} name={field.name} type={field.type} options={field.options} />
            ))}
             <label className='flex items-center cursor-pointer' htmlFor="image" >
                <span className="px-4 py-2 rounded bg-green-600 text-white mr-3"><FaRegImages className='text-2xl' /></span>
                Choose
            </label>
            <input className='hidden' name='image' id='image' type="file" />
            <div className="flex mt-6">
                <button className="px-3 py-2 rounded border-none bg-green-700 mr-3 text-white" type='submit'>Submit</button>
                <button 
                    className="px-3 py-2 rounded border-none bg-red-700 text-white" 
                    type='button'
                    onClick={() => setOpenModal(null)}
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
  )
}

function FormLoader({uploadPercentage}){
    return(
        <div className='light-black-bg h-[100vh] w-full fixed inset-0 z-50 flex items-center justify-center'>
            <div className="md:w-[35%] w-full md:p-8 p-4 rounded md:m-0 mx-4 bg-white">
                <h2 className="text-xl text-center">loading...</h2>
                <div className="md:h-8 h-6 w-full my-4 bg-gray-200 border md:rounded-[1rem] rounded-[0.75rem] overflow-hidden">
                    <div className={`h-full w-[${uploadPercentage}%] bg-blue-300 md:rounded-[1rem] rounded-[0.75rem]`}></div>
                </div>
                <h2 className="text-xl text-center font-bold">{uploadPercentage}%</h2>
            </div>
        </div>
    )
}


function MessagesCard({text, type, onClose}){
    return(
        <div className={`flex items-center justify-between px-4 py-2 ${type} mt-4`}>
            {text}
            {onClose && 
                <span className='cursor-pointer' onClick={() => onClose ? onClose(0) : {}}>
                    <FaTimes className='text-sm' />
                </span>
            }
        </div>
    )
}

const fields = [
    { name:'title', type:'text', placeholder:'Title...', label:'Title', colspan:'col-span-1' },
    { name:'category', type:'select', label:'Category', options:categories2, colspan:'col-span-2' },
    { name:'price', type:'text', placeholder:'Set price', label:'Price', colspan:'col-span-2' },
    { name:'discription', type:'textarea', placeholder:'discribe your product...', label:'Discription' },
]

/*
import { useState } from 'react'
import { categories } from '../../assets/data'
import { FaRegImages } from 'react-icons/fa'
import { useItems } from '../../contexts/ItemsContextProvider'
import axiosInstance from '../../helpers/axiosInstance'
import './css/forms.css'



export default function Upload(){

    

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
                    <div className='input-container col-md-4'>
                        <label htmlFor="price">Set Price</label>
                        <input name='price' type="text" placeholder='Price' />
                    </div>
                    <div className='input-container col-md-4'>
                        <label htmlFor="currency">Currency</label>
                        <select name='currency'>
                            <option value='USD'>USD</option>
                            <option value='SSP'>SSP</option>
                            <option value='UGX'>UGX</option>
                        </select>
                    </div>
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
*/