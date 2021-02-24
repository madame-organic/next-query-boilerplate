import
    Document,
    { DocumentContext, Html, Head, Main, NextScript }
from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx);
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <title>Madame Organic: MO subtitle</title>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Madame Organic is sth..." />
                    <meta name="keywords" content="Madame Organic, beauty soap, foundation, makeup" />
                    <meta name="author" content="Bchu Dev" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body className="body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
