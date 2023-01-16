import { createPortal } from 'react-dom';
import type { FC, ReactNode } from 'react';

export interface PortalProps {
  container?: Element;
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({
  container = document.body,
  children
}) => createPortal(children, container);