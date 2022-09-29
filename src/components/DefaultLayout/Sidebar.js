import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillCheckCircle } from 'react-icons/ai';
import { TbUsers } from 'react-icons/tb';
import { RiLiveLine } from 'react-icons/ri';
import { HiHashtag } from 'react-icons/hi'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import Button from './Button';

const pagesHot = [
    {
        image:
            'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664503200&x-signature=54fv7pKsPieAZvewphZePqvxjYQ%3D',
        name: 'theanh28entertainment',
        desc: 'Theanh28 Entertainment',
        follower: '7.4M',
        liked: '504M',
        tick: true,
    },
    {
        image:
            'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1664506800&x-signature=yAJu0VQ805sneT9WvO%2FZ1%2BV%2FulQ%3D',
        name: 'tiin.vn',
        desc: 'Tiin.vn',
        follower: '7.3M',
        liked: '399M',
        tick: true,
    },
    {
        image:
            'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1664506800&x-signature=u%2BZMRX4a4OGmaNEiR1xOAsuhu8s%3D',
        name: 'annhien_boiboi',
        desc: 'AnNhiên ❤️ BốiBối',
        follower: '10M',
        liked: '204M',
        tick: false,
    },
];

const khampha = [
    {
        name: 'suthatla',
        type: 'tag'
    },
    {
        name: 'mackedoi',
        type: 'tag'
    },
    {
        name: 'sansangthaydoi',
        type: 'tag'
    },
    {
        name: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        type: 'music'
    },
    {
        name: 'Thiên Thần Tình Yêu - RICKY STAR',
        type: 'music'
    },
    {
        name: 'sansangthaydoi',
        type: 'tag'
    },
]
const Sidebar = () => {
    const location = useLocation();
    const page = location.pathname.split('/')[1];

    return (
        <div className={`w-max xl:w-full h-[700px] overflow-y-auto flex flex-col  overflow-x-hidden scrollbar-hide`}>
            {/* page  */}
            <div className="w-full flex flex-col items-center xl:items-stretch font-bold text-xl border-b border-b-black/10 py-3">
                <Link to="/">
                    <span
                        className={`${page === '' ? 'text-red-500' : ''
                            } py-3 px-5 w-full flex gap-2 items-center hover:bg-slate-100 transition-all`}
                    >
                        <AiFillHome></AiFillHome> <span className='hidden xl:inline-block'>Dành cho bạn</span>
                    </span>
                </Link>
                <Link to="/following">
                    <span
                        className={`${page === 'following' ? 'text-red-500' : ''
                            } py-3 px-5 w-full flex gap-2 items-center hover:bg-slate-100 transition-all`}
                    >
                        <TbUsers></TbUsers> <span className='hidden xl:inline-block'>Đang Follow</span>
                    </span>
                </Link>
                <Link to="/live">
                    <span
                        className={`${page === 'live' ? 'text-red-500' : ''
                            } py-3 px-5 w-full flex gap-2 items-center hover:bg-slate-100 transition-all`}
                    >
                        <RiLiveLine></RiLiveLine> <span className='hidden xl:inline-block'>LIVE</span>
                    </span>
                </Link>
            </div>
            {/* required login */}
            <div className="hidden xl:flex flex-col gap-3 text-sm border-b border-b-black/10 py-3 px-5">
                <p className="text-gray-400">Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                <Button
                    type="large"
                    color={{ text: 'text-red-500', border: 'border-red-500', bg: 'bg-white', hover: 'hover:bg-red-100/50' }}
                >
                    Đăng nhập
                </Button>
            </div>
            {/* Kênh đề xuất  */}
            {page === 'live' ? (
                <div className="w-full flex flex-col gap-3 text-sm border-b border-b-black/10 py-3 px-5">
                    <p className="text-gray-600 font-medium">Các chủ phòng được đề xuất.</p>
                    <ul>
                        {pagesHot.map((page, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 cursor-pointer hover:bg-black/5 p-2 transition-all group"
                            >
                                <img src={page.image} alt={page.image} className="w-8 h-8 object-cover rounded-full" />
                                <div className="">
                                    <p className="flex gap-1 items-center font-bold text-sm">
                                        {`${page.name.substring(0, 15)}...`}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {`${page.desc.substring(0, 15)}...`}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-red-500 font-bold cursor-pointer px-5">Xem tất cả</p>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-3 text-sm border-b border-b-black/10 py-3">
                    <p className="hidden xl:inline-block  px-5 text-gray-600 font-medium">Tài khoản được đề xuất.</p>
                    <ul>
                        {pagesHot.map((page, index) => (
                            <li
                                key={index}
                                className="relative flex items-center gap-3 cursor-pointer hover:bg-black/5 py-2 px-5 transition-all group"
                            >
                                <img src={page.image} alt={page.image} className="w-8 h-8 object-cover rounded-full" />
                                <div className="hidden xl:block">
                                    <p className="flex gap-1 items-center font-bold text-[16px]">
                                        {page.name}{' '}
                                        {page.tick && <AiFillCheckCircle size={15} className="text-sky-400"></AiFillCheckCircle>}
                                    </p>
                                    <p className="text-xs text-gray-500">{page.desc}</p>
                                </div>
                                <div className="hidden absolute z-30 xl:group-hover:flex flex-col gap-3 top-full left-0 w-[90%] shadow-xl bg-white rounded-md p-5 transition-all">
                                    <div className="flex items-center justify-between">
                                        <img src={page.image} alt={page.image} className="w-10 h-10 object-cover rounded-full" />
                                        <Button type="medium" color={{ text: 'text-white', border: 'border-red-500', bg: 'bg-red-500' }}>
                                            Follow
                                        </Button>
                                    </div>
                                    <div className="">
                                        <p className="flex gap-1 items-center font-bold text-xl">
                                            {page.name}{' '}
                                            {page.tick && <AiFillCheckCircle size={15} className="text-sky-400"></AiFillCheckCircle>}
                                        </p>
                                        <p className="text-xs text-gray-800">{page.desc}</p>
                                    </div>
                                    <div className="flex justify-between text-lg">
                                        <p>
                                            <b>{page.follower}</b> <span className="opacity-70">Follower</span>
                                        </p>
                                        <p>
                                            <b>{page.liked}</b> <span className="opacity-70">Thích</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-red-500 font-bold cursor-pointer xl:inline-block hidden px-5">Xem tất cả</p>
                </div>
            )}
            {/* Khám phá */}
            <div className="w-full hidden xl:flex flex-col gap-3 text-sm border-b border-b-black/10 py-3 px-5">
                <p className="text-gray-600 font-medium">Khám phá.</p>
                <div className="w-full flex flex-wrap gap-1">
                    {khampha.map((item, index) => (
                        <p key={index} className='flex gap-1 items-center p-1 border border-gray-300 w-max rounded-full cursor-pointer hover:bg-gray-100'>
                            {item.type === 'tag' ? <HiHashtag size={20}></HiHashtag> : <BsMusicNoteBeamed size={20}></BsMusicNoteBeamed>} {`${item.name.substring(0, 40)}...`}
                        </p>
                    ))}
                </div>
            </div>
            {/* footer  */}
            <div className="w-full hidden xl:flex flex-col gap-3 text-xs border-b border-b-black/10 py-3 px-5 text-gray-600">
                <p>Giới thiệu TikTok Browse Bảng tin Liên hệ Sự nghiệp ByteDance</p>
                <p>Giới thiệu TikTok Browse Bảng tin Liên hệ Sự nghiệp ByteDance</p>
                <p>Giới thiệu TikTok Browse Bảng tin Liên hệ Sự nghiệp ByteDance</p>
            </div>
        </div>
    );
};

export default Sidebar;
