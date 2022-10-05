import React from 'react';

const Button = (props) => {
    let width = null;
    let Type = ""
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

    if (props.to)
        Type = "a";
    else
        Type = "button";

    return (
        <Type
            className={`cursor-pointer ${colorText} ${colorBg} ${colorBorder} ${width} ${colorHover} ${props.disabled && 'opacity-60 cursor-not-allowed'} border rounded-[4px] font-bold flex gap-2 justify-center items-center transition-all`}
            onClick={props.handleClick}
            disabled={props.disabled}

            href={props.to}
            target="_blank"
        >
            {props.children}
        </Type>
    );
};

export default Button;