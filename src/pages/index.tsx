import { Link } from "gatsby";
import { ReactNode } from "react";
import "../config/style.scss";
import { Layout } from "../features/Layouts";

export const Head = () => <title>Home</title>;

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        marginBottom: 20,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <Container>
        <h1>Link</h1>
        <a href="https://github.com/tomsal25" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </Container>

      <Container>
        <h1>Work</h1>
        <Link to="/work">今までやったものを見る</Link>
      </Container>
    </Layout>
  );
};

export default Index;
