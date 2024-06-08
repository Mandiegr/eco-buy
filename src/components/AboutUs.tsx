import Link from 'next/dist/client/link';
import style from '../styles/AboutUs.module.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className={style.Container}>
      
      <div>
        <div className={style.Image}> </div>
      </div>

    <div className={style.containerText}>
      <div className={style.text}>
        <strong>Ecobuy</strong>
        <p>Texto sobre nós... então comente sobre</p>
        <p>Texto sobre nós... então comente sobre</p>
        <p>Texto sobre nós... então comente sobre</p>

        <Link href="/app/about">
        <button className={style.Button}>About Us more</button>
      </Link>
       
      </div> 
      </div>
     
    </section>
  );
};
