import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
