import React from 'react';
import { useRef } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const imageDefault = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
const SearchResult = (props) => {
    const imageRef = useRef()
    return (
        <ul className="flex flex-col gap-2">
            {props.data.map((item, index) => (
                <Link key={item.id} to={`/@${item.nickname}`}>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 px-3 py-1">
                        <img
                            ref={imageRef}
                            src={item.avatar}
                            alt=""
                            className="w-10 h-10 object-cover rounded-full"
                        />
                        <div className="flex flex-col text-sm">
                            <span className='flex gap-1 items-center'>
                                {item.full_name}{' '}
                                {item.tick && <AiFillCheckCircle size={15} className="text-sky-400"></AiFillCheckCircle>}
                            </span>
                            <span className="text-gray-500">{item.nickname}</span>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default SearchResult;