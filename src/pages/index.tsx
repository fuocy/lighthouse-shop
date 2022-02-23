import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline font-jakarta">Hello world!</h1>
  );
};

export default Home;

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }
