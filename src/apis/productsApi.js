import axios from 'axios'

export function ProductsApi(){
    return axios('https://dummyjson.com/products').then(res => res.data)
}