import type { GetServerSidePropsContext, NextPage } from "next";
import { getServerSideProtectedProps } from "src/utils";

const Dashboard: NextPage = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Dashboard
      </h1>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const response = await getServerSideProtectedProps(ctx);
  return response;
}

export default Dashboard;
