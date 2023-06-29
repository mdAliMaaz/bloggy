import Image from 'next/image'
import styles from './page.module.css'
import Img from '../../public/contact.png'
import Button from '@/components/button/Button'
const Contact = () => {
    return (

        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.ImgContainer}>

                    <Image
                        src={Img}
                        alt='contact_pic'
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='Enter Name:' className={styles.input} />
                    <input type="email" placeholder='Enter email:' className={styles.input} />
                    <textarea className={styles.textArea} placeholder='message' cols="30" rows="10"></textarea>
                    <Button url={""} text={"Send"} />
                </form>
            </div>
        </div>
    )
}

export default Contact