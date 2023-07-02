import classNames from 'classnames';
import { useState, forwardRef } from 'react'
import images from '~/assest/images';
import styles from './image.module.scss'

const Image = forwardRef(({ src, alt, className,fallBack, ...props},ref) => {
    const [fallBackImage, setFallBackImage] = useState(src)
    const handleError = () => {
        if(fallBack){
            setFallBackImage(fallBack)
        }else{
            setFallBackImage(images.noImage)
        }
    }
    return ( 
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBackImage} alt={alt} {...props} onError={handleError}/>

    );
})

export default Image;