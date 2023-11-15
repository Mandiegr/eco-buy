import Link from 'next/link';
//import Image from 'next/image';
import BackgroundImg from '../public/background.jpg'
export const Banner: React.FC = () => {

  return (
    <div>

<div style={{ backgroundImage: `url(${BackgroundImg.src})`, backgroundSize: 'cover', minHeight: '100vh', margin:'0 auto' }}> </div>
      
     
    </div>
  );
};
