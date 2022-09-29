import React from 'react';

const Container = (props) => {
    const gridCols = `grid-cols-${props.cols}`
    return (
        // <section className={`reponsive mt-[60px] grid ${gridCols}`}>
        <section className={`reponsive mt-[60px] grid ${gridCols}`}>
            {props.children}
        </section>
    );
};

export default Container;