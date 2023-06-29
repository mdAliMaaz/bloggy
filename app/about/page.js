import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import AbtImg from '../../public/pexel.jpg'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            About
            <div className={styles.ImgContainer}>
                <Image className={styles.img} src={AbtImg} alt='about_Img' fill={true} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storyteller</h1>
                    <h2 className={styles.ImgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who We Are?</h1>

                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias sed tenetur, inventore ducimus placeat excepturi unde suscipit, facilis, recusandae aliquam dignissimos assumenda optio amet magnam. Aut facilis veritatis velit sapiente dignissimos consequatur
                        <br />
                        <br />
                        corrupti ut rerum at vero numquam dolorum sint quaerat, ullam mollitia non! At, officiis molestiae quos tempore neque, vitae voluptatibus eum illum facilis suscipit quaerat voluptas quis ex cum nemo eius magnam laboriosam dolores vel nobis minus.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title} >What We Do?</h1>

                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias sed tenetur, inventore ducimus placeat excepturi unde suscipit, facilis, recusandae aliquam dignissimos assumenda optio amet magnam. Aut facilis veritatis velit sapiente dignissimos consequatur
                        <br />
                        <br />
                        <Button url={"/contact"} text={"Contact"} />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About