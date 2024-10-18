import useHomePage from "./HomePage.hooks";
import type HomePageProps from "./HomePage.types";

export default function HomePage(props: HomePageProps) {
  const {} = useHomePage(props);

  return <div>Hello HomePage</div>;
}
