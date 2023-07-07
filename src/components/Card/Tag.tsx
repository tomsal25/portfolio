import styles from "./Tag.module.scss";

interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return <div className={styles.tag}>{name}</div>;
};

export default Tag;
