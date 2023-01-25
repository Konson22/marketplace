import { useState, useRef, useEffect } from 'react';
import { FaImage } from 'react-icons/fa'

export function LazyImage(imageProps){
    const [shouldLoad, setShouldLoad] = useState(false);
    const placeholderRef = useRef(null);
    useEffect(()=>{
        if(!shouldLoad && placeholderRef.current){
            const observer = new IntersectionObserver(([{intersectionRatio}]) => {
                if(intersectionRatio > 0) return setShouldLoad(true);
            });

            observer.observe(placeholderRef.current);
            return () => observer.disconnect();
        }
    }, [shouldLoad, placeholderRef]);

    return (
        shouldLoad ? <img {...imageProps} alt="" /> : 
        <div className="md:h-[11rem] h-[8rem] flex items-center justify-center bg-gray-200" ref={placeholderRef}>
            <FaImage className='text-[5rem] opacity-10' />
        </div>
    );
};
