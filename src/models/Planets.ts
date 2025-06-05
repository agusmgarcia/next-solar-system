import * as Three from "three";

abstract class Planet extends Three.Mesh<
  Three.SphereGeometry,
  Three.MeshStandardMaterial
> {
  protected static readonly LOADER = new Three.TextureLoader();

  constructor(size: number, texture: string) {
    super(
      new Three.SphereGeometry(size, 30, 30),
      new Three.MeshStandardMaterial({
        map: Planet.LOADER.load(texture),
      }),
    );
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
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
  private readonly ring: Three.Mesh<
    Three.RingGeometry,
    Three.MeshBasicMaterial
  >;

  constructor() {
    super(10, require("#public/assets/jupiter.jpg").default.src);

    this.ring = new Three.Mesh(
      new Three.RingGeometry(10, 20, 32),
      new Three.MeshBasicMaterial({
        map: Planet.LOADER.load(
          require("#public/assets/saturn-ring.png").default.src,
        ),
        side: Three.DoubleSide,
      }),
    );
    this.ring.rotation.x = -0.5 * Math.PI;
    this.add(this.ring);
  }

  override dispose(): void {
    this.remove(this.ring);
    this.ring.geometry.dispose();
    this.ring.material.dispose();
    super.dispose();
  }
}

export class Uranus extends Planet {
  private readonly ring: Three.Mesh<
    Three.RingGeometry,
    Three.MeshBasicMaterial
  >;

  constructor() {
    super(7, require("#public/assets/uranus.jpg").default.src);

    this.ring = new Three.Mesh(
      new Three.RingGeometry(7, 12, 32),
      new Three.MeshBasicMaterial({
        map: Planet.LOADER.load(
          require("#public/assets/uranus-ring.png").default.src,
        ),
        side: Three.DoubleSide,
      }),
    );
    this.ring.rotation.x = -0.5 * Math.PI;
    this.add(this.ring);
  }

  override dispose(): void {
    this.remove(this.ring);
    this.ring.geometry.dispose();
    this.ring.material.dispose();
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
