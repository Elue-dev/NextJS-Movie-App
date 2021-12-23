import { server } from '../../../../config'
import Meta from '../../../components/Meta'
import styles from '../../../styles/Layout.module.css'
import Image from 'next/image'

export const getStaticProps = async (context) => {
    const res = await fetch (`${server}/api/movies/${context.params.id}`)
    const movie = await res.json()

    return{
        props:{
            movie
        }
    }
 }

 export const getStaticPaths = async () => {
    const res = await fetch (`${server}/api/movies/`)
    const movies = await res.json()
    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return{
        paths,
        fallback: false
    }
 }

function index({movie}) {
    return (
        <>
            <Meta title={movie.title}/>
            <div className={styles.wrapper}>
                <div>
                    <img src={movie.image} alt={movie.title} className={styles.image}/>
                </div>
                <div>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Production Company:</b> {movie.production_company}</p>
                    <p className={styles.overview}><b>Overview:</b> {movie.overview}</p>
                </div>
            </div>
        </>
    )
}

export default index
