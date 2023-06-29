import Image from "next/image";
import Hero from 'public/hero.png';
import styles from './page.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <h1 className={styles.title}>Better desgin for your digital products.</h1>
        <p className={styles.desc}>turning your ideas into reality.we bring together the teams from global tech industry.</p>
      </div>

      <div className={styles.item}>
        <Image src={Hero} className={styles.image} alt="hero-img" />
      </div>

    </div>
  )
}
