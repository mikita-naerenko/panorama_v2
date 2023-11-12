import { Html, Head, Main, NextScript } from 'next/document'

const Favicon = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./favicon/apple-touch-icon.png"
    />
    <link
      rel="androin-chrome"
      sizes="192x192"
      href="./favicon/android-chrome-192x192.png"
    />
    <link
      rel="androin-chrome"
      sizes="512x512"
      href="./favicon/android-chrome-512x512.png"
    />
    <link
      rel="icon"
      href="./favicon/favicon.ico"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./favicon/favicon-16x16.png"
    />
  </>
);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Favicon/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
