//icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

//CSS
import "./Button.css";

function Button({list}) {

  const lista = document.querySelector(`.${list}`);

  const scrollRight = () => {
    lista.scrollBy(500, 0)
  }

  const scrollLeft = () => {
    lista.scrollBy(-500, 0)
  }

  return (
    <div className="arrow_btns">
      <button onClick={() => scrollLeft()}><MdKeyboardArrowLeft className="arrow_left"/></button>
      <button onClick={() => scrollRight()}><MdKeyboardArrowRight className="arrow_right"/></button>
    </div>
  )
}

export default Button