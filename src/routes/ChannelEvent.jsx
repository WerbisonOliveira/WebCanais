//icon
import { FiTv } from "react-icons/fi";

//hooks
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

//CSS
import "./ChannelEvent.css";

function ChannelEvent() {

  const {id} = useParams();
  const event = useFetch(`/sports/${id}`).data;

  const video = document.querySelector(".video");
  const changeProvider = (url) => {
    video.setAttribute("src", `${url}`);
  }

  return (
    <main className="watch_event">
      <section className="section_watch_event">
        <div className="channel_event">
          <h2 className="channel_name"><FiTv/> {event?.title}</h2>
          {event?.embeds && 
            <div className="box_event">
              <iframe className="video" src={event.embeds[0].embed_url} title={event.title} allowFullScreen allow="autoplay; encrypted-media; picture-in-picture" frameBorder={0}>
              </iframe>
              <div className="provider"onChange={(event) => changeProvider(event.target.value)}>
                <select name="provider" id="provider_select">
                  {event.embeds.map((embed, index) => (
                    <option key={index} value={embed.embed_url}>{embed.provider} {embed.quality}</option>
                  ))}
                </select>
              </div>
            </div>
          }
          <div className="info_event">
            <img className="img_event" src={event.poster} alt={event.title} />
            <div className="description">
              <div className="box_category_competition">
                <span className="description_category">{event.category}</span>
                <span className="description_competition">{event.competition}</span>
              </div>
              <p className="description_event">{event.description}</p>
            </div>
          </div>
        </div>  
      </section>
    </main>
  )
}

export default ChannelEvent;