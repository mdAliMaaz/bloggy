import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"


const Blog = () => {

    return (

        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <Link href={"/blog/id"}>
                        <Image className={styles.image} src="/blog 3.jpg" fill={true} />
                    </Link>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Reading</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere dolore fugiat qui eligendi assumenda architecto obcaecati. Sequi, exercitationem ex!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quo ex suscipit. Suscipit labore assumenda quia commodi neque repudiandae pariatur?
                    </p>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <Link href='/blog/id'>
                        <Image className={styles.image} src="/blog2.jpg" fill={true} />
                    </Link>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Spirituality</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere dolore fugiat qui eligendi assumenda architecto obcaecati. Sequi, exercitationem ex!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quo ex suscipit. Suscipit labore assumenda quia commodi neque repudiandae pariatur?
                    </p>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <Link href={"/blog/id"}>
                        <Image className={styles.image} src="/blog1.jpg" fill={true} />
                    </Link>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Animals</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere dolore fugiat qui eligendi assumenda architecto obcaecati. Sequi, exercitationem ex!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quo ex suscipit. Suscipit labore assumenda quia commodi neque repudiandae pariatur?
                    </p>
                </div>
            </div>

        </div>


    )
}

export default Blog