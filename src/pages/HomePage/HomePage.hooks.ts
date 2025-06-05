import { useEffect, useRef } from "react";

import {
  Camera,
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Pluto,
  Renderer,
  Saturn,
  Space,
  Sun,
  Uranus,
  Venus,
} from "#src/models";

import type HomePageProps from "./HomePage.types";

export default function useHomePage(props: HomePageProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const space = new Space();

    const sun = new Sun();
    space.add(sun);

    const planets = PLANETS.map((p) => ({
      currentRotation: 0,
      deltaRotation: p.deltaRotation,
      distanceFromSun: p.distanceFromSun,
      instance: new p.Instance(),
      selfRotation: p.selfRotation,
    }));
    planets.forEach((p) => {
      p.instance.position.x = p.distanceFromSun;
      sun.add(p.instance);
    });

    let lastTime = 0;

    const camera = new Camera();
    camera.position.set(0, 216, 216);
    camera.lookAt(0, 0, 0);

    const renderer = new Renderer(canvas);
    renderer.setAnimationLoop(function animate(now) {
      const deltaTime = now - lastTime;
      lastTime = now;

      // Self-rotation
      sun.rotateY(0.0004 * deltaTime);
      planets.forEach((p) => p.instance.rotateY(p.selfRotation * deltaTime));

      // Around-sun-rotation
      planets.forEach((p) => {
        const angle = (p.currentRotation += p.deltaRotation * deltaTime);

        const x = sun.position.x + p.distanceFromSun * Math.sin(angle);
        const z = sun.position.z + p.distanceFromSun * Math.cos(angle);
        const y = sun.position.y;

        p.instance.position.set(x, y, z);
      });

      renderer.render(space, camera);
    });

    return () => {
      renderer.dispose();
      camera.dispose();
      planets.forEach((p) => p.instance.dispose());
      sun.dispose();
      space.dispose();
    };
  }, []);

  return { ...props, ref };
}

const PLANETS = [
  {
    deltaRotation: 0.004,
    distanceFromSun: 28,
    Instance: Mercury,
    selfRotation: 0.0004,
  },
  {
    deltaRotation: 0.0015,
    distanceFromSun: 44,
    Instance: Venus,
    selfRotation: 0.0002,
  },
  {
    deltaRotation: 0.001,
    distanceFromSun: 62,
    Instance: Earth,
    selfRotation: 0.002,
  },
  {
    deltaRotation: 0.0008,
    distanceFromSun: 78,
    Instance: Mars,
    selfRotation: 0.0018,
  },
  {
    deltaRotation: 0.0002,
    distanceFromSun: 100,
    Instance: Jupiter,
    selfRotation: 0.004,
  },
  {
    deltaRotation: 0.00009,
    distanceFromSun: 138,
    Instance: Saturn,
    selfRotation: 0.0038,
  },
  {
    deltaRotation: 0.00004,
    distanceFromSun: 176,
    Instance: Uranus,
    selfRotation: 0.003,
  },
  {
    deltaRotation: 0.00001,
    distanceFromSun: 200,
    Instance: Neptune,
    selfRotation: 0.0032,
  },
  {
    deltaRotation: 0.000007,
    distanceFromSun: 216,
    Instance: Pluto,
    selfRotation: 0.0008,
  },
];
