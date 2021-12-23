import PostItem from './PostItem'
import postStyles from '../styles/PostStyles/PostStyle.module.css'

function PostList({movies}) {
    return (
        <div className={postStyles.post_flex}>
            {movies.map(movie => (
                <PostItem key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default PostList
