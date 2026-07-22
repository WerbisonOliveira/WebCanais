//icons
import { FaPlay } from "react-icons/fa";

//hooks
import { useNavigate } from "react-router-dom";


function ButtonWatch({id, className, path}) {

    const redirect = useNavigate();

    const redirectChannel = () => {
        path === "event" ? redirect("/event/" + id) : redirect("/channel/" + id);
    }

    return (
        <button className={className} onClick={() => redirectChannel()}><FaPlay/> Assistir</button>
    )
}

export default ButtonWatch