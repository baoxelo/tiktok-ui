import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignIn, faEllipsisVertical,faEarthAsia, faQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';
import images from '~/assest/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, NoticeIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: 'en',
                    title: 'English',
                },
                {
                    type: "language",
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    const currentUser = true
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                
                break
            default:
        }
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ]
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={`/`} ><img src={images.logo} alt='tiktok'></img></Link>
                
                <Search />

                <div className={cx('actions')}>
                    <Button className={cx('upload-btn')} text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={() => {}}>Up load</Button>
                    {currentUser ? 
                    (
                        <>
                            <Tippy delay={[0, 200]} content="Message" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message')}/>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notification" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <NoticeIcon className={cx('notification')}/>
                                    <div className={cx('message-quantity')}><span>22</span></div>
                                </button>
                            </Tippy>
                        </>
                    ) : (

                        <>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} onClick={() => {}}>Log in</Button>
                        </>
                        
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                                src='https://i.pinimg.com/564x/e6/36/a6/e636a664f860a1ec9f7b5f3c4e2f634b.jpg' 
                                className={cx('user-avatar')} 
                                alt='Nguyen Van A' 
                                fallBack='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                </div>
            </div>
        </header>
     );
}

export default Header;