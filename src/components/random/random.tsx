import React, { FC, useEffect, useRef } from "react";
import { popupService } from "../../services/popup-service";

import styles from "./random.module.css";

export const Random: FC = () => {

  const { open } = popupService;

  return <div style={{ color: 'white' }}>Random
    <button onClick={open} >Click</button>
  </div>
};