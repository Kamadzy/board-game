import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions/fetchData';
import boardSize from '../../store/actions/boardSize';
import './Header.css';

const Header = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const newArr = [];
    const dataTransform = () => {
        for (const [key, value] of Object.entries(data.data)) {
            newArr.push({ name: key, field: value.field });
        }
    };
    dataTransform();

    const handleBoardChange = (value) => {
        dispatch(boardSize(value));
    };

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className='header-comp'>
            <div className='dropdown'>
                <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    Pick Mode
                </button>
                <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                >
                    {newArr.map((el, index) => (
                        <a className='dropdown-item' key={index} onClick={() => handleBoardChange(el.field)}>
                            {el.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className='submit-btn'>
                <button
                    type='button'
                    className='btn btn-primary'
                >
                    START
                </button>
            </div>
        </div>
    );
};
export default Header;
