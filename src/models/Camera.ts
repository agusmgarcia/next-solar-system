import { type Func } from "@agusmgarcia/react-core";
import * as Three from "three";

export default class Camera extends Three.PerspectiveCamera {
  private readonly handleResize: Func;

  constructor() {
    super(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.handleResize = () => {
      this.aspect = window.innerWidth / window.innerHeight;
      this.updateProjectionMatrix();
    };

    window.addEventListener("resize", this.handleResize);
  }

  dispose(): void {
    window.removeEventListener("resize", this.handleResize);
  }
}
