import React from 'react';
import Head from "next/head";
import Script from 'next/script'

interface Props {
  title?: string,
  description?: string,
  image?: string,
}

export default function SeoHead(props: Props) {
  const title = props.title || "UMA - Universal Market Access";
  const description = props.description || "An optimistic oracle built for web3";
  const image = props.image || '/UMA_square_red_logo.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@UMAprotocol" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://umaproject.org" />

      <link rel="icon" type="image/png" href="assets/images/favicon-32x32.png" sizes="32x32" />
	    <link rel="icon" type="image/png" href="assets/images/favicon-16x16.png" sizes="16x16" />
      <link rel="mask-icon" href="assets/images/safari-pinned-tab.svg" color="#FF4A4A" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-130599982-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-130599982-1');
        `}
      </Script>
    </Head>
  );
}
