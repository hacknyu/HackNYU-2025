import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

const Card = ({ info }) => {
    const [flipped, setFlipped] = useState(false);
    const cardStyle = `flex flex-col justify-between text-4xl border-2 border-white h-72 md:w-[300px] md:h-[300px] xl:w-[270px] xl:h-[300px] text-center p-5`;

    const handleClick = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div onClick={handleClick} className={cardStyle}>
            <div>
                <h2>{info.header}</h2>
                <h3>{info.subheader}</h3>
            </div>
            <button>&rarr;</button>
        </div>

        <div onClick={handleClick} className={cardStyle}>
            <p className="text-xl">{info.description}</p>
        </div>
        </ReactCardFlip>
    )
}

export default Card