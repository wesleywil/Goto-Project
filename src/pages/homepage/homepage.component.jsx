import Layout from "../../components/layout/layout.component";
import ItemShowcase from "../../components/item_showcase/item_showcase.component";

const Homepage = () => {
  return (
    <Layout name="Homepage">
      <div className="mt-4 flex justify-center gap-4">
        <ItemShowcase qtd={300} name="Goto Animes" color={"blue"} />
        <ItemShowcase qtd={2850} name="Goto Mangas" color={"green"} />
      </div>
    </Layout>
  );
};

export default Homepage;
