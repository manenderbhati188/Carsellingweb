import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white w-full flex flex-col items-center py-8'>
      <div className='w-11/12 md:w-9/12 lg:w-8/12 flex flex-col lg:flex-row justify-between items-center gap-6'>
        
        {/* About Section */}
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='text-xl font-semibold mb-2'>About Us</h2>
          <p className='text-center lg:text-left'>
            We are committed to providing the best user experience and delivering exceptional quality. Stay connected with us for the latest updates and offers.
          </p>
        </div>

        {/* Contact Section */}
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
          <p className='text-center lg:text-left'>
            Email: <a href='mailto:manenderbhati188@gmail.com' className='underline text-blue-300'>manenderbhati188@gmail.com</a>
          </p>
          <p className='text-center lg:text-left'>Phone:9728180856</p>
        </div>

        {/* Social Media Section */}
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='text-xl font-semibold mb-2'>Follow Us</h2>
          <div className='flex gap-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-400'>
              <i className='fab fa-facebook-f'></i> {/* Font Awesome icon */}
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-300'>
              <i className='fab fa-twitter'></i> {/* Font Awesome icon */}
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:text-pink-400'>
              <i className='fab fa-instagram'></i> {/* Font Awesome icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='w-full mt-6 border-t border-gray-700 pt-4 text-center'>
        <p className='text-sm'>
          <span>© {new Date().getFullYear()} Your Company Name. All rights reserved.</span>
          <span className='mx-2'>|</span>
          <a href='/terms-and-conditions' className='underline text-blue-300'>
            Terms and Conditions
          </a>
        </p>
        <p className='text-sm mt-2'>
          <span>Developed by <strong>Manender Bhati</strong></span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
