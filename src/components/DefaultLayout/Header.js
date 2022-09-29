import React from 'react';
import logo from '~/assets/image/tiktok_logo.png'
import Button from './Button';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { BsPlusLg, BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([1])
    // useEffect(() => {
    //     setTimeout(() => { setSearchResult([1, 2]) }, 3000)
    // }, [])
    return (
        <header className='fixed flex items-center justify-between top-0 left-0 w-full border-b border-b-black/20 h-[60px] z-50 bg-white'>
            <div className="reponsive flex items-center justify-between px-5">
                <div className="w-[118px]">
                    <Link to='/'><img src={logo} alt="" className='w-full h-full object-cover' /></Link>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={attrs => (
                        <div className='w-[350px] py-3 bg-white shadow-lg rounded-lg' tabIndex={-1} {...attrs}>
                            <span className='text-gray-400 font-medium text-sm p-3'>Tài khoản</span>
                            <ul className='flex flex-col gap-2'>
                                <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 px-3 py-1'>
                                    <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-chibi-bts-cam-micro-hat-de-thuong.jpg" alt="" className='w-10 h-10 object-cover rounded-full' />
                                    <div className="flex flex-col text-sm">
                                        <span>ngan.vo</span>
                                        <span className='text-gray-500'>Ngan</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}>
                    <div className="hidden relative bg-gray-100 md:flex items-center py-3 px-5 w-96 rounded-full">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Tìm kiếm tài khoản và video' className='group bg-transparent outline-none flex-1' />
                        <GrFormClose className={`${search ? 'block' : 'hidden'} w-10 mr-2 text-xl cursor-pointer opacity-60`} onClick={() => setSearch('')}></GrFormClose>
                        <div className="absolute right-[70px] top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gray-300"></div>

                        <button className='hover:opacity-70 transition-all w-10 flex justify-center'><BsSearch></BsSearch></button>
                    </div>
                </Tippy>
                <div className="flex gap-4">
                    <Button type='medium' color={{ text: 'text-black', border: 'border-black/20', bg: 'bg-white', hover: 'hover:bg-gray-100/50' }}>
                        <BsPlusLg size={15}></BsPlusLg>
                        Tải lên
                    </Button>
                    <Button type='medium' color={{ text: 'text-white', border: 'border-red-500', bg: 'bg-red-500' }}>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;