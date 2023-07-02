import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from "~/components/Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)


function AccountItem({ data }) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar}
                alt={data.nickname}/>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </div>
                <span className={cx('username')}>{data.nickname}</span>

            </div>
        </Link>
     );
}

export default AccountItem;