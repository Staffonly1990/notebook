import { Circle } from "./circle";

import { key } from "../types/keys";
import { ICircleSettings } from "../interfaces/circle-settings";

export class Figures {

  circles: { [key: number]: Circle };
  countCircles: number;

  constructor() {
    this.circles = {};
    this.countCircles = 0;
  };

  addCircle = (settings: Omit<ICircleSettings, 'index'>) => {

    this.circles = {
      ...this.circles,
      [this.countCircles]: new Circle({ ...settings, index: this.countCircles })
    };

    this.countCircles++;

  };

  deleteCircle = (key: number) => {
    delete this.circles[key]
  };
};
