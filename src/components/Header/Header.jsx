import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/data/dataActions';
import boardSize from '../../store/board/boardSizeActions';
import './Header.css';

const Header = () => {
    const [sizeChose, setSizeChose] = useState('');
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
        setSizeChose(value);
    };

    const handleBoardChose = () => {
        dispatch(boardSize(sizeChose));
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

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
                        <a
                            className='dropdown-item'
                            href='/#'
                            key={index}
                            onClick={() => handleBoardChange(el.field)}
                        >
                            {el.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className='submit-btn'>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={handleBoardChose}
                >
                    START
                </button>
            </div>
        </div>
    );
};
export default Header;
