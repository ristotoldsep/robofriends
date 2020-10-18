import React from 'react';

// const Card = (props) => {
//     const { name, email, id } = props;
const Card = ({name, email, id, username}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="rix"></img> {/* USING ESX EXPRESSIONS */}
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;