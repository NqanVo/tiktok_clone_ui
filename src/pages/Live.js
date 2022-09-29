import React from 'react';

import Header from '~/components/DefaultLayout/Header';
import Sidebar from '~/components/DefaultLayout/Sidebar';

const Live = () => {
    return (
        <div>
            <Header></Header>
            <section className='mt-[60px] grid grid-cols-7'>
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-6">
                    <div className="bg-pink-400">live</div>
                </div>
            </section>
        </div>
    );
};

export default Live;