import Meta from '../components/Meta'
import styles from '../styles/Layout.module.css'

function about() {
    return (
        <div className={styles.wrapper}>
            <Meta title='About' />
            <p className={styles.center}>This application was built with Next JS. In this application,
            data was fetch from an API built by me using the Next JS Api Routes and was not gotten from a backend.
            As we know, Next JS is great for Search Engine Optimisation as the first page loads on the server, so SEO crawlers
            can pick them up.</p>
        </div>
    )
}

export default about
