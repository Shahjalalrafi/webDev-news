import Link from 'next/Link';
import articleStyle from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
    return ( 
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
     );
}
 
export default ArticleItem;