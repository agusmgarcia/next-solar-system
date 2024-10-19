import * as Three from "three";

import starsTexture from "#public/assets/background.jpeg";

export default class Space extends Three.Scene {
  private readonly ambientLight: Three.AmbientLight;

  constructor() {
    super();

    this.background = new Three.CubeTextureLoader().load([
      starsTexture.src,
      starsTexture.src,
      starsTexture.src,
      starsTexture.src,
      starsTexture.src,
      starsTexture.src,
    ]);

    this.add((this.ambientLight = new Three.AmbientLight(0x333333)));
  }

  dispose(): void {
    this.ambientLight.dispose();
  }
}
