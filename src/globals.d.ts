// global.d.ts

declare module '*.png';
declare module '*.svg';
declare module '*module.css' {
  const classes: { [index: string]: string };
  export default classes;
}