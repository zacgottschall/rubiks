import React from 'react'


const Cube = () => {
    return (
        <div className="Cube">
            <div className="Side" id="Back"/>
            <div className="TopAndSides">
                <div className="Side" id="Left"/>
                <div className="Side" id="Top"/>
                <div className="Side" id="Right"/>
            </div>
            <div className="Side" id="Front"/>
        </div>
    );
};

export default Cube;