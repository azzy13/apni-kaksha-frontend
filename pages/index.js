import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../components/common/Carousel';
import Form from '../components/common/Form';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-8 col-xs-12 col-sm-12'>
          <Carousel />
        </div>
        <div className='col-md-4 col-xs-12 col-sm-12'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
