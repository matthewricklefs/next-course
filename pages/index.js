import Head from "next/head";
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Next Course</title>
        <meta name="keywords" content="development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

// Data fetching with NextJS
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
