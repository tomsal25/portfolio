import { Link as _Link } from "gatsby";
import styles from "./Link.module.scss";

interface Props {
  to: string;
  name: string;
}

const Link = ({ to, name }: Props) => {
  return (
    <_Link className={styles.link} to={to}>
      {name}
    </_Link>
  );
};

export default Link;
