import React from 'react';
import { GameTable } from '../GameTable/GameTable';
import Header from '../Header/Header';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <GameTable />
        </div>
    );
};
export default App;
