import { ErrorMessage, useField } from 'formik'


export default function InputField({label, key='', ...props}){

    const [field, meta] = useField(props)

    return(
        <div className="input-container" key={key}>
            <label htmlFor={label}>{label}</label>
            <input
                className={(meta.touched && meta.error) ? 'has-error' : '' }
                {...field}
                placeholder={field.placeholder}
                {...props}
            />
            <ErrorMessage component='div' name={field.name} className="error-card small text-danger mt-1" />
        </div>
    )
}