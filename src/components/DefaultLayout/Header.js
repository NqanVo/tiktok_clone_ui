import React from 'react';
import logo from '~/assets/image/tiktok_logo.png';
import Button from '../Button';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


import { useState } from 'react';
import { useEffect } from 'react';
import { BsPlusLg, BsSearch } from 'react-icons/bs';
import { AiOutlineCloudUpload, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiMessageAltMinus } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import SearchResult from '../Popper/SearchResult';
import MenuPopper from '../Popper/MenuPopper';
import SearchForm from './SearchForm';


const Header = () => {
    const navigate = useNavigate()



    return (
        <header className="fixed flex items-center justify-between top-0 left-0 w-full border-b border-b-black/20 h-[60px] z-50 bg-white">
            <div className="reponsive flex items-center justify-between px-3 xl:px-5">
                <div className="w-[118px]">
                    <Link to="/">
                        <img src={logo} alt="" className="w-full h-full object-cover" />
                    </Link>
                </div>

                <SearchForm></SearchForm>

                {/* // not Login */}
                {/* <div className="flex items-center gap-2 xl:gap-4">
                    <Button
                        type="medium"
                        color={{ text: 'text-black', border: 'border-black/20', bg: 'bg-white', hover: 'hover:bg-gray-100/50' }}
                    >
                        <BsPlusLg size={15}></BsPlusLg>
                        Tải lên
                    </Button>
                    <Button
                        type="medium"
                        color={{ text: 'text-white', border: 'border-red-500', bg: 'bg-red-500' }}
                    >
                        Đăng nhập
                    </Button>
                    <MenuPopper></MenuPopper>
                </div> */}

                {/* // Login */}
                <div className="flex items-center gap-2 xl:gap-4">
                    <Tippy content='Đăng tải video' placement='bottom'>
                        <button>
                            <AiOutlineCloudUpload size={25}></AiOutlineCloudUpload>
                        </button>
                    </Tippy>
                    <Tippy content='Chia sẽ' placement='bottom'>
                        <button>
                            <TbBrandTelegram size={25}></TbBrandTelegram>
                        </button>
                    </Tippy>
                    <Tippy content='Tin nhắn' placement='bottom'>
                        <button>
                            <BiMessageAltMinus size={25}></BiMessageAltMinus>
                        </button>
                    </Tippy>
                    <MenuPopper></MenuPopper>
                </div>
            </div>
        </header>
    );
};

export default Header;
