import React from 'react';

const Button = (props) => {
    let width = null;
    const color = props.color
    const colorText = color.text
    const colorBg = color.bg
    const colorBorder = color.border
    const colorHover = color.hover

    switch (props.type) {
        case 'large': width = 'w-full py-[10px]'; break;
        case 'medium': width = 'w-[100px] py-[5px]'; break;
        case 'small': width = 'w-[88px] py-[5px]'; break;
        default: ;
    }

    return (
        <button
            className={`${colorText} ${colorBg} ${colorBorder} ${width} ${colorHover} ${props.disabled && 'opacity-60'} border rounded-[4px] font-bold flex gap-2 justify-center items-center cursor-pointer transition-all`}
            onClick={props.handleClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;