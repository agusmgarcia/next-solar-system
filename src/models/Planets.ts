import * as Three from "three";

abstract class Planet extends Three.Object3D {
  readonly planet: Three.Mesh;

  constructor(size: number, texture: string) {
    super();

    this.add(
      (this.planet = new Three.Mesh(
        new Three.SphereGeometry(size, 30, 30),
        new Three.MeshStandardMaterial({
          map: new Three.TextureLoader().load(texture),
        }),
      )),
    );
  }

  dispose(): void {
    this.planet.geometry.dispose();
    (this.planet.material as Three.Material).dispose();
  }
}

export class Mercury extends Planet {
  constructor() {
    super(3.2, require("#public/assets/mercury.jpg").default.src);
  }
}

export class Venus extends Planet {
  constructor() {
    super(5.8, require("#public/assets/venus.jpg").default.src);
  }
}

export class Earth extends Planet {
  constructor() {
    super(6, require("#public/assets/earth.jpg").default.src);
  }
}

export class Mars extends Planet {
  constructor() {
    super(4, require("#public/assets/mars.jpg").default.src);
  }
}

export class Jupiter extends Planet {
  constructor() {
    super(12, require("#public/assets/jupiter.jpg").default.src);
  }
}

export class Saturn extends Planet {
  private readonly ring: Three.Mesh;

  constructor() {
    super(10, require("#public/assets/jupiter.jpg").default.src);

    this.planet.add(
      (this.ring = new Three.Mesh(
        new Three.RingGeometry(10, 20, 32),
        new Three.MeshBasicMaterial({
          map: new Three.TextureLoader().load(
            require("#public/assets/saturn-ring.png").default.src,
          ),
          side: Three.DoubleSide,
        }),
      )),
    );
    this.ring.rotation.x = -0.5 * Math.PI;
  }

  override dispose(): void {
    this.ring.geometry.dispose();
    (this.ring.material as Three.Material).dispose();
    super.dispose();
  }
}

export class Uranus extends Planet {
  private readonly ring: Three.Mesh;

  constructor() {
    super(7, require("#public/assets/uranus.jpg").default.src);

    this.planet.add(
      (this.ring = new Three.Mesh(
        new Three.RingGeometry(7, 12, 32),
        new Three.MeshBasicMaterial({
          map: new Three.TextureLoader().load(
            require("#public/assets/uranus-ring.png").default.src,
          ),
          side: Three.DoubleSide,
        }),
      )),
    );
    this.ring.rotation.x = -0.5 * Math.PI;
  }

  override dispose(): void {
    this.ring.geometry.dispose();
    (this.ring.material as Three.Material).dispose();
    super.dispose();
  }
}

export class Neptune extends Planet {
  constructor() {
    super(7, require("#public/assets/neptune.jpg").default.src);
  }
}

export class Pluto extends Planet {
  constructor() {
    super(2.8, require("#public/assets/pluto.jpg").default.src);
  }
}
