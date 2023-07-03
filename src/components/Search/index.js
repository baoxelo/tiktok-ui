import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import * as searchServices from '~/services/searchService'
import AccountItem from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './search.module.scss'
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const debounce = useDebounce(searchValue,500)
    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const onChangeInput = (e) => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            setSearchValue(e.target.value)
        }
    }
    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async() => {
            setLoading(true)

            const result = await searchServices.search(debounce);
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()
    },[debounce])
    return ( 
        //Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order.
        //  Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        //  Specifying `appendTo: document.body` silences this warning, but it assumes you are using a focus management solution to handle keyboard navigation. 
        <div>
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
                        
                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <SearchIcon className={cx('search-icon')}/>
                        </button>
    
                    </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;