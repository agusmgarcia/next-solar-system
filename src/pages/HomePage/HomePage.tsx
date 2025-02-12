import useHomePage from "./HomePage.hooks";
import type HomePageProps from "./HomePage.types";

export default function HomePage(props: HomePageProps) {
  const { ref } = useHomePage(props);

  return <canvas ref={ref} className="size-full" />;
}
