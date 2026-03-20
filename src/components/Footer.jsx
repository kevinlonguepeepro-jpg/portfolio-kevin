export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__name">Kevin Longuepée</p>
        <p className="footer__copy">© {new Date().getFullYear()} — Tous droits réservés</p>
      </div>
    </footer>
  )
}
