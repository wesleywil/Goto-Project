import { useSelector } from "react-redux";

import Layout from "../../components/layout/layout.component";
import ItemShowcase from "../../components/item_showcase/item_showcase.component";

const Homepage = () => {
  const animes = useSelector((state)=> state.animes.animes);
  const mangas = useSelector((state)=> state.mangas.mangas);
  return (
    <Layout name="Homepage">
      <div className="mt-4 flex justify-center gap-4">
        <ItemShowcase qtd={animes.length} name="Animes"/>
        <ItemShowcase qtd={mangas.length} name="Mangas"/>
      </div>
    </Layout>
  );
};

export default Homepage;
