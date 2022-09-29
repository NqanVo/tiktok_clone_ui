import React from 'react';
import Container from '~/components/DefaultLayout/Container';
import Header from '~/components/DefaultLayout/Header';
import Sidebar from '~/components/DefaultLayout/Sidebar';

const Following = () => {
    return (
        <div>
            <Header></Header>
            <Container cols="3">
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-2">
                    <div className="bg-pink-400">following</div>
                </div>
            </Container>
        </div>
    );
};

export default Following;
