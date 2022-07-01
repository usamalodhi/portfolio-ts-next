import Head from 'next/head';
import { HeadProps } from '../../ts/interfaces/HeadProps';

export const HeadComponent = ({ contentTitle, contentDescription }: HeadProps) => {
  return (
    <Head>
      <meta property='og:title' content={contentTitle} />
      <meta property='og:description' content={contentDescription} />
      <meta property='og:url' content='https://example.com' />
      <meta property='og:type' content='website' /> <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
