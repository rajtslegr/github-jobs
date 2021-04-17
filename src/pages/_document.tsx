import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<{
    html: string;
    head?: (JSX.Element | null)[] | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styles?: ReactElement<any, string | JSXElementConstructor<any>>[] | ReactFragment | undefined;
  }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <meta property="title" content="GitHub Jobs" />
          <meta name="description" content="GitHub Jobs" />
          <meta name="keywords" content="github, jobs" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
