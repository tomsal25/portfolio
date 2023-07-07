import { HeadFC } from "gatsby";
import NotFound from "../features/NotFound/NotFound";

export const Head: HeadFC = () => <title>Not found</title>;

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
