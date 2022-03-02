import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
