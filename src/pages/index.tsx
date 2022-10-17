import type { NextPage } from "next";
import Head from "next/head";

import PageWrap from "../components/PageWrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brainstem</title>
        <meta name="description" content="An application to help you manage your mind." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col pt-14">
        <PageWrap>
          <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
            Home
          </h1>
        </PageWrap>
      </main>
    </>
  );
};

export default Home;
