import React, { useState, useEffect } from 'react';
import { GameCell } from '../GameCell/GameCell';
import { useSelector } from 'react-redux';

import './GameTable.css';

export const GameTable = () => {
    const [logCell, setLogCell] = useState([]);
    const [board, setBoard] = useState([]);
    const { size } = useSelector((state) => state.boardSize);

    const createBoard = (size) => {
        let arr = new Array(size);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = [];
        }

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                arr[i][j] = `${i + 1}.${j + 1}`;
            }
        }
        return arr;
    };

    useEffect(() => {
        setBoard(createBoard(size));
    }, [size]);

    const handleClick = (cell) => {
        let logArr = cell.split('.');
        let cellCord = {
            id: `0${logArr[0]}${logArr[1]}`,
            row: logArr[0],
            column: logArr[1],
        };
        toggleArrayItem(logCell, cellCord);
    };

    const toggleArrayItem = (arr, item) => {
        arr.some((el) => el.id === item.id)
            ? setLogCell(arr.filter((el) => el.id !== item.id))
            : setLogCell([...arr, item]);
    };

    return (
        <div className='gameTable'>
            <div className='column'>
                {board.map((row, index) => (
                    <div className='row' key={index}>
                        {row.map((column, index) => (
                            <GameCell
                                handleClick={handleClick}
                                id={column}
                                key={index}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className='overflow-auto log'>
                {logCell.map((el) => (
                    <div className='log-area' key={el.id}>
                        <span>row: {el.row} </span>
                        <span>col: {el.column}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
