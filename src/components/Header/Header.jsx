import './Header.css'
import logoWithName from "/assets/logoWithName.png"

function Header() {
    return(
        <header>
            <img src={logoWithName} className='logo' alt="Logo Sportsee" />
            <a href="">Accueil</a>
            <a href="">Profil</a>
            <a href="">Réglages</a>
            <a href="">Communauté</a>
        </header>
    )
}

export default Header;