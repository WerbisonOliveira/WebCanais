//icon
import { BiSolidCategory } from "react-icons/bi";

//components
import ButtonWatch from "../components/ButtonWatch";

//hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

//CSS
import "./ChannelCategorie.css";

function ChannelCategorie() {

  const {categorie} = useParams();

  const [loading, setLoading] = useState(false);
  const [changeCategorie, setChangeCategorie] = useState("");


  const channels = useFetch(`/channels?category=${categorie}`).data;

  const handleCategorie = () => {
    if (!loading){
      setLoading(true);
      setChangeCategorie(categorie);
    }
    setTimeout(() => {setLoading(false)}, 2000);
  }

  categorie !== changeCategorie && handleCategorie();


  return (
    <main className="channels_categorie">
      <div className="box_title">
        <h2 className="channels_categorie_title"><BiSolidCategory/>Categoria: <span>{categorie}</span></h2>
      </div>
      <section className="section_categorie_channels">
        <div className="categorie_channels">
          {loading ? (<p className="loading">Carregando...</p>) : channels?.length !== 0 ? channels.map(channel => (     
            <article className="categorie_channel" key={channel.id}>
              <h3 className="categorie_channel_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          )) : (<p className="no_channels_categorie">Não encontrado</p>)}        
        </div>
      </section>
    </main>
  )
}

export default ChannelCategorie