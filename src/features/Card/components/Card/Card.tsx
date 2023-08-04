import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Tag from "../Tag/Tag";
import styles from "./Card.module.scss";

interface Props {
  date: string;
  tags: readonly (string | null)[];
  title: string;
  text: string;
  slug: string;
  hero?: IGatsbyImageData;
}

const Card = ({ date, tags, title, text, slug, hero }: Props) => {
  return (
    <div className={styles.card}>
      {hero && <GatsbyImage image={hero} alt={title} className={styles.hero} />}
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
      <div>{text}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default Card;
