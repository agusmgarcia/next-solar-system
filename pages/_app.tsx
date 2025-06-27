import "./_app.css";

import { type AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`}
          rel="icon"
          type="image/x-icon"
        />
      </Head>

      <div className="relative h-dvh w-screen overflow-hidden">
        <Component />

        <p className="absolute right-2 bottom-2 bg-transparent font-sans text-base text-white">
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </p>
      </div>
    </>
  );
}
