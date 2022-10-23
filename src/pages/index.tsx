import type { NextPage } from "next";

import PageWrap from "../components/PageWrap";

const Home: NextPage = () => {
  return (
    <PageWrap className="relative mt-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
        <div className="ml-auto">
          <div className="mx-auto text-center lg:w-4/5">
            <h1 className="text-5xl font-bold text-gray-400 dark:text-white md:text-6xl xl:text-7xl">
              Built for{" "}
              <span className="text-primary dark:text-white">imagineers.</span>
            </h1>
          </div>
        </div>
      </div>
    </PageWrap>
  );
};

export default Home;
