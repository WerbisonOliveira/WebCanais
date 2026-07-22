//icon
import { FiTv } from "react-icons/fi";

//Hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//CSS
import "./Channel.css";

function Channel() {

  const {id} = useParams();

  const channel = useFetch(`/channels/${id}`).data;

  const video = document.querySelector(".video");
  const changeProvider = (url) => {
    video.setAttribute("src", `${url}`);
  }

  return (
    <main className="watch_channel">
      <section className="section_watch_channel">
        <div className="channel">
          <h2 className="channel_name"><FiTv/> {channel?.name}</h2>
          {channel?.embeds && 
            <div className="box_channel">
              <iframe className="video" src={channel.embeds[0].embed_url} title={channel.name} allowFullScreen allow="autoplay; encrypted-media; picture-in-picture" frameBorder={0}>
              </iframe>
              <div className="provider"onChange={(event) => changeProvider(event.target.value)}>
                <select name="provider" id="provider_select">
                  {channel.embeds.map((embed, index) => (
                    <option key={index} value={embed.embed_url}>{embed.provider} {embed.quality}</option>
                  ))}
                </select>
              </div>
            </div>
          }
          <div className="info_channel">
            <img className="img_channel" src={channel?.logo_url} alt={channel?.name} />
            <div className="description">
              <span className="description_category">{channel?.category}</span>
              <p className="description_channel">{channel?.description}</p>
            </div>
          </div>
        </div>  
      </section>
    </main>
  )
}

export default Channel