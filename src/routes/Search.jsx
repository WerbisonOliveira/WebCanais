//components
import ButtonWatch from "../components/ButtonWatch";

//Hooks
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

//CSS
import "./Search.css";

function Search() {

  const [searchparams] = useSearchParams();
  const search = searchparams.get("q");

  const [loading, setLoading] = useState(false);
  const [changeSearch, setChangeSearch] = useState("");

  const results = useFetch("/search?q=" + search).data;

  const channelFilter = results.channels?.filter(result => result.category !== "Adulto" && result.name.toLowerCase().includes(search.toLowerCase()));

  const eventFilter = results.events?.filter(result => result.title.toLowerCase().includes(search.toLowerCase()));

  const handleSearch = () => {
    if (!loading){
      setLoading(true);
      setChangeSearch(search);
    }
    setTimeout(() => {setLoading(false)}, 2000);
  }

  search !== changeSearch && handleSearch();
  
  return (
    <main className="search_results">
      <h1 className="search_title">Resultados por: <span className="search">{searchparams.get("q")}</span></h1>
      <section className="section_results">
        <h2 className="search_channels">Canais</h2>
        <div className="results_channels">
          {loading ? (<p className="loading">Carregando...</p>) : channelFilter?.length !== 0 ? channelFilter?.map(result => (     
            <article className="result" key={result.id}>
              <h3 className="result_title" title={result.name}>{result.name}</h3>
              <div title={result.name}>
                <img src={result.logo_url} alt={result.name} />
                <ButtonWatch className="watch" id={result.id}/>
              </div>
            </article>
          )) : (<p className="no_channels">Não encontrado.</p>)}        
        </div>
        <h2 className="search_events">Eventos</h2>
        <div className="results_events">
          {loading ? (<p className="loading">Carregando...</p>) : eventFilter?.length !== 0 ? eventFilter?.map(result => (     
            <article className="result_event" key={result.id}>
              <h3 className="event_title" title={result.title}>{result.title}</h3>
              <div title={result.title}>
                <img src={result.poster} alt={result.title} />
                <ButtonWatch className="watch" id={result.id} path="event"/>
              </div>
            </article>
          )) : (<p className="no_channels">Não encontrado.</p>)}        
        </div>
      </section>
    </main>
  )
}

export default Search;