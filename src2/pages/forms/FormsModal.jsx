import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import Upload  from './Upload'
import Login  from './Login'
import Register  from './Register'

export default function FormsModal() {

    const { showForm, setShowForm } = useGlobalContext()

    return (
        <div className='form-modal d-flex align-items-center justify-content-center'>
            <div className={`modal-content popup-form ${showForm}`}>
                <span className='close-button d-flex align-items-center justify-content-center rounded-circle' onClick={() => setShowForm(null)}>x</span>
                { showForm === 'upload' && <Upload /> }
                { showForm === 'login' && <Login /> }
                { showForm === 'register' && <Register /> }
            </div>
        </div>
    )
}
