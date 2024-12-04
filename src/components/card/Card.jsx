import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

const Card = ({ info }) => {
    const [flipped, setFlipped] = useState(false);
    const cardStyle = `flex flex-col font-bold text-center border-2 border-white h-72 w-[270px] h-[270px] p-5 bg-custom-gradient hover:cursor-pointer`;

    const handleClick = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div onClick={handleClick} className={cardStyle}>
            <div className="m-auto">
                <h2 className="text-2xl">{info.header}</h2>
                <h3 className="text-2xl">{info.subheader}</h3>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white m-auto animate-pulse"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v6.75m0 0l2.25-2.25m-2.25 2.25L9.75 9m2.25 5.25v6.75M21 12a9 9 0 11-9-9"
                    />
            </svg>
        </div>

        <div onClick={handleClick} className={cardStyle}>
            <p className="text-md md:text-lg my-auto">{info.description}</p>
        </div>
        </ReactCardFlip>
    )
}

export default Card