import products from '../assets/products.json'
import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../helpers/axiosInstance'


const apiContext = createContext()


export const useItems = () => useContext(apiContext)


export default function ItemsContextProvider({children}) {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState(products)
    
  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchItems(){
      setLoading(true)
      try{
        // const results = await axios('https://dummyjson.com/products').then(res => res)
        const results = await axiosInstance('http://localhost:3002/items').then(res => res)
        isMuted && setItems(results.data)
        // isMuted && setItems(results.data.products)
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setError(error?.response?.data)
        }
        setError('Error Occures!')
      }finally{
        setLoading(false)
      }
    }
    fetchItems()

    return () => {
        controller.abort()
        isMuted = false
    }
  }, [])


  const values = {
    loading,
    error,
    items,
    setItems
  }

  return (
    <apiContext.Provider value={values}>
      {children}
    </apiContext.Provider>
  )
}
