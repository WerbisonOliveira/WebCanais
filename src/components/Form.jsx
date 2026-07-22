import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//CSS
import "./Form.css";

function Form() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const categories = useFetch("/channels/categories").data;
    const arrayCategories = [];

    categories.filter((categorie) => categorie.name !== "Adulto" ? arrayCategories.push(categorie) : "");

    const redirect = (event) => {
        event.preventDefault();
        setSearch("");
        navigate("/search?q=" + search); 
        return; 
    }

    const channelsCategorie = (categorie) => {
        navigate(`/channels/${categorie}`);
        return;
    }
    

    return (
        <section className="section_search">
          <h1 className="title">WebCanais</h1>
          <p>Procure pelo seu canal favorito ou pelo evento esportivo que deseja assistir.</p>
          <form onSubmit={(event) => redirect(event)}>
            <label htmlFor="search">
                <input type="search" name="search" id="search" minLength={2} value={search} placeholder="Buscar canal..." onChange={(e) => setSearch(e.target.value)} title="Buscar"/>
            </label>
            {search.length >= 2 ? (<button type="submit" className="btn_search">Buscar</button>) : (<button type="submit" className="btn_search_disabled" disabled>Buscar</button>)}
          </form>
          <p>Ou escolha uma categoria:</p>
          <div className="categories">
            {arrayCategories?.map((categorie) => (
                <span className="categorie" key={categorie.id} onClick={() => channelsCategorie(categorie.name)}>{categorie.name}</span>
            ))} 
          </div>
          <div className="line"></div>      
        </section>
    )
}

export default Form