import { Link } from "gatsby";
import Tag from "../Tag/Tag";
import styles from "./Card.module.scss";

interface Props {
  date: string;
  tags: readonly (string | null)[];
  title: string;
  slug: string;
}

const Card = ({ date, tags, title, slug }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.tagbox}>
        {tags.map(tag => {
          if (tag) {
            return <Tag key={tag} name={tag} />;
          }
        })}
      </div>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <p>{date}</p>
    </div>
  );
};

export default Card;
