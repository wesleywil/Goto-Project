import { useSelector } from "react-redux";


import Layout from "../../components/layout/layout.component";
import MainCard from "../../components/main_card/main_card.component";

const Mangas = () => {
  const mangas = useSelector((state)=> state.mangas.mangas);

  return (
    <Layout name="Mangas">
      {/* Manga List */}
      <div className="mt-4 flex flex-wrap gap-2">
      {
          mangas.length?mangas.map((item, i)=>(
           
            <MainCard key={i} info={item} />
          )):"NO MANGAS YET"
        }
      </div>
    </Layout>
  );
};

export default Mangas;
