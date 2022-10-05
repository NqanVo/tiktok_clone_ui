import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const MenuChildren = (props) => {
    const [dataChildren, setDataChildren] = useState(props.children);
    const [history, setHistory] = useState([{ data: props.children }]);

    const handleNextChildren = (index) => {
        if (dataChildren.data[index].children) {
            setDataChildren(dataChildren.data[index].children);
            setHistory([{ data: dataChildren.data[index].children }, ...history]);
        }
    };

    const handleBack = () => {
        if (history.length <= 2)
            setDataChildren(history[history.length - 1].data)
        else
            setDataChildren(history[history.length - 2].data)
        history.shift()
    }

    return (
        <>
            <div className="sticky top-0 left-0 bg-white py-3 z-10 px-4 flex items-center justify-between">
                {history.length > 1 ? (
                    <button onClick={handleBack}>
                        <IoIosArrowBack size={20}></IoIosArrowBack>
                    </button>
                ) : (
                    <button onClick={props.handleBack}>
                        <IoIosArrowBack size={20}></IoIosArrowBack>
                    </button>
                )}
                <span className="font-medium">{dataChildren.title}</span>
            </div>
            <ul className="my-2">
                {dataChildren.data.map((item, index) => (
                    <li
                        key={index}
                        className="font-medium cursor-pointer hover:bg-gray-100/50 px-5 py-1"
                        onClick={() => handleNextChildren(index)}
                    >
                        {item.title} ({item.code})
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuChildren;
