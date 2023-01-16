import { createContainer, makeAlphabeticalId, cleanupContainer } from './snackbar.stories';
import { render } from 'react-dom'

enum SnackbarPlacement {
  TopStart = 'top-start',
  TopEnd = 'top-end',
  TopCenter = 'top-center',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  BottomCenter = 'bottom-center'
}

enum SnackbarLeftSideStates {
  None = 'NONE',
  WithIcon = 'WITH_ICON',
  WithTimer = 'WITH_Timer'
}

export enum SnackbarStates {
  INFO = 'infoTertiary',
  ERROR = 'warning',
  ACCEPTED = 'brand',
  NotMatter = 'additional60'
}

export interface SnackbarProps {
  title: string
  actionTitle?: string
  description?: string
  status?: string
  colorScheme?: SnackbarLeftSideStates
  onReject?: () => void
  onClose?: () => void
  placement?: SnackbarPlacement
}

export const noop = () => undefined;

export const showSnackbar = ({ onReject = noop, onClose = noop, ...rest }: SnackbarProps): void => {
  const container = createContainer(`${process.env.PKG_ID as string}-snackbar-${makeAlphabeticalId(5)}`);
  const unmount = () => cleanupContainer(container);

  // render(
  //   <Snackbar {...rest}>
  // 
  //   </Snackbar>
  // );
}