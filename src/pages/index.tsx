import type { NextPage } from "next";
import Head from "next/head";

import PageWrap from "../components/PageWrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Ponti App</title>
        <meta
          name="description"
          content="An application to help you manage your mind."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageWrap className="mt-48 relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="ml-auto">
              <div className="lg:w-4/5 text-center mx-auto">
                <h1 className="text-gray-400 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  Built for{" "}
                  <span className="text-primary dark:text-white">
                    imagineers.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </PageWrap>
      </main>
    </>
  );
};

export default Home;
