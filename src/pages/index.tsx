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

      <Container>
        <h1>Language</h1>
        <div>
          <ul style={{ width: "fit-content", margin: "auto" }}>
            <li>JavaScript (独学、2022秋~)</li>
            <li>Python (主に実験データのグラフ描画)</li>
            <li>C言語 (大学の授業で履修)</li>
            <li>C++ (マイコンのソース、主にライブラリを利用)</li>
            <li>
              <a href="http://smilebasic.com/" target="_blank" rel="noreferrer">
                SmileBASIC
              </a>
              {" (思い出)"}
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
