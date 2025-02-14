import './navbar.css'
function Navbar(){
    return(
        <div className="navbar">
                <div className="logo">
                    Logo
                </div>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Apropos</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="user">
                    <a href="#">login|Sign Up</a>
                </div>
        </div>
    )
}
export default Navbar