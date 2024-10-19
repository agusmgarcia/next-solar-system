import { type Func } from "@agusmgarcia/react-core";
import * as Three from "three";

export default class Renderer extends Three.WebGLRenderer {
  private readonly handleResize: Func;

  constructor(canvas: HTMLCanvasElement) {
    super({ canvas });
    this.setSize(window.innerWidth, window.innerHeight, false);
    this.setPixelRatio(window.devicePixelRatio);

    this.handleResize = () =>
      this.setSize(window.innerWidth, window.innerHeight, false);

    window.addEventListener("resize", this.handleResize);
  }

  override dispose(): void {
    window.removeEventListener("resize", this.handleResize);
    super.dispose();
  }
}
