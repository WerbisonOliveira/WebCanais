//icons
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { FiTv } from "react-icons/fi";

//hooks
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//components
import Button from "../components/Button";
import ButtonWatch from "../components/ButtonWatch";

//CSS
import "./Home.css";

function Home() {

  const redirect = useNavigate();

  const events = useFetch("/sports?category=Futebol").data;
  const channelsSports = useFetch("/channels?category=Esportes").data;
  const channelsNoticies = useFetch("/channels?category=Noticias").data;
  const channelsEntertainment = useFetch("/channels?category=Entretenimento").data;
  const channelsInfantil = useFetch("/channels?category=Infantil").data;


  const redirectCategorie = (categorie) => {
    redirect("/channels/" + categorie);
  }

  window.scrollTo(0, 0);

  return (
    <main>
      <section className="section_events">
          <h3 className="events_live"><FiTv/> Eventos</h3>
          <Button list="list_events"/>
          <div className="list_events">
            {events.length === 0 ? <p className="no_events">Sem eventos no momento.</p> : events?.sort((u) => u.status === "live" ? -1 :  u.status === "upcoming" ? -1 : 1).map(event => (
              <article className="event" key={event.id}>
                <h3 className="event_title" title={event.title}>{event.title}</h3>
                <div title={event.competition}>
                  <span className="status" style={event.status === "finished"? {backgroundColor: "#f40034"} : event.status === "upcoming" ? {backgroundColor: "#38BDF8"} : {backgroundColor: "#42988f"}}>{event.status === "finished"? "Finalizado" : event.status === "upcoming" ? "Em Breve" : "Ao vivo"}</span>
                  <img src={event.poster} alt={event.title} />
                  <ButtonWatch path="event" className="watch" id={event.id}/>
                </div>
                <p className="category">{event.competition}</p>
                <p className="date_time"><CiCalendar className="calendar"/>{event.start_time.slice(0, 10).split("-").reverse().join("/")} <span>|</span> <CiClock2 className="clock"/>{event.start_time.slice(10, 16)}</p>
              </article>
            ))}       
          </div>
      </section>
      <section className="section_sports">
        <h3 className="sports"><FiTv/> Esportes</h3>
        <div className="box_btns">
          <button className="view_channels" onClick={() => redirectCategorie("Esportes")}>Ver Todos</button>
          <Button list="list_channels_sports" />
        </div>
        <div className="list_channels_sports">
          {channelsSports.length === 0 ? <p className="no_channels_sports">Sem canais no momento.</p> : channelsSports?.filter((channel, index) => index <= 10).map(channel => (     
            <article className="sport" key={channel.id}>
              <h3 className="sports_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          ))}        
        </div>   
      </section>
      <section className="section_noticies">
        <h3 className="noticies"><FiTv/> Notícias</h3>
        <div className="box_btns">
          <button className="view_channels" onClick={() => redirectCategorie("Noticias")}>Ver Todos</button>
          <Button list="list_channels_noticies" />
        </div>
        <div className="list_channels_noticies">
          {channelsNoticies.length === 0 ? <p className="no_channels_noticies">Sem canais no momento.</p> : channelsNoticies?.filter((channel, index) => index <= 10).map(channel => (     
            <article className="noticie" key={channel.id}>
              <h3 className="noticies_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          ))}        
        </div> 
      </section>
      <section className="section_varieties">
        <h3 className="varieties"><FiTv/> Entretenimento</h3>
        <div className="box_btns">
          <button className="view_channels" onClick={() => redirectCategorie("Entretenimento")}>Ver Todos</button>
          <Button list="list_channels_varieties" />
        </div>
        <div className="list_channels_varieties">
          {channelsEntertainment.length === 0 ? <p className="no_channels_varieties">Sem canais no momento.</p> : channelsEntertainment?.filter((channel, index) => index <= 10).map(channel => (     
            <article className="varietie" key={channel.id}>
              <h3 className="varieties_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          ))}        
        </div> 
      </section>
      <section className="section_channels_globo">
        <h3 className="channels_globo"><FiTv/> Infantil</h3>
        <div className="box_btns">
          <button className="view_channels" onClick={() => redirectCategorie("Infantil")}>Ver Todos</button>
          <Button list="list_channels_globo" />
        </div>
        <div className="list_channels_globo">
          {channelsInfantil.length === 0 ? <p className="no_channels_globo">Sem canais no momento.</p> : channelsInfantil?.filter((channel, index) => index <= 10).map(channel => (     
            <article className="channel_globo" key={channel.id}>
              <h3 className="channels_globo_title" title={channel.name}>{channel.name}</h3>
              <div title={channel.name}>
                <img src={channel.logo_url} alt={channel.name} />
                <ButtonWatch className="watch" id={channel.id}/>
              </div>
            </article>
          ))}        
        </div> 
      </section>
    </main>
  )
}

export default Home