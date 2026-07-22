import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
        <div className="footer">
          <p>&copy; {year} WebCanais. Todos os direitos reservados.</p>
          <p>Este site apenas indexa a mídia hospedada em serviços de terceiros.</p>
        </div>
    </footer>
  )
}

export default Footer;