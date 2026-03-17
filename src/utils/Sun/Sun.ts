import * as Three from "three";

import sunTexture from "#public/assets/sun.jpg";

export default class Sun extends Three.Mesh<
  Three.SphereGeometry,
  Three.MeshBasicMaterial
> {
  private readonly pointLight: Three.PointLight;

  constructor() {
    super(
      new Three.SphereGeometry(16, 30, 30),
      new Three.MeshBasicMaterial({
        map: new Three.TextureLoader().load(sunTexture.src),
      }),
    );

    this.pointLight = new Three.PointLight(0xffffff, 20000, 300);
    this.add(this.pointLight);
  }

  dispose(): void {
    this.remove(this.pointLight);
    this.pointLight.dispose();
    this.geometry.dispose();
    this.material.dispose();
  }
}
