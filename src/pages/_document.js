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
        <title>Панорама 3Д туры в Краснодаре</title>
        <meta name="description" content="Создать 3д тур в Краснодаре, разместить на гугл картах или яндекс картах" />
        <meta name="keywords" content="3Д тур, Панорманые снимки в Краснодаре, Аэропанормама 360 градусов, Панорманые фото для яндекс карт, Краснодар, Видео 360 градусов," />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
