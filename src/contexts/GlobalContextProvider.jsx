
import React, { useState, useContext, createContext, useEffect } from 'react'
// import axiosInstance from '../helpers/axiosInstance'


const apiContext = createContext()


export const useGlobalContext = () => useContext(apiContext)


export default function GlobalContextProvider({children}) {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState(null)
  const [openModal, setOpenModal] = useState(null)
    
  useEffect(() => {
    setLoading(false)
    setError(null)
  }, [])


  return (
    <apiContext.Provider value={{ loading, error, profile, openModal, setProfile, setOpenModal }}>
      {children}
    </apiContext.Provider>
  )
}
