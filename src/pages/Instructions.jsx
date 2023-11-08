import React from 'react';
import InstructionList from '../components/Instructions/InstructionList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Instructions = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <div className="start__title">
                    <span className='mainText'>Список инструкций</span>
                </div>
                <InstructionList />
            </div>
            <Footer />
        </div>
    );
}

export default Instructions;
