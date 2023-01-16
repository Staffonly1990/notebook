import React, { FC, useEffect, useState } from "react";
import { Route, Routes, unstable_HistoryRouter as HistoryRouter, useNavigate } from 'react-router-dom'

import { Canvas } from "./components/canvas/canvas";
import { Random } from "./components/random/random";
import { InitService } from "./services/init";
import { useStores } from "./store/provider";
import { PopupContainer } from './components/popup-container/popup-container';

import './styles.css';
import { popupService } from "./services/popup-service";

export const App = () => {

  const { } = useStores();

  const nav = useNavigate();

  useEffect(() => {

    // if (isInit) {
    //   return
    // }

    InitService.init();
  }, [])

  // const getHistory = (): any => {
  //   let res;
  //   return res
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="*" element={<div style={{ color: 'white' }} >404</div>} />
      </Routes>
      <PopupContainer component={<div style={{ color: 'white' }} >12321</div>} />
    </div>

  );
}