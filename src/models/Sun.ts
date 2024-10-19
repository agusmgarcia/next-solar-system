import * as Three from "three";

import sunTexture from "#public/assets/sun.jpg";

export default class Sun extends Three.Mesh {
  private readonly pointLight: Three.PointLight;

  constructor() {
    super(
      new Three.SphereGeometry(16, 30, 30),
      new Three.MeshBasicMaterial({
        map: new Three.TextureLoader().load(sunTexture.src),
      }),
    );

    this.add((this.pointLight = new Three.PointLight(0xffffff, 2, 300)));
  }

  dispose(): void {
    this.pointLight.dispose();
    this.geometry.dispose();
    (this.material as Three.Material).dispose();
  }
}
