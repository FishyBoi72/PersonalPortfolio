import React from 'react';
import './styles/birds.css'; // Import the associated CSS for the birds

const Birds: React.FC = () => {
    return (
        <>
            <div className="bird-container bird-container-one">
                <div className="bird bird-one"></div>
            </div>
            <div className="bird-container bird-container-three">
                <div className="bird bird-three"></div>
            </div>
            <div className="bird-container bird-container-four">
                <div className="bird bird-four"></div>
            </div>
        </>
    );
};

export default Birds;
