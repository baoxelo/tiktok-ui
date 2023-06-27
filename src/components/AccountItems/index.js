import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)


function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/564x/e6/36/a6/e636a664f860a1ec9f7b5f3c4e2f634b.jpg" alt="Hoa"/>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Monkey D Luffy</h4>
                    <FontAwesomeIcon className={cx('check') }icon={faCheckCircle}/>
                </div>
                <span className={cx('username')}>luffytaro</span>

            </div>
        </div>
     );
}

export default AccountItem;