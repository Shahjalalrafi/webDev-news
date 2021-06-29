import Link from 'next/link'

const article = ({article}) => {
    return ( 
        <>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <Link href="/">GO BACK</Link>
        </>
     );
}
 
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article;