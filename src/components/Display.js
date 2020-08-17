import React from 'react';

const Display = ({props}) => {
    return (
        <>
            <div className="display">
                <p>Monthly amount</p>
                <h1>$512</h1>
            </div>
            <div className="display__info">
                <p>You're planning <span>48 monthly deposits </span> 
                to reach  you <span>X</span> goal by <span>Y</span></p>
            </div>
            <button className="display__button">Confirm</button>
        </>
    );
}

export default Display;
