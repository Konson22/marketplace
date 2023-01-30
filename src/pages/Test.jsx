import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from '../store/Store'



export function MyApp() {

    const { data } = productsApi.useGetAllQuery()
    console.log(data)
  return (
    <div>Test query</div>
  )
}


export default function Test() {
  return (
    <ApiProvider api={productsApi}>
        <MyApp />
    </ApiProvider>
  )
}
