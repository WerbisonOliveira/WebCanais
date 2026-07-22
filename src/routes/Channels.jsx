//Icon
import { FiTv } from "react-icons/fi";

//components
import ButtonWatch from "../components/ButtonWatch";
import Button from "../components/Button";

//hooks
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

//CSS
import "./Channels.css";

function Channels() {

  const [Index, SetIndex] = useState(19);

  const channels = useFetch("/channels").data;

  const filterChannels = channels?.filter(channel => channel.category !== "Adulto");

  const redirectCategorie = (categorie) => {
    redirect("/channels/" + categorie);
  }

  const showChannels = () => {
    SetIndex((prev) => prev + 20);
  }


  return (
    <main className="all_channels">
      <section className="section_channels">
        <h3 className="channels"><FiTv/> Canais</h3>
        <div className="list_all_channels">
          {filterChannels.length === 0 ? <p className="loading_channels">Carregando...</p> : filterChannels.length !== 0 ? filterChannels?.filter((channel, index) => index <= Index).map(channel => (     
            <article className="channel_tv" key={channel.id}>
              <h3 className="channel_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          )) : (<p className="no_channels">Sem canais no momento.</p>)}        
        </div>
        {Index < filterChannels.length ? (<button title="Ver mais" className="btn_show_channels" onClick={() => showChannels()}>Ver mais</button>) : Index >= filterChannels.length && ""}   
      </section>
    </main>
  )
}

export default Channels