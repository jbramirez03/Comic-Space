/* eslint-disable no-dupe-keys */
import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
<<<<<<< HEAD
=======
import Card from '@mui/material/Card';
>>>>>>> main

const cardStyle = {
height:"300px",
width:"200px",
}
const imgStyle = {
    maxWidth:"100%",
    maxHeight:"100%",
}
<<<<<<< HEAD

const scroll = {
    overflow: "scroll",
}

=======
>>>>>>> main
function Cards() {
    return (
     
        // eslint-disable-next-line react/style-prop-object
        <div>
<<<<<<< HEAD
       
=======
            {/* <Card > */}
>>>>>>> main
            <Flippy
            style={cardStyle}
             flipOnClick={true}
             flipDirection="horizontal"
            >
            <FrontSide>
           <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9.jpg" alt="Avatar" style={imgStyle} />
            </FrontSide>
<<<<<<< HEAD
               <BackSide style={scroll}>
               <h1>Title of Comic</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 
                     1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, 
                      but also the leap into electronic typesetting, remaining essentially 
                      unchanged. It was popularised in the 1960s with the release of Letraset 
                      sheets containing Lorem Ipsum passages, and more recently with desktop 
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
=======
               <BackSide>
               <h1>Title of Comic</h1>
                <p>Description of Comic:</p>
>>>>>>> main
                <p>Price:</p>
              
               </BackSide>
            </Flippy>
<<<<<<< HEAD
           
=======
            {/* </Card> */}
>>>>>>> main
        </div>
    );
}

export default Cards
