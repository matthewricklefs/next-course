import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article}>{article.title}</ArticleItem>
      ))}
    </div>
  );
};

export default ArticleList;
