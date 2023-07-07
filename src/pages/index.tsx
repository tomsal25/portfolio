import "../config/style.scss";
import MainLayout from "../features/Layouts/MainLayout";

export const Head = () => <title>ポートフォリオ</title>;

const Index = () => {
  return (
    <MainLayout>
      <h1>portfolio</h1>
    </MainLayout>
  );
};

export default Index;
