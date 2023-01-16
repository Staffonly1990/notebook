import { FC, useRef } from "react";
import { useClickAway } from 'react-use';
import { Portal } from "./portal";

import { noop, SnackbarProps, SnackbarStates } from "./showSnackbar";

export const Snackbar: FC<SnackbarProps> = ({
  onReject = noop,
  onClose = noop,
  title,
  description,
  actionTitle,
  status,
  colorScheme = SnackbarStates.INFO,
  placement
}) => {
  const ref = useRef(null);
  useClickAway(ref, onClose);

  return (
    <Portal>
      <div ref={ref}>

      </div>
    </Portal>
  );
}