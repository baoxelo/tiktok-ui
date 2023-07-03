import PropTypes from 'prop-types';
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
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
}
export default Image;