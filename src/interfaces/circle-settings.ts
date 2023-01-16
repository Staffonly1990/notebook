import { figuresStyles } from "../types/figures-styles";
import { key } from "../types/keys";

export type position = [x: number, y: number];
export type color = 'red' | 'blue' | 'green'

export interface ICircleSettings {

  readonly index: number
  readonly position: position;
  readonly color: color,
  readonly radius: number,
  readonly style: figuresStyles
}