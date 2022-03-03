import React from 'react';
import Instagram from '../../public/assets/icons/LandingPage/instagram.svg';
import Linkedin from '../../public/assets/icons/LandingPage/linkdin.svg';
import Facebook from '../../public/assets/icons/LandingPage/facebook.svg';
import Twitter from '../../public/assets/icons/LandingPage/twitter.svg';
import Youtube from '../../public/assets/icons/LandingPage/youtube.svg';
import Logo from '../../public/assets/logos/Logo.jpeg';
import Image from 'next/image';

import footerStyles from '../../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={footerStyles.primary_bg_color}>
      <div className={`container ${footerStyles.pt_6}`}>
        <div className='row'>
          <div className='col-5'>
            <div className=''>
              <Image src={Logo} width={200} height={200} />
            </div>
          </div>

          <div className='col-3'>
            <div className='d-flex'>
              <div className={footerStyles.secondary_color}>
                <h5>Contact Us</h5>
                <div className='text-sm'>
                  <p className='mb-2'>
                    E-mail:{' '}
                    <a
                      className={footerStyles.secondary_color}
                      href='mailto:support@apnikaksha.net'
                    >
                      support@apnikaksha.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <div className='flex flex-wrap footerStyles.'>
              <div className={footerStyles.secondary_color}>
                <h5>Our Channels</h5>
                <div className='text-sm'>
                  <p className='mb-2'>hardcode</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <div className='flex flex-wrap'>
              <div className={footerStyles.secondary_color}>
                <h5>Support</h5>

                <li
                  className={`font-weight-bold ${footerStyles.secondary_color} ${footerStyles.links}`}
                >
                  <Link href='/legal/privacy-policy'>Privacy Policy</Link>
                </li>
                <li className='py-1 list-unstyled'>
                  <Link href='/legal/refund-policy'>
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li className='py-1 list-unstyled'>
                  <Link href='/legal/terms-and-conditions'>
                    Terms and conditions
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4 mx-auto'>
          <div className='col d-flex justify-content-center mx-auto'>
            <div className='py-4 mx-auto'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/dhattarwalaman/'
                className='mx-4 '
              >
                <Image
                  src={Instagram}
                  alt='social-icon'
                  height={40}
                  width={40}
                />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.youtube.com/channel/UCmXZxX_qexEZxhb5_vQKPCw'
                className='mx-4'
              >
                <Image
                  className='h-25 w-25'
                  src={Youtube}
                  alt='social-icon'
                  height={40}
                  width={40}
                />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/amandhattarwal/'
                className='mx-4'
              >
                <Image src={Twitter} alt='social-icon' height={40} width={40} />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/dhattarwalaman/'
                className='mx-4'
              >
                <Image
                  src={Linkedin}
                  alt='social-icon'
                  height={40}
                  width={40}
                />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/dhattarwalaman'
                className='mx-4'
              >
                <Image
                  src={Facebook}
                  alt='social-icon'
                  height={40}
                  width={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='row p-4' style={{ backgroundColor: 'black' }}>
        <div className='d-flex col justify-content-center'>
          <p className={footerStyles.secondary_color}>
            © 2021 VidyaSantosh Pvt. Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
