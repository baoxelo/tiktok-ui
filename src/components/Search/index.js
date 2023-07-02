import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './search.module.scss'
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const onChangeInput = (e) => {
        if(e.target.value === ' '){
            return
        }
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    },[searchValue])
    return ( 
        <HeadlessTippy
                interactive
                visible={searchResult.length>0 && showResult}
                render={(attrs => (
                    <div className={cx('search-result')}>
                        <PopperWrapper >
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result}/>
                            ))}
                        </PopperWrapper>
                    </div>
                ))}
                onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input 
                            ref={inputRef}
                            value={searchValue} 
                            onChange={onChangeInput} 
                            className={cx('input')} 
                            placeholder='Search account and videos' 
                            spellCheck={false}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button 
                                className={cx('clear')}
                                onClick={handleClear}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        
                        <button className={cx('search-btn')}>
                            <SearchIcon className={cx('search-icon')}/>
                        </button>
    
                    </div>
                </HeadlessTippy>
    );
}

export default Search;