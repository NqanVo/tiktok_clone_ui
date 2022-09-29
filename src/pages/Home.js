import React from 'react';
// import Container from '~/components/DefaultLayout/Container';
import Header from '~/components/DefaultLayout/Header';
import Sidebar from '~/components/DefaultLayout/Sidebar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className='reponsive mt-[60px] grid grid-cols-3'>
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-2">
                    <div className="">home</div>
                </div>
            </section>
        </div>
    );
};

export default Home;