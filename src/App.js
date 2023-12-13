import BaseLayout from "./BaseLayout";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {Grid} from "@mui/material";
import Style from './BaseLayout.module.scss'
  
function App() {
  return (
    <div className={Style.dark}>
      <BrowserRouter>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<BaseLayout />} />
            <Route exact path={"/*"} element={<BaseLayout />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </div>
  );
}
export default App;
