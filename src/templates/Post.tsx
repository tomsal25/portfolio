import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout } from "../features/Layouts";

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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

  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Post;
