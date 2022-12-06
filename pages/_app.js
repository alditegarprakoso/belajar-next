import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Belajar Next.js</title>
        <meta
          name="description"
          content="Belajar Next.js itu menyenangkan bukan ? Bukan !"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
