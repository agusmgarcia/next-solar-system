import { useEffect, useRef } from "react";

import { Camera, Renderer, Space, Sun } from "#src/models";

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

    let lastTime = 0;

    renderer.setAnimationLoop(function animate(now) {
      const delta = now - lastTime;
      lastTime = now;

      sun.rotateY(0.0004 * delta);
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
