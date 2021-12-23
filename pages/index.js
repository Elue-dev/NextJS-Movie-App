import Head from 'next/head'
import { server } from '../../config'
import PostList from '../components/PostList'
import styles from '../styles/Layout.module.css'

export const getStaticProps = async () => {
  const res = await fetch (`${server}/api/movies`)
  const movies = await res.json()

  return{
    props: {
      movies
    }
  }
}

export default function Home({movies}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>Next JS Movie Application</h1>
      <PostList movies={movies} />
    </div>
  )
}
