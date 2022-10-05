import React from 'react';
import Container from '~/components/DefaultLayout/Container';
import Header from '~/components/DefaultLayout/Header';
import Sidebar from '~/components/DefaultLayout/Sidebar';
const Error404 = () => {
    return (
        <div>
            <Header></Header>
            <Container cols="3">
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-2">
                    <div className="bg-purple-500-400">404</div>
                </div>
            </Container>
        </div>
    );
};

export default Error404;