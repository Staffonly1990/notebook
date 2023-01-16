import React, { FC, Fragment, useCallback, useEffect, useRef, useState } from "react"
import { useClickAway } from 'react-use';

import styles from "./popup-container.module.css"
import { popupService } from "../../services/popup-service";

interface IPopupContainer {
  component: JSX.Element;
}

export const PopupContainer: FC<IPopupContainer> = ({ component }) => {

  const { close, setFun, fun } = popupService;

  const [show, setShow] = useState<boolean>()

  const ref = useRef(null);

  useClickAway(ref, close);

  // useEffect(() => {
  //   popupService.setFunckShow(() => setShow(!show));
  // }, [])

  if (!fun) setFun(setShow);

  if (!show) return null;

  return (
    <div ref={ref} className={styles.container} >
      {component}
    </div>
  )
}