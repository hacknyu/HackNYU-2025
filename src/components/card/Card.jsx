import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

const Card = ({ info }) => {
    const [flipped, setFlipped] = useState(false);
    const cardStyle = `flex flex-col justify-between text-4xl text-center border-2 border-white h-72 md:w-[300px] md:h-[300px] xl:w-[270px] xl:h-[300px] p-5 bg-custom-gradient hover:cursor-pointer`;

    const handleClick = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div onClick={handleClick} className={cardStyle}>
            <div className="m-auto">
                <h2>{info.header}</h2>
                <h3>{info.subheader}</h3>
            </div>
        </div>

        <div onClick={handleClick} className={cardStyle}>
            <p className="text-xl my-auto">{info.description}</p>
        </div>
        </ReactCardFlip>
    )
}

export default Card