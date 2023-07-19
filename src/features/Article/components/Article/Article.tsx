import { Link } from "gatsby";
import { ReactNode } from "react";
import styles from "./Article.module.scss";

interface Props {
  date: string;
  update: string;
  title: string;
  html: string;
  children: ReactNode;
}

const Article = ({ date, update, title, html }: Props) => {
  return (
    <>
      <div className={styles.back}>
        <div>{"<"}</div>
        <Link to="/work">一覧へ戻る</Link>
      </div>
      <div className={styles.meta}>
        <h1>{title}</h1>
        <div className={styles.date}>{`公開日：${date}`}</div>
        {/* if an article is updated, display it */}
        {date != update && (
          <div className={styles.date}>{`更新日：${update}`}</div>
        )}
      </div>
      <div className={styles.main} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Article;
