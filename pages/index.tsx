import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta property='og:title' content='Usama Lodhi | Front End Web Developer' />
        <meta property='og:description' content='React wizard, CSS Mysfit' />
        <meta property='og:url' content='https://example.com' />
        <meta property='og:type' content='website' /> <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>This is the index page</h1>

        <p>This is the index page text</p>
      </main>
    </div>
  );
};

export default Home;
