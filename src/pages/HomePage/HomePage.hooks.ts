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
    if (canvas === null) return;

    const renderer = new Renderer(canvas);

    const camera = new Camera();
    camera.position.set(-90, 140, 140);
    camera.lookAt(0, 0, 0);

    const space = new Space();

    const sun = new Sun();
    space.add(sun);

    const mercury = new Mercury();
    mercury.planet.position.x = 28;
    mercury.rotateY(Math.random() * 360);
    space.add(mercury);

    const venus = new Venus();
    venus.planet.position.x = 44;
    venus.rotateY(Math.random() * 360);
    space.add(venus);

    const earth = new Earth();
    earth.planet.position.x = 62;
    earth.rotateY(Math.random() * 360);
    space.add(earth);

    const mars = new Mars();
    mars.planet.position.x = 78;
    mars.rotateY(Math.random() * 360);
    space.add(mars);

    const jupiter = new Jupiter();
    jupiter.planet.position.x = 100;
    jupiter.rotateY(Math.random() * 360);
    space.add(jupiter);

    const saturn = new Saturn();
    saturn.planet.position.x = 138;
    saturn.rotateY(Math.random() * 360);
    space.add(saturn);

    const uranus = new Uranus();
    uranus.planet.position.x = 176;
    uranus.rotateY(Math.random() * 360);
    space.add(uranus);

    const neptune = new Neptune();
    neptune.planet.position.x = 200;
    neptune.rotateY(Math.random() * 360);
    space.add(neptune);

    const pluto = new Pluto();
    pluto.planet.position.x = 216;
    pluto.rotateY(Math.random() * 360);
    space.add(pluto);

    let lastTime = 0;

    renderer.setAnimationLoop(function animate(now) {
      const deltaTime = now - lastTime;
      lastTime = now;

      // Self-rotation
      sun.rotateY(0.0004 * deltaTime);
      mercury.planet.rotateY(0.0004 * deltaTime);
      venus.planet.rotateY(0.0002 * deltaTime);
      earth.planet.rotateY(0.002 * deltaTime);
      mars.planet.rotateY(0.0018 * deltaTime);
      jupiter.planet.rotateY(0.004 * deltaTime);
      saturn.planet.rotateY(0.0038 * deltaTime);
      uranus.planet.rotateY(0.003 * deltaTime);
      neptune.planet.rotateY(0.0032 * deltaTime);
      pluto.planet.rotateY(0.0008 * deltaTime);

      // Around-sun-rotation
      mercury.rotateY(0.004 * deltaTime);
      venus.rotateY(0.0015 * deltaTime);
      earth.rotateY(0.001 * deltaTime);
      mars.rotateY(0.0008 * deltaTime);
      jupiter.rotateY(0.0002 * deltaTime);
      saturn.rotateY(0.00009 * deltaTime);
      uranus.rotateY(0.00004 * deltaTime);
      neptune.rotateY(0.00001 * deltaTime);
      pluto.rotateY(0.000007 * deltaTime);

      renderer.render(space, camera);
    });

    return () => {
      sun.dispose();
      space.dispose();
      camera.dispose();
      renderer.dispose();
    };
  }, []);

  return { ...props, ref };
}
