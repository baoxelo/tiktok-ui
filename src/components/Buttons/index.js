import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import styles from './button.module.scss'

const cx = classNames.bind(styles)
function Button({ 
    className,
    to, 
    href, 
    primary = false,
    outline = false, 
    text = false, 
    disable = false,
    rounded = false,
    size = 'medium', 
    children, 
    onClick,
    leftIcon,
    rightIcon,
    ...passProps }) 
    {


    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    
    if(disable){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if(to) {
        props.to = to
        Comp = Link
    }else if (href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',{ [className]:className,primary, outline, text, disable, rounded, [size]:size})
    return ( 
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}

export default Button;