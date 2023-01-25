import axios from 'axios'


export const getItems = async () => {
    try {
        return await axios('http://localhost:3001/items').then(res => res)
    } catch (error) {
        console.log(error)
    }
}