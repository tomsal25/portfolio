import { graphql, PageProps } from "gatsby";
import Card from "../components/Card";
import MainLayout from "../features/Layouts/MainLayout";

export const query = graphql`
  query Work {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            tags
            title
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Work</title>;

const Work = ({ data }: PageProps<Queries.WorkQuery>) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <MainLayout>
      <div>
        <h1>全ての記事</h1>
        <div style={{ display: "flex", gap: 10 }}>
          {edges.map(edge => {
            const frontmatter = edge.node.frontmatter;
            if (!frontmatter) return;

            const { date, tags, title } = frontmatter;
            if (!date || !title) return;

            return (
              <Card
                key={edge.node.id}
                date={date}
                tags={tags ?? []}
                title={title}
                slug={edge.node.fields?.slug ?? "/404"}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Work;
