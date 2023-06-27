import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faSignIn, faEllipsisVertical,faEarthAsia, faQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';
import images from '~/assest/images';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';

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
    const [searchResult, setSearchResult] = useState([])
    useEffect(()=> {
        setTimeout(() => {
            setSearchResult([])
        },0)
    },[])
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
                <img src={images.logo} alt='tiktok'></img>
                <HeadlessTippy
                interactive
                visible={searchResult.length>0}
                    render={(attrs => (
                        <div className={cx('search-result')}>
                            <PopperWrapper >
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    ))}
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder='Search account and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
    
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? 
                    (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (

                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={() => {}}>Up load</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} onClick={() => {}}>Log in</Button>
                        </>
                        
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img src='https://i.pinimg.com/564x/e6/36/a6/e636a664f860a1ec9f7b5f3c4e2f634b.jpg' className={cx('user-avatar')} alt='Nguyen Van A' />
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