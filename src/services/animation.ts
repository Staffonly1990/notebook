import { position } from "../interfaces/circle-settings";
import { Circle } from "./circle";
import { Figures } from "./figures";

class CanvasAnimation {

  frameId: number | null;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  xMouse: number | null;
  yMouse: number | null;
  figures: Figures;

  constructor() {
    this.frameId = null;
    this.ctx = null;
    this.canvas = null;
    this.xMouse = null;
    this.yMouse = null;
    this.figures = new Figures();
  }

  private getCtx = (ctx?: CanvasRenderingContext2D | null) => {
    ctx ? this.ctx = ctx : null
  }

  private setMousePosition = (e: any) => {
    this.xMouse = e.clientX;
    this.yMouse = e.clientY;
  }

  private draw = () => {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      Object.values(this.figures.circles).forEach(({ radius, position, setPosition, render, index }) => {

        const gravityPosition = this.gravity(radius, position)

        if ((position[1] < this.ctx!.canvas.height - radius) && !this.collision(radius, position, index)) setPosition(gravityPosition);
        // if (position[1] > 310 - radius) this.figures.deleteCircle(index);

        render(this.ctx);

      })

    }
  };

  click = () => {
    this.xMouse && this.yMouse &&
      this.figures.addCircle({
        color: 'green',
        position: [this.xMouse, this.yMouse],
        radius: Math.random() * (50 - 10) + 10,
        style: 'strokeStyle'
      });
  }

  collision = (haveRadius: number, havePosition: position, haveIndex: number): boolean => {
    const haveDiameter = haveRadius * 2;
    const haveX = havePosition[0] - haveRadius;
    const haveY = havePosition[1] - haveRadius;

    let XColl: boolean = false;
    let YColl: boolean = false;

    Object.values(this.figures.circles).forEach(({ index, position, radius }) => {
      if (haveIndex != index) {

        const diameter = radius * 2;
        const x = position[0] - radius;
        const y = position[1] - radius;

        if ((haveX + haveDiameter >= x) && (haveX <= x + diameter)) XColl = true;
        if ((haveY + haveDiameter >= y) && (haveY <= y + diameter)) YColl = true;
      }
    });

    return XColl && YColl;
  }

  gravity = (mass: number, havePosition: position): position => {
    return [havePosition[0], havePosition[1] + mass / 10]
  };

  render = () => {
    this.draw();
    this.frameId = window.requestAnimationFrame(this.render);
  }

  getCanvas = (canvas: HTMLCanvasElement | null) => {
    this.canvas = canvas;
    this.getCtx(canvas?.getContext('2d'));
  }

  eventMousemove = () => {
    this.canvas?.addEventListener("mousemove", this.setMousePosition);
  }

  eventResize = () => {
    window.addEventListener("resize", this.setSizeWindow);
  }

  eventClick = () => {
    this.canvas?.addEventListener("click", this.click);
  }

  setSizeWindow = () => {
    this.canvas?.setAttribute('height', `${window.innerHeight}px`);
    this.canvas?.setAttribute('width', `${window.innerWidth}px`);
  }

  clearEvents = () => {
    window.removeEventListener("resize", this.setSizeWindow);
    this.frameId && window.cancelAnimationFrame(this.frameId);
    this.canvas?.removeEventListener("mousemove", this.setMousePosition);
    this.canvas?.removeEventListener("click", this.click);
  }
}

export const animation = new CanvasAnimation();