import { useState } from "react"
import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import {FormLoader} from '../../components/Loaders'
import axiosInstance from '../../helpers/axiosInstance'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from "./InputField"


export default function Register(){

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { setShowForm, setProfile } = useGlobalContext()

    const validate = Yup.object({
        name:Yup.string().required('Name Required'),
        email:Yup.string().required('E-mail Required'),
        password:Yup.string().required('Password Required'),
        comfirm_password:Yup.string().required('Password Required'),
    })
    
    const handleSubmit = async values => {
        setIsLoading(true)
        try{
            const response = await axiosInstance.post('/users/register', values).then(res => res)
            if(response.status === 201){
                setShowForm(null)
                setProfile(response.data)
            }
        }catch(error){
            setMessage(error?.response?.data)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <div className="login-form">
            {isLoading && <FormLoader />}
            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password:'',
                    comfirm_password:''
                }}
                validationSchema={validate}
                onSubmit={values => handleSubmit(values)}
            >
                <div className='form-container'>
                    <div className="text-center mb-4 text-white">
                        <h1>Register</h1>
                        {isLoading && "Loading..."}
                        {message && <div className='p-2 has-error text-danger'>{message}</div>}
                    </div>
                    <Form>
                        {registerFields.map(field => (
                            <InputField name={field.name} type={field.type} label={field.label} />
                        ))}
                        <div className="mt-3">
                            <button className='btn btn-primary w-100' type='submit'>Login</button>
                        </div>
                    </Form>
                    <div className="text-center mt-3">
                        already have an account <span onClick={() => setShowForm('login')}>Login</span>
                    </div>
                </div>
            </Formik>
        </div>
    )
}


const registerFields = [
    {name:'name', type:'text', placeholder:'Name', label:'Name'},
    {name:'email', type:'text', placeholder:'E-mail', label:'E-mail'},
    {name:'password', type:'password', placeholder:'Re-Enter', label:'Create password'},
    {name:'comfirm_password', type:'password', placeholder:'repeate password', label:'repeate password'},
]