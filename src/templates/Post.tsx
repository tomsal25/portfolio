import { graphql, HeadFC, PageProps } from "gatsby";
import { Article } from "../features/Article";
import { Layout } from "../features/Layouts";

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
      }
    }
  }
`;

export const Head: HeadFC<Queries.PostQuery> = ({ data }) => {
  return <title>{data.markdownRemark?.frontmatter?.title}</title>;
};

const Post = ({ data }: PageProps<Queries.PostQuery>) => {
  const html = data.markdownRemark?.html;
  if (!html) return;

  const frontmatter = data.markdownRemark.frontmatter;
  if (!frontmatter) return;

  const { date, title } = frontmatter;
  if (!date || !title) return;

  return (
    <Layout>
      <Article date={date} title={title}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Layout>
  );
};

export default Post;
