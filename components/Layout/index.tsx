import { ReactNode } from 'react';
import Head from 'next/head';
import styles from './styles.module.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Joga+ UFCG</title>
        <meta
          name="description"
          content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#233043" />
        <meta name="msapplication-navbutton-color" content="#233043" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#233043" />

        <meta name="application-name" content="Joga+ UFCG" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Joga+ UFCG" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/brand/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/brand/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/brand/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="Joga+ UFCG" />
        <meta
          name="twitter:description"
          content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site"
        />
        <meta
          name="twitter:image"
          content="https://jogamais.vercel.app/brand/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@jogamais-ufcg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Joga+ UFCG" />
        <meta
          property="og:description"
          content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site"
        />
        <meta property="og:site_name" content="Joga+ UFCG" />
        <meta property="og:url" content="https://jogamais.vercel.app" />
        <meta
          property="og:image"
          content="https://jogamais.vercel.app/icons/apple-touch-icon.png"
        />
      </Head>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}

export default Layout;
