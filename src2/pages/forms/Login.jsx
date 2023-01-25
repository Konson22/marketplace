import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import {FormLoader} from '../../components/Loaders'
import axiosInstance from '../../helpers/axiosInstance'
import { useState } from "react"
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from "./InputField"



export default function Login(){

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { setShowForm, setProfile } = useGlobalContext()

    const validate = Yup.object({
        email:Yup.string().required('E-mail Required'),
        password:Yup.string().required('Password Required'),
    })


    const handleSubmit = async values => {
        setIsLoading(true)
        try{
            const response = await axiosInstance.post('/auth/login', values).then(res => res)
            if(response.status === 200){
                setShowForm(null)
                setProfile(response.data)
            }
        }catch(error){
            console.dir(error?.response?.data)
            setMessage(error?.response?.data)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <div className="login-form">
            {isLoading && <FormLoader />}
            <Formik
                initialValues={{ email:'', password:'' }}
                validationSchema={validate}
                onSubmit={values => handleSubmit(values)}
            >
                <div className='form-container'>
                    <div className="text-center mb-4">
                        <h5 className='mb-3'>Login with</h5>
                        <div className="d-flex justify-content-center">
                            <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-danger'>
                                <FaGoogle />
                            </span>
                            <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-info'>
                                <FaFacebook />
                            </span>
                            <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-info'>
                                <FaTwitter />
                            </span>
                        </div>
                    </div>
                    <div className="text-center mb-2">
                        <h5 className='m-0'>Login with E-mail</h5>
                    </div>
                    {message && <div className='p-1 text-danger'>{message}</div>}
                    <Form>
                        {registerFields.map(field => (
                            <InputField name={field.name} type={field.type} label={field.label} />
                        ))}
                        <div className="mt-3">
                            <button className='btn btn-primary w-100' type='submit'>Login</button>
                        </div>
                    </Form>
                    <div className="text-center mt-3">
                        don't have an account <span onClick={() => setShowForm('register')}>Register</span>
                    </div>
                </div>
            </Formik>
        </div>
    )
}

const registerFields = [
    {name:'email', type:'text', placeholder:'E-mail', label:'E-mail'},
    {name:'password', type:'password', placeholder:'enter password', label:'password'},
]