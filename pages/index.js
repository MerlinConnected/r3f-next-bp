import Head from 'next/head';
import Scene from '../components/gl/Scene';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS & R3F Boilerplate</title>
        <meta name="description" content="To be written." />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Scene />
    </>
  );
}
