import "./_app.css";

import { type AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="favicon.ico" rel="icon" type="image/x-icon" />
      </Head>

      <div className="relative h-screen w-screen overflow-hidden">
        <Component />

        <p className="absolute bottom-2 right-2 bg-transparent font-sans text-base text-white">
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </p>
      </div>
    </>
  );
}
