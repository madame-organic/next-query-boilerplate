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
            <Html lang="en">
                <Head>
                    <title>Madame Organic HOME page</title>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Madame Organic is sth..." />
                    <meta name="keywords" content="Madame Organic" />
                    <meta name="author" content="Bchu Dev" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <body className="body">
                    <h1>HELLO</h1>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
