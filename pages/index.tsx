import Head from "next/head";

import { HomePage } from "#src/pages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solar System</title>
      </Head>

      <HomePage />
    </>
  );
}
