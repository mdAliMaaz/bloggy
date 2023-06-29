import Button from "@/components/button/Button"
import styles from "./page.module.css"
import Image from "next/image"

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem harum eaque alias sunt minima expedita? Obcaecati illum unde animi recusandae distinctio pariatur ut dolorem, et, neque cum fugiat?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ipsam ad enim iure eum quaerat omnis eveniet voluptas dignissimos aperiam.
                    </p>
                    <Button text={"See More"} url={""} />
                </div>
                <div className={styles.imagecontainer}>
                    <Image src={"/one.jpg"}
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Websites</h1>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem harum eaque alias sunt minima expedita? Obcaecati illum unde animi recusandae distinctio pariatur ut dolorem, et, neque cum fugiat?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil nam, tempore in repellat odit nulla dolorum quasi illum? Similique?
                    </p>
                    <Button text={"See More"} url={""} />
                </div>
                <div className={styles.imagecontainer}>
                    <Image src={"/two.jpg"}
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Application</h1>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem harum eaque alias sunt minima expedita? Obcaecati illum unde animi recusandae distinctio pariatur ut dolorem, et, neque cum fugiat?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro cupiditate totam soluta hic cum, iusto esse consequatur id assumenda?
                    </p>
                    <Button text={"See More"} url={""} />
                </div>
                <div className={styles.imagecontainer}>
                    <Image src={"/three.jpg"}
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category