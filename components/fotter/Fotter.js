import Image from "next/image"
import styles from "./fotter.module.css"
import i from '../../public/2.png'


const Fotter = () => {
    return (
        <div className={styles.container}>
            <div>@2023 Maaz. All rights reserved</div>
            <div className={styles.social}>
                <Image src="/1.png" height={15} width={15} alt="Maaz" className={styles.icon} />
                <Image src="/2.png" height={15} width={15} alt="Maaz" className={styles.icon} />
                <Image src="/3.png" height={15} width={15} alt="Maaz" className={styles.icon} />
                <Image src="/4.png" height={15} width={15} alt="Maaz" className={styles.icon} />
            </div>

        </div>
    )
}

export default Fotter