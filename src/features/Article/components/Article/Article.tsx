import { Link } from "gatsby";
import { ReactNode } from "react";
import styles from "./Article.module.scss";

interface Props {
  date: string;
  update: string;
  title: string;
  children: ReactNode;
}

const Article = ({ date, update, title, children }: Props) => {
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
      {children}
    </>
  );
};

export default Article;
