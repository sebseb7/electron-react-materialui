import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useEffect, useState } from "react";



export default function MyApp() {
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
  	const headerHeight = document.getElementById('header').offsetHeight;;

    setWindowHeight(window.innerHeight - headerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);


  return (
    <div style={{padding:'0px'}}>
	  <CssBaseline/>
      <div id="header" style={{padding:'20px'}}>
      	<Button variant="contained">Hello World</Button>
      </div>
	  <div style={{marginTop:'0px',width:'100%'}}>

	  <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: windowHeight,
        '& ul': { padding: 0 },
      }}
    >
        <li key={`section`}>
          <ul>
              <ListItem key={`item1`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item2`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item3`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item4`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item5`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item6`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item7`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item8`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item9`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item10`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item11`}>
                <ListItemText primary={`Item`} />
              </ListItem>
              <ListItem key={`item12`}>
                <ListItemText primary={`Item`} />
              </ListItem>
          </ul>
        </li>
    </List>


	  </div>
    </div>
  );
}

