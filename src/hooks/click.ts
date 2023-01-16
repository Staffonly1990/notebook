import { useEffect, RefObject } from "react";

interface IUseOutsideClick {
  insideElement: RefObject<HTMLElement>
  shouldStartListen(): boolean
  callback(event: MouseEvent): void
}

export const useOutsideClick = ({ callback, insideElement, shouldStartListen }: IUseOutsideClick) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (insideElement.current && !insideElement.current.contains(event.target as HTMLElement)) {
        callback(event);
      }
    }

    if (shouldStartListen()) {
      document.addEventListener('mousedown', listener);
    }

    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [insideElement, shouldStartListen, callback])

}