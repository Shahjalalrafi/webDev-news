import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="web developer, application" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
