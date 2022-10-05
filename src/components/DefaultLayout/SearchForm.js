import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchResult from '../Popper/SearchResult';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import { useEffect } from 'react';


const dataSearch = [
    {
        image: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-chibi-bts-cam-micro-hat-de-thuong.jpg',
        name: 'ngan.vo',
        desc: 'Ngan',
        tick: false,
    },
    {
        image: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
        name: 'ngan.vo',
        desc: 'Ngan',
        tick: true,
    },
    {
        image: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-chibi-bts-cam-micro-hat-de-thuong.jpg',
        name: 'ngan.vo',
        desc: 'Ngan',
        tick: false,
    },
];

const SearchForm = () => {
    const inputRef = useRef()

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!search.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(search) || '000000'}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .catch(() => { setLoading(false) })
    }, [search])

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 1}
            onClickOutside={() => setShowResult(false)}
            interactive={true}
            render={(attrs) => (
                <div className="w-[350px] py-3 bg-white shadow-lg rounded-lg" tabIndex={-1} {...attrs}>
                    <span className="text-gray-400 font-medium text-sm p-3">Tài khoản</span>
                    <SearchResult
                        data={searchResult}
                    ></SearchResult>
                </div>
            )}
        >
            <div className="hidden relative bg-gray-100 md:flex items-center py-3 px-5 w-96 rounded-full">
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    value={search}
                    placeholder="Tìm kiếm tài khoản và video"
                    className="group bg-transparent outline-none flex-1"
                />

                {(search && !loading) && (
                    <GrFormClose
                        className={`w-10 mr-2 text-xl cursor-pointer opacity-60`}
                        onClick={() => {
                            setSearch('')
                            setSearchResult([])
                            inputRef.current.focus()
                        }}
                    ></GrFormClose>
                )}
                {loading && (
                    <AiOutlineLoading3Quarters
                        size={15}
                        className={`w-10 mr-2 text-xl cursor-pointer opacity-60 animate-spin`}
                    >
                    </AiOutlineLoading3Quarters>
                )}

                <div className="absolute right-[70px] top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gray-300"></div>

                <button className={`${search ? 'opacity-100' : 'opacity-70'} hover:opacity-70 transition-all w-10 flex justify-center`}>
                    <BsSearch></BsSearch>
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default SearchForm;