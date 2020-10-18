import React from 'react'

const Scroll = (props) => {
   // console.log(props); //I get an object!
    return  (
        <div style={{overflowY: 'scroll', border: '4px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll
