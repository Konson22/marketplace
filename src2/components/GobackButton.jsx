import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function GobackButton({path, text}){

    const navigate = useNavigate()

    return(
        <div className="back-button d-flex align-items-center">
            <FaArrowLeft className='icon' onClick={() => navigate(path)} />
            <span>{text}</span>
        </div>
    )
}