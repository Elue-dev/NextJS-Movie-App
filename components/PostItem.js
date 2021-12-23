import Link from 'next/link'
import postStyles from '../styles/PostStyles/PostStyle.module.css'

function PostItem({movie}) {
    return (
            <Link href='/article/[id]' as={`/article/${movie.id}`}>
                <a className={postStyles.posts}>
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title} &rarr;</h3>
                    <p>{movie.excerpt}</p>
                </a>
            </Link>
    )
}

export default PostItem
