import React, { useState } from 'react';
import './GameCell.css';

export const GameCell = ({ id, handleClick }) => {
    const [activeCell, setActiveCell] = useState(false);

    const handleActiveCell = () => {
        setActiveCell(!activeCell);
        handleClick(id);
    };

    let actCell = activeCell ? `active-cell` : `disabled-cell`;
    return (
        <div>
            <div
                id={id}
                className={`game-cell ${actCell}`}
                onMouseOver={handleActiveCell}
            ></div>
        </div>
    );
};
