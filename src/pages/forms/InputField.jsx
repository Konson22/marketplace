import { ErrorMessage, useField } from 'formik'


export default function InputField({label, key='', ...props}){

    const [field, meta] = useField(props)

    return(
        <div className="bg-gray-100" key={key}>
            <label htmlFor={label}>{label}</label>
            <input
                className={`focus:border-none focus:outline-none bg-transparent w-full border-none ${(meta.touched && meta.error) ? '':''}`}
                {...field}
                placeholder={field.placeholder}
                {...props}
            />
            <ErrorMessage component='div' name={field.name} className="error-card small text-danger mt-1" />
        </div>
    )
}