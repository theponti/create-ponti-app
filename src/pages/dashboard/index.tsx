import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

import PageWrap from "../../components/PageWrap";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brainstem</title>
        <meta
          name="description"
          content="An application to help you manage your mind."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageWrap>
          <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
            Dashboard
          </h1>
        </PageWrap>
      </main>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        // Use `false` to prevent browser caching
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Dashboard;
