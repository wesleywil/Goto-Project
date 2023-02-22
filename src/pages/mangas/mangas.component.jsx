import Layout from "../../components/layout/layout.component";
import MainCard from "../../components/main_card/main_card.component";

const Mangas = () => {
  return (
    <Layout name="Mangas">
      <div className="mt-4 flex flex-wrap gap-2">
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </Layout>
  );
};

export default Mangas;
