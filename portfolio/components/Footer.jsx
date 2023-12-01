import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <img
          src='/images/profile.jpg'
          alt='Profile Picture'
          className='w-24 h-24 rounded-full mb-4'
        />
        <h3 className='text-lg font-semibold mb-2'>Get in Touch</h3>
        <p className='mb-4'>
          Feel free to reach out to me through the email or phone number below.
        </p>
        <div className='flex flex-col items-center space-y-2'>
          <Link href='mailto:emanuel.gustafzon@gmail.com' className='underline'>
            emanuel.gustafzon@gmail.com
          </Link>
          <Link href='tel:+46761888619' className='underline'>
          +46761888619
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
