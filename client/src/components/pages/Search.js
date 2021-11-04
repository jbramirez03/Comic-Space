
import React from "react";
import InputUnstyled from '@mui/core/InputUnstyled';
import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import SearchResults from "./components/SearchResults"

const StyledInputElement = styled('input')`
  width: 800px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
  });

  export default function Search() {
    return ( 
        <>
   
         
          
          <Container maxWidth="max" style={{ backgroundColor:"#001f5c"}} >
            <div style={{ display: "flex", flexDirection: "row", marginTop: "5px", opacity:".8"}}>
                <CustomInput aria-label="Demo input" placeholder="Looking for something?" />
                <Button size="Large">Find</Button>
            </div>
        </Container>
      
          
      
       
            </>
    );
}