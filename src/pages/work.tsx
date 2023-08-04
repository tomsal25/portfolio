import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Card, CardContainer } from "../features/Card";
import { Layout } from "../features/Layouts";

export const query = graphql`
  query Work {
    allMarkdownRemark(sort: { frontmatter: { update: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            # date(formatString: "YYYY/MM/DD")
            update(formatString: "YYYY/MM/DD")
            tags
            title
            summary
            hero {
              childImageSharp {
                gatsbyImageData(width: 300, height: 150)
              }
            }
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
    <Layout>
      <h1 style={{ textAlign: "center" }}>今までやったもの</h1>
      <CardContainer>
        {edges.map(edge => {
          const frontmatter = edge.node.frontmatter;
          if (!frontmatter) return;

          const { update, tags, title, summary, hero } = frontmatter;
          if (!update || !title) return;

          const imageData = hero?.childImageSharp?.gatsbyImageData ?? null;
          const image = getImage(imageData);

          return (
            <Card
              key={edge.node.id}
              date={update}
              tags={tags ?? []}
              title={title}
              text={summary ?? "説明なし"}
              slug={edge.node.fields?.slug ?? "/404"}
              hero={image}
            />
          );
        })}
      </CardContainer>
    </Layout>
  );
};

export default Work;
