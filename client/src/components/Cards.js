/* eslint-disable no-dupe-keys */
import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import Card from '@mui/material/Card';

const cardStyle = {
height:"300px",
width:"200px",
}
const imgStyle = {
    maxWidth:"100%",
    maxHeight:"100%",
}
function Cards() {
    return (
     
        // eslint-disable-next-line react/style-prop-object
        <div>
            {/* <Card > */}
            <Flippy
            style={cardStyle}
             flipOnClick={true}
             flipDirection="horizontal"
            >
            <FrontSide>
           <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9.jpg" alt="Avatar" style={imgStyle} />
            </FrontSide>
               <BackSide>
               <h1>Title of Comic</h1>
                <p>Description of Comic:</p>
                <p>Price:</p>
              
               </BackSide>
            </Flippy>
            {/* </Card> */}
        </div>
    );
}

export default Cards
