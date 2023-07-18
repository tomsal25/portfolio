import { Link } from "gatsby";
import { ReactNode } from "react";
import styles from "./Article.module.scss";

interface Props {
  date: string;
  title: string;
  children: ReactNode;
}

const Article = ({ date, title, children }: Props) => {
  return (
    <>
      <div className={styles.back}>
        <div>{"<"}</div>
        <Link to="/work">一覧へ戻る</Link>
      </div>
      <div className={styles.meta}>
        <h1>{title}</h1>
        <div className={styles.releasedate}>{`公開日：${date}`}</div>
      </div>
      {children}
    </>
  );
};

export default Article;
