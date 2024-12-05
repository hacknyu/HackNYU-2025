import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import flipArrow from '../../assets/flipArrow.svg';

const Card = ({ info }) => {
    const [flipped, setFlipped] = useState(false);
    const cardStyle = `flex flex-col justify-center items-center font-bold border-2 border-white w-[270px] h-[270px] rounded p-5 hover:cursor-pointer`;

    const handleClick = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div onClick={handleClick} className={cardStyle}>
            <div className="text-center">
                <h2 className="text-2xl">{info.header}</h2>
                <h3 className="text-2xl">{info.subheader}</h3>
            </div>
            <img src={flipArrow} alt="flip arrow" className="w-10 h-10 mt-10"/>
        </div>

        <div onClick={handleClick} className={cardStyle}>
            <p className="text-md md:text-lg text-center">{info.description}</p>
        </div>
        </ReactCardFlip>
    )
}

export default Card