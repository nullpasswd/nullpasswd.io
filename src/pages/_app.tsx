import type { AppProps } from 'next/app';

import 'normalize.css';
import '../styles/themes/dark.css';
import '../styles/themes/light.css';
import '../styles/globals.scss';

import '../styles/twemoji-amazing.css';

import Head from 'next/head';
import Layout from '../components/layout';

export default function Site({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    setTimeout(() => document.querySelector('html')?.classList.remove('preload'), 1);
  }

  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href='/favicon.png'
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
