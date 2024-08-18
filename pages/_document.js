import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="Développé avec NextJS et TailwindCSS" />
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1dyraWCVZ2G8xkzkYDa0ybHrbBrAaKgQO" />
        <meta property="og:url" content="https://portfolio-main-khaki-iota.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
