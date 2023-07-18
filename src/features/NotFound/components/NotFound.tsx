import { Link } from "gatsby";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ページが見つかりません</h1>
      <p className={styles.main}>
        URLが正しくありません。
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <code className={styles.code}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">ホームに戻る</Link>.
      </p>
    </main>
  );
};

export default NotFound;
