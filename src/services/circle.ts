import { ICircleSettings, position } from "../interfaces/circle-settings"

export class Circle implements ICircleSettings {

  index
  color
  radius
  style
  position

  constructor({ color, radius, style, position, index }: ICircleSettings) {
    this.color = color;
    this.radius = radius;
    this.style = style;
    this.position = position
    this.index = index
  }

  setPosition = (position: position) => {
    this.position = position
  }

  getPosition = () => {
    return this.position
  }

  setRadius = (radius: number) => {
    this.radius = radius;
  }

  render = (ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      ctx.beginPath()

      if (this.style === 'strokeStyle') ctx.strokeStyle = this.color;
      if (this.style === 'fillStyle') ctx.fillStyle = this.color;

      ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI)

      if (this.style === 'strokeStyle') ctx.stroke();
      if (this.style === "fillStyle") ctx.fill();
    }
  }
}