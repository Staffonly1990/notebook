import { unmountComponentAtNode } from "react-dom";

export const createContainer = (id = 'modal-container'): HTMLDivElement => {
  const container = document.createElement('div');
  container.id = id;
  document.body.appendChild(container);

  return container;
}

export const cleanupContainer = (container: HTMLDivElement) => {
  unmountComponentAtNode(container);
  container.parentNode?.removeChild(container);
}

export const makeAlphabeticalId = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const { length: charactersLength } = characters;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result;
}
