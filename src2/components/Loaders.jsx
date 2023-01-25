

export function FormLoader(){
    return(
        <div className='spinner-loader-wraper d-flex align-items-center justify-content-center'>
            <div className="spinner-loader__content text-center">
                <img src={process.env.PUBLIC_URL+'/images/loader.gif'} alt='Loading...' />
                <div className="mt-3">
                    <h5>Please wait...</h5>
                </div>
            </div>
        </div>
    )
}


export function PageLoader(){
    return(
        <div className='page-loader-wraper d-flex align-items-center justify-content-center'>
            <div className="content text-center">
                <img src={process.env.PUBLIC_URL+'/images/loader.gif'} alt='Loading...' />
            </div>
        </div>
    )
}
