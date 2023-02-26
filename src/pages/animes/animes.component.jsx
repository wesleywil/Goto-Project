import { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import Layout from "../../components/layout/layout.component";
import MainCard from "../../components/main_card/main_card.component";

const Animes = () => {
  const animes = useSelector((state)=> state.animes.animes);

  useEffect(()=>{
    console.log("Animes Page UseEffect")
  },[animes])

  return (
    <Layout name="Animes">
      {/* Anime List */}
      <div className="mt-4 flex flex-wrap gap-2">
        {
          animes.length?animes.map((item, i)=>(
           
            <MainCard key={i} info={item} />
          )):"NO ANIMES YET"
        }
      </div>
    </Layout>
  );
};

export default Animes;
