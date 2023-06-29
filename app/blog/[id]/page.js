import Image from 'next/image'
import styles from './page.module.css'
const Blog = ({ params }) => {
    console.log(params.id)
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.mainContainer}>

                    <p className={styles.smDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquam ad iste magnam mollitia eos quisquam reprehenderit fugit ducimus odit quo culpa beatae vitae repellendus illum cumque dolor sapiente dicta, placeat sit! Nisi similique commodi molestiae officia laboriosam nihil velit eveniet corrupti qui distinctio veniam quaerat assumenda accusantium, magni nemo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique repellendus labore, qui nam ab repellat laudantium. Id, est vel aut eaque in, cumque, et facere quaerat saepe adipisci pariatur.
                        ad iste magnam mollitia eos quisquam reprehenderit fugit ducimus odit quo culpa beatae vitae repellendus illum cumque dolor sapiente dicta, placeat sit! Nisi similique commodi molestiae officia
                        nemo?repellendus illum cumque dolor sapiente dicta, placeat sit! Nisi similique commodi
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique repellendus labore, qui nam ab repellat laudantium. Id, est vel aut eaque in, cumque, et facere quaerat saepe adipisci pariatur.
                    </p>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src="/blog2.jpg" fill={true} />
                    </div>
                </div>
                <div className={styles.desc}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates similique beatae cupiditate, quisquam ut modi sed mollitia architecto nobis in maxime adipisci aspernatur eius quia iste praesentium laborum corporis veniam, et asperiores quae incidunt at culpa rerum! Porro quaerat iste est magnam libero neque alias qui, quos eveniet quis ex, modi velit nihil? Tempora, doloribus officia? Veniam dolorem quas qui earum reprehenderit illum eveniet mollitia labore nisi neque, reiciendis omnis corporis, blanditiis minus consequatur saepe id corrupti? Soluta, consequatur labore? Iste nostrum, explicabo sit sed corporis quidem labore possimus laboriosam. Laudantium in earum ex dolorem ducimus maxime saepe eveniet distinctio culpa rem. Non laboriosam laborum eos delectus autem vero possimus amet similique odit aperiam, maxime voluptatem hic consectetur voluptatibus est quaerat saepe facere earum dignissimos error. Tempora, saepe esse officia recusandae deserunt laboriosam incidunt quibusdam asperiores, voluptate, tenetur quia culpa rem velit vel molestias iste temporibus pariatur. Quasi sapiente nemo alias doloribus expedita dolorem dolore necessitatibus architecto, cum, ipsam, sunt vitae quia facilis sed. Ab rerum consequatur accusamus nulla at fugit iste suscipit, laboriosam quisquam error quo blanditiis nesciunt, officia unde ad inventore quaerat sit ipsam deserunt, sequi fuga. Explicabo adipisci dolorem saepe nam mollitia laborum ipsum at nostrum omnis.</p>
                </div>
            </div>
        </div>
    )
}

export default Blog