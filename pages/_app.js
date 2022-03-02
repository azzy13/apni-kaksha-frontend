import '../styles/globals.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
