import React, { FC, useEffect, useRef } from "react";

import { animation } from "../../services/animation";

import styles from "./canvas.module.css";

export const Canvas: FC = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    render,
    getCanvas,
    setSizeWindow,
    clearEvents,
    eventMousemove,
    eventResize,
    eventClick
  } = animation;

  useEffect(() => {

    getCanvas(canvasRef.current);
    setSizeWindow();

    eventMousemove();
    eventResize();
    eventClick();

    render();

    return () => clearEvents();

  }, [])

  return <canvas className={styles.size} ref={canvasRef} />
};