import HeadlessTippy from '@tippyjs/react/headless';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiMoreVertical, FiSettings } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { RiCoinLine } from 'react-icons/ri';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdOutlineKeyboardAlt, MdLogout } from 'react-icons/md';
import MenuSelectLang from './MenuChildren';
import { useEffect } from 'react';

const MENU_ITEMS_NOTLOGIN = [
    {
        icon: <IoLanguageSharp></IoLanguageSharp>,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Ngôn ngữ 2',
                        data: [
                            {
                                code: 'vn',
                                title: 'Tiếng Việt 2',
                            },
                            {
                                code: 'en',
                                title: 'English 2',
                                children: {
                                    title: 'Ngôn ngữ 3',
                                    data: [
                                        {
                                            code: 'vn',
                                            title: 'Tiếng Việt 3',
                                        },
                                        {
                                            code: 'en',
                                            title: 'English 3',
                                        },
                                        {
                                            code: 'fr',
                                            title: 'French 3',
                                        },
                                        {
                                            code: 'en',
                                            title: 'English 3',
                                        },
                                    ],
                                },
                            },
                            {
                                code: 'fr',
                                title: 'French 2',
                            },
                            {
                                code: 'en',
                                title: 'English 2',
                            },
                        ],
                    },
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'fr',
                    title: 'French',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <AiOutlineQuestionCircle></AiOutlineQuestionCircle>,
        title: 'Phản hồi và trợ giúp',
        type: 'a',
        to: 'https://www.tiktok.com/feedback?lang=vi-VN',
    },
    {
        icon: <MdOutlineKeyboardAlt></MdOutlineKeyboardAlt>,
        title: 'Phím tắt trên bàn phím',
    },
];
const MENU_ITEMS_LOGIN = [
    {
        icon: <BiUser></BiUser>,
        title: 'Xem thông tin',
        type: "Link",
        to: '/@nganvo'
    },
    {
        icon: <RiCoinLine></RiCoinLine>,
        title: 'Nạp tiền',
        type: "Link",
        to: '/coin'
    },
    {
        icon: <FiSettings></FiSettings>,
        title: 'Cài đặt',
        type: "Link",
        to: '/settings'
    },
];

const MenuPopper = () => {
    const [openSelectLang, setOpenSelectLang] = useState(false);
    const [menuChildren, setMenuChildren] = useState();



    // fake login
    const [login, setLogin] = useState(true)
    let MENU_ITEMS;
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLogin(!login);
    //     }, 5000);
    // }, []);



    if (login) {
        MENU_ITEMS = MENU_ITEMS_LOGIN.concat(MENU_ITEMS_NOTLOGIN);
    }
    else {
        MENU_ITEMS = MENU_ITEMS_NOTLOGIN;
    }

    const handleBack = () => {
        setOpenSelectLang(false);
    };
    const handleMenuChildren = (index) => {
        if (MENU_ITEMS[index].children) {
            setMenuChildren(MENU_ITEMS[index].children);
            setOpenSelectLang(true);
        }
    };
    return (
        <>
            <HeadlessTippy
                delay={[0, 500]}
                placement="bottom-end"
                interactive={true}
                onHidden={handleBack}
                render={(attrs) => (
                    <div
                        tabIndex="-1"
                        {...attrs}
                        className="w-[250px] max-h-[600px] overflow-y-auto top-full right-0 bg-white shadow-lg rounded-lg"
                    >
                        {!openSelectLang ? (
                            <div className="flex flex-col gap-1 py-3">
                                {MENU_ITEMS.map((item, index) => {
                                    let Type = '';
                                    if (item.type === 'a') Type = 'a';
                                    else if (item.type === 'Link') Type = Link;
                                    else Type = 'span';
                                    return (
                                        <Type
                                            key={index}
                                            className="font-medium flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 px-5 py-2"
                                            onClick={() => handleMenuChildren(index)}
                                            href={(item.type && item.type === 'a') && item.to}
                                            to={(item.type && item.type === 'Link') ? `${item.to}` : ''}
                                        >
                                            {item.icon}
                                            { }
                                            {item.title}
                                        </Type>
                                    );
                                })}
                                {login && (
                                    <span className="border-t border-t-gray-300 font-medium flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 px-5 py-2">
                                        <MdLogout></MdLogout> Đăng xuất
                                    </span>
                                )}
                            </div>
                        ) : (
                            <MenuSelectLang children={menuChildren} handleBack={handleBack}></MenuSelectLang>
                        )}
                    </div>
                )}
            >
                <button>
                    {/* not login */}
                    {/* <FiMoreVertical size={25} className="cursor-pointer"></FiMoreVertical> */}

                    {/* login */}
                    <img src="https://www.blexar.com/avatar.png" alt="" className="w-8 h-8 object-cover rounded-full shadow-lg" />
                </button>
            </HeadlessTippy>
        </>
    );
};

export default MenuPopper;
